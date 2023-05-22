from django.db import models

class Survey(models.Model):
    respondentId = models.AutoField(primary_key=True)
    emailAddress = models.EmailField()
    dateCreated = models.DateTimeField(auto_now_add=True)
    dateUpdated = models.DateTimeField(auto_now=True)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    Q1 = models.TextField()
    Q2 = models.TextField()
    Q3 = models.TextField()

    def __str__(self):
        return f"Survey {self.respondentId}: {self.emailAddress}"

# \fullstack> python manage.py sqlmigrate CRUD 0001  
# BEGIN;
# --
# -- Create model Survey
# --
# CREATE TABLE "CRUD_survey" ("respondentId" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "emailAddress" varchar(254) NOT NULL, "dateCreated" datetime NOT NULL, "dateUpdated" datetime NOT NULL, "age" integer NOT NULL, "gender" varchar(10) NOT NULL, "question1" text NOT NULL, "question2" text NOT NULL, "question3" text NOT NULL);
# COMMIT;

# {
    # "survey": {
        # "respondentId":1,
        # "emailAddress":"delta@growth-delta.com",
        # "dateCreated":"2023-05-14T10:00:00",
        # "dateUpdated":"2023-05-14T10:00:00",
        # "age":25,
        # "gender":"Male",
        # "Q1":"Yes",
        # "Q2":"Yes",
        # "Q3":"Yes"
    # }
# }
