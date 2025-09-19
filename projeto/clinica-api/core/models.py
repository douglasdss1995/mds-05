from django.db import models


class Especialidade(models.Model):
    id = models.AutoField(primary_key=True, null=False, verbose_name="Identificador")
    nome = models.TextField(null=False, blank=False)

    class Meta:
        verbose_name = "Especialidade"
        verbose_name_plural = "Especialidades"
