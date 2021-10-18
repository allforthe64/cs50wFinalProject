from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "TSW2/index.html")

def comparison(request):
    return render(request, "TSW2/comparison.html")

def spotlights(request):
    return render(request, "TSW2/spotlights.html")

def compendium(request):
    return render(request, "TSW2/compendium.html")