from rest_framework import serializers
from .models import Survey

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ('respondentId',
                  'emailAddress',
                  'dateCreated',
                  'dateUpdated',
                  'age',
                  'gender',
                  'Q1',
                  'Q2',
                  'Q3',
                  )
