from django.contrib import admin
from .models import Survey

models_list = [Survey]
admin.site.register(models_list)
