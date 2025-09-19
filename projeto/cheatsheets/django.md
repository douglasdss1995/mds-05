# Django Cheatsheet - Guia Completo

## 🚀 Instalação e Configuração Inicial

### 1. Instalar Python e pip
```bash
# Verificar versão do Python (recomendado 3.8+)
python --version
python3 --version

# Verificar se pip está instalado
pip --version
pip3 --version
```

### 2. Criar Ambiente Virtual
```bash
# Criar ambiente virtual
python -m venv nome_do_ambiente
# ou
python3 -m venv nome_do_ambiente

# Ativar ambiente virtual
# Windows:
nome_do_ambiente\Scripts\activate
# Linux/macOS:
source nome_do_ambiente/bin/activate

# Desativar ambiente virtual
deactivate
```

### 3. Instalar Django
```bash
# Instalar versão mais recente
pip install django

# Instalar versão específica
pip install django==4.2.0

# Verificar versão instalada
django-admin --version
python -m django --version
```

## 📁 Criação de Projeto

### 1. Criar Projeto Django
```bash
# Sintaxe básica
django-admin startproject nome_do_projeto

# Criar projeto no diretório atual
django-admin startproject nome_do_projeto .

# Parâmetros do comando:
# - nome_do_projeto: Nome do seu projeto Django
# - . (opcional): Cria o projeto no diretório atual sem pasta adicional
```

**Estrutura criada:**
```
meu_projeto/
    manage.py              # Script de gerenciamento do Django
    meu_projeto/
        __init__.py        # Torna o diretório um pacote Python
        settings.py        # Configurações do projeto
        urls.py           # Roteamento principal
        wsgi.py           # Interface WSGI para deploy
        asgi.py           # Interface ASGI para aplicações assíncronas
```

### 2. Navegar e Executar o Servidor
```bash
# Entrar no diretório do projeto
cd nome_do_projeto

# Executar servidor de desenvolvimento
python manage.py runserver

# Executar em porta específica
python manage.py runserver 8080

# Executar em host específico
python manage.py runserver 0.0.0.0:8000

# Parâmetros do runserver:
# - Porta padrão: 8000
# - Host padrão: 127.0.0.1 (localhost)
# - 0.0.0.0: Permite acesso de qualquer IP na rede local
```

## 📱 Aplicações Django

### 1. Criar uma App
```bash
# Criar nova aplicação
python manage.py startapp nome_da_app

# Parâmetros:
# - nome_da_app: Nome da aplicação (ex: blog, usuarios, produtos)
```

**Estrutura da App:**
```
nome_da_app/
    __init__.py
    admin.py          # Configurações do admin
    apps.py           # Configurações da aplicação
    models.py         # Modelos de dados
    tests.py          # Testes unitários
    views.py          # Views/controladores
    migrations/       # Migrações do banco de dados
        __init__.py
```

### 2. Registrar App no Projeto
```python
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'nome_da_app',  # Adicionar sua app aqui
]
```

## 🗄️ Banco de Dados e Migrações

### 1. Configurar Banco de Dados
```python
# settings.py - SQLite (padrão)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# PostgreSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nome_do_banco',
        'USER': 'usuario',
        'PASSWORD': 'senha',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# MySQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nome_do_banco',
        'USER': 'usuario',
        'PASSWORD': 'senha',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### 2. Comandos de Migração
```bash
# Criar migrações para mudanças nos models
python manage.py makemigrations

# Criar migração para app específica
python manage.py makemigrations nome_da_app

# Aplicar migrações ao banco de dados
python manage.py migrate

# Aplicar migração específica
python manage.py migrate nome_da_app 0001

# Ver status das migrações
python manage.py showmigrations

# Ver SQL gerado por uma migração
python manage.py sqlmigrate nome_da_app 0001

# Parâmetros importantes:
# - makemigrations: Cria arquivos de migração baseados nas mudanças nos models
# - migrate: Aplica as migrações ao banco de dados
# - --dry-run: Simula a operação sem executar (para makemigrations)
# - --fake: Marca migração como aplicada sem executar
```

## 👤 Sistema de Usuários

### 1. Criar Superusuário
```bash
# Criar superusuário para admin
python manage.py createsuperuser

# Criar superusuário não-interativo (scripts)
python manage.py createsuperuser \
    --username admin \
    --email admin@example.com \
    --noinput
```

### 2. Alterar Senha de Usuário
```bash
# Alterar senha de usuário específico
python manage.py changepassword nome_usuario

# Definir senha via script
echo "from django.contrib.auth.models import User; User.objects.get(username='admin').set_password('nova_senha'); User.objects.get(username='admin').save()" | python manage.py shell
```

## 🌐 URLs e Views

### 1. Configurar URLs da App
```python
# nome_da_app/urls.py (criar arquivo)
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('detalhes/<int:id>/', views.detalhes, name='detalhes'),
]
```

### 2. Incluir URLs da App no Projeto
```python
# meu_projeto/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('nome_da_app.urls')),
    path('blog/', include('blog.urls')),
]
```

### 3. Views Básicas
```python
# nome_da_app/views.py
from django.shortcuts import render, HttpResponse

def index(request):
    return HttpResponse("Hello, World!")

def detalhes(request, id):
    return render(request, 'app/detalhes.html', {'id': id})
```

## 📊 Models e ORM

### 1. Definir Models
```python
# nome_da_app/models.py
from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    descricao = models.TextField(blank=True)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"
        ordering = ['-criado_em']
```

### 2. Comandos do Shell
```bash
# Abrir shell interativo do Django
python manage.py shell

# Executar script Python
python manage.py shell < script.py
```

### 3. Operações no ORM (dentro do shell)
```python
# Importar model
from nome_da_app.models import Produto

# Criar objeto
produto = Produto(nome="Notebook", preco=2500.00)
produto.save()

# Ou usando create
produto = Produto.objects.create(nome="Mouse", preco=50.00)

# Buscar todos
produtos = Produto.objects.all()

# Buscar com filtro
produto = Produto.objects.get(id=1)
produtos_caros = Produto.objects.filter(preco__gt=100)

# Atualizar
produto.nome = "Notebook Gamer"
produto.save()

# Deletar
produto.delete()
```

## 🎨 Templates e Arquivos Estáticos

### 1. Configurar Templates
```python
# settings.py
import os

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],  # Diretório global de templates
        'APP_DIRS': True,  # Procurar templates dentro das apps
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

### 2. Configurar Arquivos Estáticos
```python
# settings.py
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')  # Para produção
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),  # Diretório de arquivos estáticos
]

# Para arquivos de mídia (uploads)
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

### 3. Coletar Arquivos Estáticos
```bash
# Coletar todos os arquivos estáticos para STATIC_ROOT
python manage.py collectstatic

# Forçar coleta sobrescrevendo arquivos existentes
python manage.py collectstatic --noinput

# Limpar arquivos estáticos antes de coletar
python manage.py collectstatic --clear
```

## 🔧 Comandos de Desenvolvimento

### 1. Testes
```bash
# Executar todos os testes
python manage.py test

# Executar testes de app específica
python manage.py test nome_da_app

# Executar teste específico
python manage.py test nome_da_app.tests.TestCase.test_method

# Executar com verbosidade
python manage.py test --verbosity=2

# Parâmetros úteis:
# --keepdb: Mantém banco de teste entre execuções
# --parallel: Executa testes em paralelo
# --debug-mode: Ativa modo debug
```

### 2. Limpeza e Manutenção
```bash
# Limpar sessões expiradas
python manage.py clearsessions

# Verificar problemas no projeto
python manage.py check

# Ver todas as URLs configuradas
python manage.py show_urls  # Requer django-extensions

# Limpar migrações (cuidado!)
python manage.py migrate nome_da_app zero
```

## 📦 Dependências e Requirements

### 1. Gerenciar Dependências
```bash
# Gerar arquivo requirements.txt
pip freeze > requirements.txt

# Instalar dependências do requirements.txt
pip install -r requirements.txt

# Atualizar todas as dependências
pip list --outdated
pip install --upgrade nome_do_pacote
```

### 2. Pacotes Úteis
```bash
# Django REST Framework (APIs)
pip install djangorestframework

# Django Extensions (comandos úteis)
pip install django-extensions

# Pillow (para trabalhar com imagens)
pip install Pillow

# Django Debug Toolbar
pip install django-debug-toolbar

# Python Decouple (variáveis de ambiente)
pip install python-decouple
```

## 🚀 Deploy e Produção

### 1. Variáveis de Ambiente
```python
# settings.py usando python-decouple
from decouple import config

DEBUG = config('DEBUG', default=False, cast=bool)
SECRET_KEY = config('SECRET_KEY')
DATABASE_URL = config('DATABASE_URL')
```

### 2. Configurações de Produção
```python
# settings.py
DEBUG = False
ALLOWED_HOSTS = ['seudominio.com', 'www.seudominio.com']

# Segurança HTTPS
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
```

## 🔍 Comandos de Debug

### 1. Informações do Sistema
```bash
# Versão do Django
python -m django --version

# Informações detalhadas
python manage.py diffsettings

# Verificar configurações
python manage.py check --deploy
```

### 2. Shell Avançado
```bash
# Shell com IPython (se instalado)
python manage.py shell_plus

# Shell com imports automáticos
python manage.py shell_plus --print-sql
```

## 📝 Comandos Personalizados

### 1. Criar Comando Personalizado
```python
# nome_da_app/management/commands/meu_comando.py
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Descrição do comando'
    
    def add_arguments(self, parser):
        parser.add_argument('--opcao', type=str, help='Descrição da opção')
    
    def handle(self, *args, **options):
        self.stdout.write('Executando comando...')
```

### 2. Executar Comando Personalizado
```bash
python manage.py meu_comando --opcao valor
```

---

## 💡 Dicas Importantes

1. **Sempre use ambiente virtual** para isolar dependências
2. **Faça migrations** após alterar models
3. **Use DEBUG=False** em produção
4. **Mantenha SECRET_KEY** segura
5. **Faça backups** regulares do banco de dados
6. **Use .gitignore** para arquivos sensíveis
7. **Documente** suas APIs e código
8. **Teste** regularmente sua aplicação