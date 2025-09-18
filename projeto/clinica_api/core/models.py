from django.db import models


class ModeloBase(models.Model):
    id = models.AutoField(primary_key=True)
    data_criacao = models.DateTimeField(auto_now_add=True)
    data_modificacao = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Especialidade(ModeloBase):
    nome = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Especialidade'
        verbose_name_plural = 'Especialidades'


class Medico(ModeloBase):
    nome = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Medico'
        verbose_name_plural = 'Medicos'


class MedicoEspecialidade(ModeloBase):
    medico = models.ForeignKey(
        Medico,
        on_delete=models.DO_NOTHING,
        null=False,
        blank=False
    )
    especialidade = models.ForeignKey(
        Especialidade,
        on_delete=models.DO_NOTHING,
        null=False,
        blank=False
    )
