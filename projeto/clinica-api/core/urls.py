from django.urls import include, path
from rest_framework.routers import DefaultRouter

from core import views

router = DefaultRouter()
router.register(r"especialidade", views.EspecialidadeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
