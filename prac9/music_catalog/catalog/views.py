from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Artist, Album
from .serializers import ArtistSerializer, AlbumSerializer

class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    @action(detail=True, methods=['get'])
    def albums(self, request, pk=None):
        artist = self.get_object()
        albums = Album.objects.filter(artist=artist)
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data)


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    @action(detail=False, methods=['get'])
    def recent(self, request):
        recent_albums = Album.objects.filter(release_year__gte=2020)
        serializer = AlbumSerializer(recent_albums, many=True)
        return Response(serializer.data)