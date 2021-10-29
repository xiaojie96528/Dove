from django.shortcuts import render
from Dovapp.models import *
from rest_framework import viewsets
from Dovapp.serializers import *
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
import json
class ProjectViewSet(viewsets.ModelViewSet):
    """
        get:
            Return all projects.

        post:
            Create a new project.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

def login_acc(request):
    if request.method=="POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        try:
            user = authenticate(username=username,password=password)
        except Exception as e:
            user=None
            print(e)
        if user is not None:
            login(request,user)
            data = {"msg": "登录成功", "data": user.username,"code":"200"}
            return JsonResponse(data,safe=False)
        else:
            data = {"msg": "用户名或密码错误1","data": "xm"}
            return JsonResponse(data,safe=False)
def logout_acc(request):
    logout(request)
    data = {"msg": "退出成功", "data": "", "code": "200"}
    return JsonResponse(data,safe=False)