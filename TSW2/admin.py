from django.contrib import admin
from .models import Locos, Freight, Passenger
# Register your models here.
admin.site.register(Locos)
admin.site.register(Freight)
admin.site.register(Passenger)