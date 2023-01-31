from rest_framework import serializers
from .models import Category,Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Category
        fields = "__all__"

    def get_product(self,obj):
        product_data = Product.objects.filter(category__id=obj.id)
        ser = ProductSerializer(product_data,many=True)
        return ser.data