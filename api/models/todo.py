from django.db import models
from . import Category
from datetime import datetime
from .category import Category
from .user import User

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_date = models.DateTimeField(default=datetime.now)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title