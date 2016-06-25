from __future__ import unicode_literals

from django.db import models

class data(models.Model):
    ip = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=50)
    userip = models.CharField(max_length=20)
    useraddress = models.CharField(max_length=50 , null=True)