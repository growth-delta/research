from django.http.response import JsonResponse
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView

from . models import Survey
from . serializers import SurveySerializer

# React Front-end
def page(request, url=None):
    return render(request, 'index.html')

# API | Rest API
class SurveyView(APIView):

    def get_survey(self, pk):
        try:
            survey  = Survey.objects.get(respondentId=pk)
            return survey
        # except Survey.DoesNotExist():
        #     raise Http404
        except:
            return JsonResponse("Survey Does Not Exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_survey(pk)
            serializer = SurveySerializer(data)
        else:
            data = Survey.objects.all()
            serializer = SurveySerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = SurveySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Survey Posted Successfully.', safe=False)
        else:
            return JsonResponse(f'Survey Post Failed.\n\n{serializer.errors}', safe=False)
        
    def put(self, request, pk=None):
        survey_update = Survey.objects.get(respondentId=pk)
        serializer = SurveySerializer(instance=survey_update, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Survey Update Successfully.', safe=False)
        return JsonResponse(f'Survey Update Failed.\n\n{serializer.errors}', safe=False)
    
    def delete(self, request, pk=None):
        survey_delete = self.get_survey(pk)
        survey_delete.delete()
        return JsonResponse(f'Survey Successfully Deleted.', safe=False)
        # return redirect(reverse('CRUD:surveys'))


   
