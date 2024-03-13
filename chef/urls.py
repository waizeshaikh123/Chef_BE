from django.contrib import admin
from django.urls import path
from chef import views

urlpatterns = [
    path("",views.index, name='index'),
    path("pricing/",views.pricing, name='pricing'),
    path("blog/",views.blog, name='blog'),
    path("faq/",views.faq, name='faq'),
    path("bac/",views.bac, name='bac'),
    path("sign_in/",views.sign_in, name='sign_in'),
    path("sign_up/",views.sign_up, name='sign_up')
]   