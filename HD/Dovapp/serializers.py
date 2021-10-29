from Dovapp.models import *
from rest_framework import serializers
from rest_framework import generics


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

# 比如我希望包含get/put/delete则可以继承generics.RetrieveUpdateDestroyAPIView；
# 如果我只希望有get/put不包含delete，那么可以继承generics.RetrieveUpdateAPIView。
# class ProjectList(generics.ListCreateAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
#
#
# # class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
# class ProjectDetail(generics.RetrieveUpdateAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
