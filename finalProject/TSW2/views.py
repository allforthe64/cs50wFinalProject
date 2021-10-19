import json 
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize
from .models import Locos, Freight, Passenger

# Create your views here.
def index(request):
    return render(request, "TSW2/index.html")

def comparison(request):
    return render(request, "TSW2/comparison.html")

def spotlights(request):
    return render(request, "TSW2/spotlights.html")

def compendium(request):
    return render(request, "TSW2/compendium.html")

@csrf_exempt
def locomotives(request):

    queryset = Locos.objects.all()
    return JsonResponse([q.serialize() for q in queryset], safe=False)

@csrf_exempt
def passenger(request):

    queryset = Passenger.objects.all()
    return JsonResponse([q.serialize() for q in queryset], safe=False)

@csrf_exempt
def freight(request):

    queryset = Freight.objects.all()
    return JsonResponse([q.serialize() for q in queryset], safe=False)

