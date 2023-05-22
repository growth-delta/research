from django.http.response import JsonResponse
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.http import Http404

from . models import Survey
from . serializers import SurveySerializer

# React Front-end
def page(request, url=None):
    return render(request, 'index.html')

# Django Front-end
def readme(request):
    return render(request, 'readme.html')

# API | Rest API
class SurveyView(APIView):
    permission_classes = [AllowAny]

    def get_survey(self, pk):
        try:
            return Survey.objects.get(respondentId=pk)
        except Survey.DoesNotExist:
            raise Http404("Survey does not exist.")

    def get(self, request, pk=None):
        if pk:
            survey = self.get_survey(pk)
            serializer = SurveySerializer(survey)
        else:
            surveys = Survey.objects.all()
            serializer = SurveySerializer(surveys, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = SurveySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Survey posted successfully.", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        survey = self.get_survey(pk)
        serializer = SurveySerializer(instance=survey, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response("Survey updated successfully.", status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        survey = self.get_survey(pk)
        survey.delete()
        return Response("Survey successfully deleted.", status=status.HTTP_204_NO_CONTENT)


   
