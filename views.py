from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import Product,Category
from .serializer import ProductSerializer,CategorySerializer
from rest_framework import status

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    products = ''
    if query == None:
        query = ''
        products = Product.objects.all().order_by('-createdAt')
    else:
        products = Product.objects.filter(
        name__icontains=query,category__icontains=query).order_by('-createdAt')    
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getfiveProducts(request):
    products = Product.objects.all().order_by('-createdAt')[:5] 
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['GET'])
def getcategories(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def deletecategory(request,id):
    category = Category.objects.get(id=id)
    category.delete()
    return Response('Category Deleted')

@api_view(['DELETE'])
def deleteproduct(request,id):
    product = Product.objects.get(id=id)
    product.delete() #small p for variables
    return Response('Product Deleted')

@api_view(['PUT'])
def updateProduct(request, id):
    data = request.data
    product = Product.objects.get(id=id)
    product.name = data['name']
    product.pdf_file = request.FILES.get('pdf_file')
    product.description = data['description']
    product.category = data['category']
    product.image = request.FILES.get('image')
    product.link = data['link']
    product.QR_CODE = request.FILES.get('QR_CODE')
    product.save()
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProduct(request):
    user = request.user
    data = request.data
    product = Product.objects.create(
        user=user,
        name = data['name'],
        pdf_file = request.FILES.get('pdf_file'),
        description = data['description'],
        category = data['category'],
        image = request.FILES.get('image'),
        link = data['link'],
        QR_CODE = request.FILES.get('QR_CODE')
        )
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

