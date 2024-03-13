from django.shortcuts import render,HttpResponse
from datetime import datetime
from chef.models import Sign_In
from chef.models import Sign_Up
from django.contrib import messages
# Create your views here.

def index(request):
    return render(request, 'index.html')

def pricing(request):
    return render(request, 'pricing.html')

def blog(request):
    return render(request, 'blog.html')

def faq(request):
    return render(request, 'faq.html')

def bac(request):
    return render(request, 'bac.html')

def sign_in(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        sign = Sign_In(email=email,password=password)
        sign.save()
        print("save SignIn success")
        messages.success(request, "Your Message  has been sent!")
    return render(request, 'sign_in.html')

def sign_up(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        re_password = request.POST.get('re_password')
        SignUp = Sign_Up(email=email,password=password,re_password=re_password)
        SignUp.save()
        print("save SignUp success")
    return render(request, 'sign_up.html')