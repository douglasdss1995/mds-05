from rest_framework import serializers

from core import models


class EtiquetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Etiqueta
        fields = '__all__'


class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Grupo
        fields = '__all__'


class TarefaSerializer(serializers.ModelSerializer):
    etiquetas = EtiquetaSerializer(many=True, read_only=True)

    class Meta:
        model = models.Tarefa
        fields = '__all__'
