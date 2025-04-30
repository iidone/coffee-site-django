from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views 

urlpatterns = [
    path('', views.index, name = 'index'),
    path('load-more-reviews/', views.load_more_reviews, name='load_more_reviews'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
