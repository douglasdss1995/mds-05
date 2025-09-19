from rest_framework import viewsets

from core import models, serializers


class EspecialidadeViewSet(viewsets.ModelViewSet):
    queryset = models.Especialidade.objects.all()
    serializer_class = serializers.EspecialidadeSerializer
