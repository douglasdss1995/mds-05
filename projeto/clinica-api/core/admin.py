from django.contrib import admin

from core import models


class EspecialidadeAdmin(admin.ModelAdmin):
    list_display = ("id", "nome")
    search_fields = ("nome",)
    list_filter = ("nome",)


admin.site.register(models.Especialidade, EspecialidadeAdmin)
