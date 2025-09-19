# Criar o ambiente virtual
python -m venv .venv
.venv\Script\activate

# Instala as libs
pip install django
pip install djangorestframework

# Criar o arquivo de requirements para armazenar as bibliotecas
pip freeze > requirements.txt

# Criar o projeto
django-admin startproject <nome-do-projeto> .

# Criar o app dentro do projeto
django-admin startapp <nome-do-app>