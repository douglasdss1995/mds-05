from rest_framework import viewsets
from core import models
from .serializers import GrupoSerializer, TarefaSerializer, EtiquetaSerializer


class GrupoViewSet(viewsets.ModelViewSet):
    queryset = models.Grupo.objects.all()
    serializer_class = GrupoSerializer


class TarefaViewSet(viewsets.ModelViewSet):
    queryset = models.Tarefa.objects.all()
    serializer_class = TarefaSerializer
    ordering_fields = '__all__'
    ordering = ['concluida', '-id']


class EtiquetaViewSet(viewsets.ModelViewSet):
    queryset = models.Etiqueta.objects.all()
    serializer_class = EtiquetaSerializer
