from django.urls import path
from django.views.generic.base import RedirectView

from . import views

app_name = 'CRUD'
urlpatterns = [
    # Frontend React.js
    path('', views.page, name='home'),
    # Backend API
    path('api/surveys/', views.SurveyView.as_view(), name='api_surveys'),
    path('api/surveys/<int:pk>', views.SurveyView.as_view()),
]
