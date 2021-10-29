from django.db import models
from django.utils import timezone

# python manage.py makemigrations
# python manage.py migrate
class Project(models.Model):
    name = models.CharField(max_length=100)
    create_time = models.DateTimeField(default=timezone.now)
    update_time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
