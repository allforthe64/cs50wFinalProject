from django.db import models

# Create your models here.

class Locos(models.Model):
    loco_id = models.AutoField(primary_key=True, default = None)
    loco_type = models.CharField(max_length = 64, default = None)
    model_name = models.CharField(max_length = 64, default = None)
    power_type = models.CharField(max_length = 64, default = None)
    length = models.CharField(max_length = 64, default = None)
    height = models.CharField(max_length = 64, default = None)
    maximum_speed = models.IntegerField()
    hp = models.IntegerField()
    axles = models.IntegerField()
    location = models.CharField(max_length = 64, default = None)

    def serialize(self):
        return {
            "id": self.loco_id,
            "modelType": self.loco_type,
            "modelName": self.model_name,
            "powerType": self.power_type,
            "length": self.length,
            "height": self.height,
            "speed": self.maximum_speed,
            "hp": self.hp,
            "axles": self.axles,
            "location": self.location
        }
    

    