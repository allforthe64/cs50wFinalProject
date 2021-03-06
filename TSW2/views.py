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

@csrf_exempt
def create(request, Type):

    if Type == "loco":

        #get JSON data
        data = json.loads(request.body)

        L = Locos(loco_type=data["type"], model_name=data["name"], power_type=data["powerType"], length=data["locoLength"], height=data["locoHeight"], maximum_speed=data["locoSpeed"], hp=data["horsePower"], axles=data["locoAxels"], location=data["location"], image=data["url"])
        L.save()

        return HttpResponse(status=204)
    
    elif Type == "freight":
        data = json.loads(request.body)

        F = Freight(name=data["name"], length=data["length"], width=data["width"], height=data["height"], load=data["load"], image=data["image"])
        F.save()

        return HttpResponse(status=204)

    else:
        data = json.loads(request.body)

        P = Passenger(name=data["name"], length=data["length"], width=data["width"], height=data["height"], capacity=data["load"], image=data["image"])
        P.save()

        return HttpResponse(status=204)

def showcase(request):

    return render(request, "TSW2/showcase.html")
