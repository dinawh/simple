from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.getProducts),
    path('product/<int:id>', views.getProduct),
    path('categories/', views.getcategories),
    path('deleteproduct/<int:id>', views.deleteproduct),
    path('deletecategory/<int:id>', views.deletecategory),
    path('updateProduct/<int:id>', views.updateProduct),
    path('createProduct/', views.createProduct),
    path('getfiveProducts/', views.getfiveProducts),
]