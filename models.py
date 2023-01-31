from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

class Product(models.Model):
    user  = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    pdf_file = models.FileField(upload_to='pdfs/',null=True,blank=True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    image = models.ImageField(upload_to='photos/product')
    link = models.CharField(max_length=200,null=True,blank=True)
    QR_CODE = models.ImageField(upload_to='photos/QR')
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name