from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'grupos', views.GrupoViewSet)
router.register(r'tarefas', views.TarefaViewSet)
router.register(r'etiquetas', views.EtiquetaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
