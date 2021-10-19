from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("gameplayVSrealLifeComparison", views.comparison, name="comparison"),
    path("LocationSpotlights", views.spotlights, name="spotlights"),
    path("compendium", views.compendium, name="compendium"),
    path("locomotives", views.locomotives, name="locomotives"),
    path("passenger", views.passenger, name="passenger"),
    path("freight", views.freight, name="freight")
]