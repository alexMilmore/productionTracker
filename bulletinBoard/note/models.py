from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length = 128);
    body = models.TextField();
    date = models.DateField();