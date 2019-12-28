from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')
router.register(r'categories', views.CategoryView, 'categories')
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path('/', include(router.urls))
]