from django.db import models


class ModeloBase(models.Model):
    """
    Modelo abstrato que serve como base para todos os outros modelos.
    Não é gerenciado diretamente pelo Django (abstract=True).
    """
    id = models.BigAutoField(primary_key=True)
    criado_em = models.DateTimeField(auto_now_add=True)
    modificado_em = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Grupo(ModeloBase):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Grupo'
        verbose_name_plural = 'Grupos'


class Etiqueta(ModeloBase):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Etiqueta'
        verbose_name_plural = 'Etiquetas'


class Tarefa(ModeloBase):
    nome = models.TextField(blank=False, null=False)
    descricao = models.TextField(blank=True, null=True)
    concluida = models.BooleanField(default=False)
    grupo = models.ForeignKey(
        to=Grupo,
        on_delete=models.CASCADE,
        related_name='tarefas',
        blank=True,
        null=True
    )
    ordem = models.SmallIntegerField(default=0, null=True)
    data_vencimento = models.DateField(blank=True, null=True)
    etiquetas = models.ManyToManyField(Etiqueta, related_name='tarefas')

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Tarefa'
        verbose_name_plural = 'Tarefas'
        ordering = ['ordem']
