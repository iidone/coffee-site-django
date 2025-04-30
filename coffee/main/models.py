from django.db import models

class Menu(models.Model):
    item = models.CharField('Название продукта', max_length=100)
    type = models.CharField('Тип', max_length = 100)
    image = models.ImageField(upload_to = 'main/images/', null=True, max_length=255)
    price = models.CharField('Цена', max_length = 100)

    def __str__(self):
        return f'Название: {self.item}'

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    @property
    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url
        
class Tickets(models.Model):
    name = models.CharField('Имя', max_length=100)
    phone = models.CharField('Телефон', max_length=100)
    date = models.DateField('Дата', max_length=100)
    time = models.CharField('Время', max_length=50)
    num = models.CharField('Количество персон', max_length=100)
    allergy = models.CharField('Аллергия', max_length=255)
    comment = models.CharField('Комментарий', max_length=255)

    def __str__(self):
        return f'бронь №{self.id}'

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'


class ReviewsTemp(models.Model):
    name = models.CharField(max_length=100)
    review = models.TextField()
    rate = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Отзыв от: {self.name}'
    
    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'