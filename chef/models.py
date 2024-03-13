from django.db import models

class Sign_In(models.Model):
    email = models.CharField(max_length = 152)
    password = models.CharField(max_length = 10)
    def __str__(self):
        return self.email

class Sign_Up(models.Model):
    email = models.EmailField(max_length = 100)
    password = models.CharField(max_length = 10)
    re_password = models.CharField(max_length = 10)
    def __str__(self):
        return self.email