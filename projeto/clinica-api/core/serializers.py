from rest_framework import serializers

from core import models


class EspecialidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Especialidade
        fields = "__all__"
