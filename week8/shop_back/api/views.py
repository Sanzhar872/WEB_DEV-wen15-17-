from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = [{"id": p.id, "name": p.name, "price": p.price, "description": p.description, "count": p.count, "is_active": p.is_active} for p in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({"id": p.id, "name": p.name, "price": p.price, "description": p.description, "count": p.count})
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({"id": c.id, "name": c.name})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    try:
        products = Product.objects.filter(category_id=id)
        data = [{"id": p.id, "name": p.name, "price": p.price} for p in products]
        return JsonResponse(data, safe=False)
    except Exception:
        return JsonResponse({'error': 'Error fetching products'}, status=400)