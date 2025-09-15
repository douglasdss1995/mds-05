from django.contrib import admin
from .models import Grupo, Tarefa, Etiqueta


class EtiquetaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'descricao', 'criado_em', 'modificado_em')
    search_fields = ('nome', 'descricao')
    list_filter = ('criado_em', 'modificado_em')


class GrupoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'descricao', 'criado_em', 'modificado_em')
    search_fields = ('nome', 'descricao')
    list_filter = ('criado_em', 'modificado_em')


class TarefaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'concluida', 'grupo',
                    'data_vencimento', 'ordem', 'criado_em')
    list_filter = ('concluida', 'grupo', 'data_vencimento', 'criado_em')
    search_fields = ('nome', 'descricao')
    filter_horizontal = ('etiquetas',)  # Para relacionamento ManyToMany
    raw_id_fields = ('grupo',)          # Para ForeignKey

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('grupo')


admin.site.register(Grupo, GrupoAdmin)
admin.site.register(Tarefa, TarefaAdmin)
admin.site.register(Etiqueta, EtiquetaAdmin)
