from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

# urlpatterns = [
#     path('products/', views.product_list, name = 'product_list'),
#     path('products/<int:id>/', views.product_detail, name = 'product_detail'),
#     path('categories/', views.category_list, name = 'category_list'),
#     path('categories/<int:id>/', views.category_detail, name = 'category_detail'),
#     path('categories/<int:id>/products/', views.category_products, name = 'category_products')
# ]

router = DefaultRouter()
router.register('categories', CategoryViewSet, basename = 'categories')
router.register('products', ProductViewSet, basename='products')

urlpatterns = router.urls