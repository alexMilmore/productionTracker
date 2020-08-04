from django.db import models
import datetime

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length = 128);
    body = models.TextField();
    dateCreated = models.DateField(default= datetime.date.today);
    dateEdited = models.DateField(auto_now=True);
    complete = models.BooleanField(default = False);
    catagory = models.CharField(max_length = 128);
