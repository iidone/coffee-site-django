from django.shortcuts import render, redirect
from .models import Menu, ReviewsTemp, Tickets
from django.http import JsonResponse


def load_more_reviews(request):
    offset = int(request.GET.get('offset', 0))
    limit = 3
    reviews = ReviewsTemp.objects.all().order_by('-date')[offset:offset + limit]

    reviews_data = []
    for review in reviews:
        reviews_data.append({
            'name': review.name,
            'rate': review.rate,
            'review': review.review,
            'date': review.date.strftime("%d %b %Y в %H:%M"),
        })

    return JsonResponse(reviews_data, safe=False)


from datetime import datetime

def index(request):
    products = Menu.objects.all()
    tickets = Tickets.objects.all()
    reviews = ReviewsTemp.objects.all().order_by('-date')[:3]
    reviews_count = ReviewsTemp.objects.count()

    now = datetime.now().date()
    Tickets.objects.filter(date__lt=now).delete()

    if request.method == 'POST' and 'review' in request.POST:
        name = request.POST.get('name')
        review_text = request.POST.get('review')
        rating = request.POST.get('rating')

        new_review = ReviewsTemp(name=name, review=review_text, rate=rating)
        new_review.save()

        reviews = ReviewsTemp.objects.all().order_by('-date')[:3]
        reviews_count = ReviewsTemp.objects.count()

        return render(request, 'main/index.html', {"products": products, "reviews": reviews, "tickets": tickets, "reviews_count": reviews_count})
    
    if request.method == 'POST' and 'phone' in request.POST:
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        date = request.POST.get('date')
        time = request.POST.get('time')
        num = request.POST.get('numPersons')
        allergy = request.POST.get('allergy')
        comment = request.POST.get('comment')

        new_ticket = Tickets(name=name, phone=phone, date=date, time=time, num=num, allergy=allergy, comment=comment)
        new_ticket.save()

        return render(request, 'main/index.html', {"products": products, "reviews": reviews, "tickets": tickets, "reviews_count": reviews_count})

    return render(request, 'main/index.html', {"products": products, "reviews": reviews, "tickets": tickets, "reviews_count": reviews_count})

