from django.contrib import admin
from .models import Category, Product
# Register your models here.

admin.site.register(Category)
admin.site.register(Product)

[
    {
        "name": "The Beatles",
        "genre": "Rock",
        "country": "UK",
        "formed_years": 1960,
        "is_active": false
    },
    {
        "name": "Dimash Qudaibergen",
        "genre": "Classical Crossover",
        "country": "Kazakhstan",
        "formed_years": 2013,
        "is_active": true
    }
]

{
"id"
:
1
,
"tittle"
:
"Abbey Road"
,
"release_year"
:
1969
,
"tracks"
:
17
,
"duration_mins"
:
47
,
"price"
:
4500.0
,
"artist"
:
1
}