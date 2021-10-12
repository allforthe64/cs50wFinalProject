from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "TSW2/index.html")

def comparison(request):
    return render(request, "TSW2/comparison.html")