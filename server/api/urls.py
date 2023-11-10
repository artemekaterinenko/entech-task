from django.urls import path
from . import views

urlpatterns = [
    path('animal/', views.AnimalList.as_view()),
    path('animal/<int:pk>/', views.AnimalDetail.as_view())
]
