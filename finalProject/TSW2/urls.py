from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("gameplayVSrealLifeComparison", views.comparison, name="comparison"),
    path("LocationSpotlights", views.spotlights, name="spotlights")
]