from django.urls import path
from django.views.generic.base import RedirectView

from . import views

# '''Handlings React Routes in Django'''

app_name = 'CRUD'
urlpatterns = [
    # Backend API
    path('api/surveys/', views.SurveyView.as_view(), name='api_surveys'),
    path('api/surveys/<int:pk>/', views.SurveyView.as_view()),
    # Frontend Django.py
    path('readme/', views.readme, name='readme'),
    # Frontend React.js
    path('edit/<path:url>/', views.page),
    path('<path:url>/', views.page, name='catch-all'),
    path('', views.page, name='crud'),
    path('create/', views.page, name='create'),
]
