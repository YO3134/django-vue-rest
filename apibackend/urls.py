from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("books", views.BookViewSet)

app_name = "apibackend"
urlpatterns = [
    path("", include(router.urls)),
]
