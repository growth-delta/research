from django.urls import path
from django.views.generic.base import RedirectView

from . import views

app_name = 'CRUD'
urlpatterns = [
    path('', views.page, name='home'),
    path('api/surveys/', views.SurveyView.as_view(), name='surveys'),
    path('api/surveys/<int:pk>', views.SurveyView.as_view()),
]
