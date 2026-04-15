from rest_framework.routers import DefaultRouter
from .views import ArtistViewSet, AlbumViewSet

router = DefaultRouter()
router.register('artists', ArtistViewSet)
router.register('albums', AlbumViewSet)

urlpatterns = router.urls