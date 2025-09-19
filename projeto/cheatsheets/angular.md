# Angular Cheatsheet - Guia Completo

## 🚀 Instalação e Configuração Inicial

### 1. Instalar Node.js e npm
```bash
# Verificar versões (Node.js 18+ recomendado)
node --version
npm --version

# Atualizar npm para versão mais recente
npm install -g npm@latest
```

### 2. Instalar Angular CLI
```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Verificar versão instalada
ng version

# Atualizar Angular CLI
npm update -g @angular/cli

# Instalar versão específica
npm install -g @angular/cli@15.2.0
```

## 📁 Criação de Projeto

### 1. Criar Novo Projeto Angular
```bash
# Sintaxe básica
ng new nome-do-projeto

# Criar projeto com opções específicas
ng new nome-do-projeto \
  --routing=true \
  --style=scss \
  --strict=true \
  --package-manager=npm

# Parâmetros principais:
# --routing: Adiciona arquivo de roteamento (true/false)
# --style: Define pré-processador CSS (css, scss, sass, less, styl)
# --strict: Ativa modo strict do TypeScript (true/false)
# --package-manager: Define gerenciador de pacotes (npm, yarn, pnpm, cnpm)
# --skip-git: Não inicializa repositório Git
# --skip-install: Não instala dependências automaticamente
# --minimal: Cria projeto mínimo sem arquivos de teste
# --inline-style: Estilos inline nos componentes
# --inline-template: Templates inline nos componentes
```

**Estrutura do Projeto:**
```
meu-projeto/
├── src/
│   ├── app/
│   │   ├── app.component.ts        # Componente principal
│   │   ├── app.component.html      # Template principal
│   │   ├── app.component.scss      # Estilos principais
│   │   ├── app.component.spec.ts   # Testes do componente
│   │   ├── app.module.ts           # Módulo principal
│   │   └── app-routing.module.ts   # Configuração de rotas
│   ├── assets/                     # Arquivos estáticos
│   ├── environments/               # Configurações de ambiente
│   ├── index.html                  # Página HTML principal
│   ├── main.ts                     # Ponto de entrada da aplicação
│   └── styles.scss                 # Estilos globais
├── angular.json                    # Configurações do Angular CLI
├── package.json                    # Dependências e scripts
├── tsconfig.json                   # Configurações TypeScript
└── README.md                       # Documentação do projeto
```

### 2. Executar Servidor de Desenvolvimento
```bash
# Navegar para o projeto
cd nome-do-projeto

# Executar servidor de desenvolvimento
ng serve

# Executar em porta específica
ng serve --port 4300

# Executar e abrir automaticamente no navegador
ng serve --open

# Executar com host específico
ng serve --host 0.0.0.0

# Executar com configuração específica
ng serve --configuration production

# Parâmetros do ng serve:
# --port: Define porta (padrão: 4200)
# --host: Define host (padrão: localhost)
# --open (-o): Abre automaticamente no navegador
# --live-reload: Recarrega página automaticamente nas mudanças
# --hmr: Ativa Hot Module Replacement
# --ssl: Serve via HTTPS
# --configuration: Usa configuração específica (development/production)
```

## 🧩 Componentes

### 1. Gerar Componente
```bash
# Criar componente básico
ng generate component nome-componente
# ou forma abreviada
ng g c nome-componente

# Criar componente em diretório específico
ng g c pasta/nome-componente

# Criar componente com opções específicas
ng g c nome-componente \
  --skip-tests \
  --inline-style \
  --inline-template \
  --flat \
  --export

# Parâmetros do componente:
# --skip-tests: Não cria arquivo de teste (.spec.ts)
# --inline-style: CSS inline no componente
# --inline-template: HTML inline no componente
# --flat: Não cria pasta para o componente
# --export: Adiciona componente às exportações do módulo
# --selector: Define seletor personalizado
# --change-detection: Define estratégia de change detection
# --view-encapsulation: Define encapsulamento de view
```

### 2. Estrutura de um Componente
```typescript
// nome-componente.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  templateUrl: './nome-componente.component.html',
  styleUrls: ['./nome-componente.component.scss']
})
export class NomeComponenteComponent {
  // Propriedades do componente
  titulo: string = 'Meu Componente';
  contador: number = 0;
  
  // Métodos do componente
  incrementar(): void {
    this.contador++;
  }
  
  // Lifecycle hooks
  ngOnInit(): void {
    console.log('Componente inicializado');
  }
}
```

## 🔧 Serviços e Injeção de Dependência

### 1. Gerar Serviço
```bash
# Criar serviço básico
ng generate service nome-servico
# ou
ng g s nome-servico

# Criar serviço em diretório específico
ng g s services/nome-servico

# Criar serviço com opções
ng g s nome-servico \
  --skip-tests \
  --flat

# Parâmetros do serviço:
# --skip-tests: Não cria arquivo de teste
# --flat: Não cria pasta para o serviço
```

### 2. Estrutura de um Serviço
```typescript
// nome-servico.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Disponível em toda aplicação
})
export class NomeServicoService {
  
  constructor(private http: HttpClient) { }
  
  obterDados(): Observable<any> {
    return this.http.get('https://api.exemplo.com/dados');
  }
  
  enviarDados(dados: any): Observable<any> {
    return this.http.post('https://api.exemplo.com/dados', dados);
  }
}
```

## 📱 Módulos

### 1. Gerar Módulo
```bash
# Criar módulo básico
ng generate module nome-modulo
# ou
ng g m nome-modulo

# Criar módulo com roteamento
ng g m nome-modulo --routing

# Criar módulo com componente
ng g m nome-modulo --routing --module=app

# Parâmetros do módulo:
# --routing: Cria arquivo de roteamento para o módulo
# --module: Especifica módulo pai para importar o novo módulo
# --flat: Não cria pasta para o módulo
```

### 2. Estrutura de um Módulo
```typescript
// nome-modulo.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NomeModuloRoutingModule } from './nome-modulo-routing.module';
import { ComponenteDoModuloComponent } from './componente-do-modulo.component';

@NgModule({
  declarations: [
    ComponenteDoModuloComponent  // Componentes, diretivas e pipes do módulo
  ],
  imports: [
    CommonModule,                // Módulos necessários
    RouterModule,
    NomeModuloRoutingModule
  ],
  providers: [],                 // Serviços específicos do módulo
  exports: [
    ComponenteDoModuloComponent  // O que será disponibilizado para outros módulos
  ]
})
export class NomeModuloModule { }
```

## 🛣️ Roteamento

### 1. Configurar Rotas
```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }  // Sempre por último
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### 2. Usar Roteamento no Template
```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">Sobre</a>
  <a [routerLink]="['/user', userId]">Perfil</a>
</nav>

<router-outlet></router-outlet>
```

### 3. Navegação Programática
```typescript
import { Router, ActivatedRoute } from '@angular/router';

constructor(
  private router: Router,
  private route: ActivatedRoute
) {}

navegar(): void {
  this.router.navigate(['/about']);
  this.router.navigate(['/user', 123]);
  this.router.navigateByUrl('/home');
}

obterParametros(): void {
  // Parâmetros da rota
  const id = this.route.snapshot.paramMap.get('id');
  
  // Query parameters
  const filtro = this.route.snapshot.queryParamMap.get('filtro');
  
  // Observables para mudanças
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
  });
}
```

## 🔒 Guards (Guardas de Rota)

### 1. Gerar Guard
```bash
# Criar guard
ng generate guard nome-guard
# ou
ng g g nome-guard

# Escolher tipo de guard:
# - CanActivate: Controla se rota pode ser ativada
# - CanActivateChild: Controla rotas filhas
# - CanDeactivate: Controla se usuário pode sair da rota
# - CanLoad: Controla carregamento de módulos lazy
```

### 2. Implementar Guard
```typescript
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

## 🎨 Pipes

### 1. Gerar Pipe
```bash
# Criar pipe personalizado
ng generate pipe nome-pipe
# ou
ng g p nome-pipe

# Parâmetros:
# --skip-tests: Não cria arquivo de teste
# --flat: Não cria pasta para o pipe
```

### 2. Implementar Pipe
```typescript
// nome-pipe.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomePipe'
})
export class NomePipePipe implements PipeTransform {
  
  transform(value: string, ...args: any[]): string {
    if (!value) return value;
    
    // Exemplo: transformar para maiúscula
    return value.toUpperCase();
  }
}
```

### 3. Usar Pipes no Template
```html
<!-- Pipes nativos -->
{{ texto | uppercase }}
{{ numero | currency:'BRL':'symbol':'1.2-2' }}
{{ data | date:'dd/MM/yyyy' }}
{{ lista | json }}

<!-- Pipe personalizado -->
{{ texto | nomePipe }}
{{ texto | nomePipe:'parametro1':'parametro2' }}
```

## 🎯 Diretivas

### 1. Gerar Diretiva
```bash
# Criar diretiva
ng generate directive nome-diretiva
# ou
ng g d nome-diretiva

# Parâmetros:
# --skip-tests: Não cria arquivo de teste
# --flat: Não cria pasta para a diretiva
```

### 2. Implementar Diretiva
```typescript
// highlight.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

## 📡 HTTP e APIs

### 1. Configurar HttpClient
```typescript
// app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule  // Adicionar aqui
  ],
  // ...
})
export class AppModule { }
```

### 2. Usar HttpClient em Serviço
```typescript
// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.exemplo.com';
  
  constructor(private http: HttpClient) {}
  
  // GET
  obterTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items`)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }
  
  // GET com parâmetros
  obterComFiltro(filtro: string): Observable<any[]> {
    const params = new HttpParams().set('filtro', filtro);
    return this.http.get<any[]>(`${this.baseUrl}/items`, { params });
  }
  
  // POST
  criar(dados: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(`${this.baseUrl}/items`, dados, { headers })
      .pipe(catchError(this.handleError));
  }
  
  // PUT
  atualizar(id: number, dados: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/items/${id}`, dados)
      .pipe(catchError(this.handleError));
  }
  
  // DELETE
  deletar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/items/${id}`)
      .pipe(catchError(this.handleError));
  }
  
  private handleError(error: any): Observable<never> {
    console.error('Erro na API:', error);
    return throwError(() => new Error(error.message || 'Erro no servidor'));
  }
}
```

## 📝 Formulários

### 1. Formulários Template-Driven
```typescript
// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // Para formulários template-driven
  ],
  // ...
})
export class AppModule { }
```

```html
<!-- template-form.component.html -->
<form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
  <div>
    <label for="nome">Nome:</label>
    <input 
      type="text" 
      id="nome"
      name="nome"
      [(ngModel)]="usuario.nome"
      #nome="ngModel"
      required
      minlength="2">
    
    <div *ngIf="nome.invalid && nome.touched">
      <small *ngIf="nome.errors?.['required']">Nome é obrigatório</small>
      <small *ngIf="nome.errors?.['minlength']">Nome deve ter pelo menos 2 caracteres</small>
    </div>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email"
      name="email"
      [(ngModel)]="usuario.email"
      #email="ngModel"
      required
      email>
    
    <div *ngIf="email.invalid && email.touched">
      <small *ngIf="email.errors?.['required']">Email é obrigatório</small>
      <small *ngIf="email.errors?.['email']">Email inválido</small>
    </div>
  </div>
  
  <button type="submit" [disabled]="formulario.invalid">
    Enviar
  </button>
</form>
```

### 2. Formulários Reativos
```typescript
// app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Para formulários reativos
  ],
  // ...
})
export class AppModule { }
```

```typescript
// reactive-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  formulario: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        cidade: ['', Validators.required],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]]
      }),
      telefones: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }
  
  get telefones() {
    return this.formulario.get('telefones') as FormArray;
  }
  
  adicionarTelefone() {
    this.telefones.push(this.fb.control('', Validators.required));
  }
  
  removerTelefone(index: number) {
    this.telefones.removeAt(index);
  }
  
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      this.marcarCamposComoTocados();
    }
  }
  
  private marcarCamposComoTocados() {
    Object.keys(this.formulario.controls).forEach(key => {
      const control = this.formulario.get(key);
      control?.markAsTouched();
    });
  }
}
```

## 🧪 Testes

### 1. Executar Testes
```bash
# Executar testes unitários
ng test

# Executar testes uma vez (sem watch)
ng test --watch=false

# Executar testes com coverage
ng test --code-coverage

# Executar testes e2e
ng e2e

# Parâmetros úteis:
# --browsers: Define navegador (Chrome, Firefox, Safari)
# --watch: Modo watch (true/false)
# --source-map: Gerar source maps (true/false)
# --progress: Mostrar progresso (true/false)
```

### 2. Teste de Componente
```typescript
// nome-componente.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomeComponenteComponent } from './nome-componente.component';

describe('NomeComponenteComponent', () => {
  let component: NomeComponenteComponent;
  let fixture: ComponentFixture<NomeComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeComponenteComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('deve incrementar contador', () => {
    component.incrementar();
    expect(component.contador).toBe(1);
  });
  
  it('deve renderizar título', () => {
    component.titulo = 'Teste';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Teste');
  });
});
```

### 3. Teste de Serviço
```typescript
// nome-servico.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NomeServicoService } from './nome-servico.service';

describe('NomeServicoService', () => {
  let service: NomeServicoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NomeServicoService]
    });
    service = TestBed.inject(NomeServicoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('deve obter dados', () => {
    const dadosEsperados = [{ id: 1, nome: 'Teste' }];
    
    service.obterDados().subscribe(dados => {
      expect(dados).toEqual(dadosEsperados);
    });
    
    const req = httpMock.expectOne('https://api.exemplo.com/dados');
    expect(req.request.method).toBe('GET');
    req.flush(dadosEsperados);
  });
});
```

## 🏗️ Build e Deploy

### 1. Build para Produção
```bash
# Build básico para produção
ng build

# Build com configuração específica
ng build --configuration production

# Build com otimizações
ng build --prod --aot --build-optimizer

# Parâmetros importantes:
# --configuration: Usa configuração específica (production, development)
# --aot: Ahead-of-Time compilation
# --build-optimizer: Otimizações adicionais
# --source-map: Gerar source maps
# --extract-css: Extrair CSS para arquivos separados
# --vendor-chunk: Criar chunk separado para dependências
# --output-path: Diretório de saída personalizado
# --base-href: URL base da aplicação
```

### 2. Configurações de Ambiente
```typescript
// src/environments/environment.ts (desenvolvimento)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Minha App - Dev'
};

// src/environments/environment.prod.ts (produção)
export const environment = {
  production: true,
  apiUrl: 'https://api.minhaapp.com',
  appName: 'Minha App'
};
```

### 3. Usar Variáveis de Ambiente
```typescript
// app.component.ts
import { environment } from '../environments/environment';

export class AppComponent {
  apiUrl = environment.apiUrl;
  isProduction = environment.production;
}
```

## 📦 Gerenciamento de Dependências

### 1. Adicionar Bibliotecas
```bash
# Instalar biblioteca via Angular CLI
ng add @angular/material
ng add @angular/pwa
ng add @ngrx/store

# Instalar via npm
npm install lodash
npm install --save-dev @types/lodash

# Instalar biblioteca específica do Angular
npm install @angular/animations
npm install @angular/cdk
```

### 2. Bibliotecas Populares
```bash
# UI/CSS Frameworks
ng add @angular/material
npm install bootstrap
npm install primeng
npm install ng-bootstrap

# Utilitários
npm install lodash
npm install moment
npm install date-fns

# Charts/Gráficos
npm install chart.js ng2-charts
npm install d3
npm install @swimlane/ngx-charts

# HTTP/Estado
npm install @ngrx/store @ngrx/effects
npm install rxjs
npm install @angular/fire  # Firebase

# Validação/Formulários
npm install @angular/forms
npm install ngx-mask
```

## 🔧 Angular CLI - Comandos Avançados

### 1. Atualização do Angular
```bash
# Verificar quais pacotes podem ser atualizados
ng update

# Atualizar Angular CLI e Core
ng update @angular/cli @angular/core

# Atualizar biblioteca específica
ng update @angular/material

# Atualizar forçando (pode quebrar compatibilidade)
ng update @angular/cli --force
```

### 2. Análise e Otimização
```bash
# Analisar bundle da aplicação
ng build --stats-json
npx webpack-bundle-analyzer dist/meu-projeto/stats.json

# Verificar configurações
ng config

# Listar todas as dependências
ng version --verbose

# Verificar problemas no projeto
ng lint
```

### 3. Esquemas (Schematics)
```bash
# Listar esquemas disponíveis
ng generate --help

# Gerar múltiplos arquivos
ng generate @schematics/angular:component nome-componente

# Usar esquema personalizado
ng generate @ngrx/schematics:store State --root
```

## 🎨 Estilos e CSS

### 1. Configurar Pré-processadores
```bash
# Escolher SCSS ao criar projeto
ng new meu-projeto --style=scss

# Converter projeto existente para SCSS
ng config schematics.@schematics/angular:component.style scss
```

### 2. Estilos Globais vs Componente
```scss
/* src/styles.scss - Estilos globais */
@import '~bootstrap/dist/css/bootstrap.min.css';

:root {
  --cor-primaria: #007bff;
  --cor-secundaria: #6c757d;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  margin: 0;
  padding: 0;
}

/* Classe global */
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

```scss
/* componente.component.scss - Estilos do componente */
:host {
  display: block;
  padding: 20px;
}

.titulo {
  color: var(--cor-primaria);
  font-size: 24px;
  margin-bottom: 16px;
}

.botao {
  background-color: var(--cor-primaria);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

## 🌐 Internacionalização (i18n)

### 1. Configurar i18n
```bash
# Adicionar suporte a i18n
ng add @angular/localize

# Extrair strings para tradução
ng extract-i18n

# Build para idiomas específicos
ng build --localize
```

### 2. Marcar Textos para Tradução
```html
<!-- Atributo i18n -->
<h1 i18n="@@welcome-message">Bem-vindo!</h1>

<!-- Com descrição -->
<p i18n="user.greeting|Saudação para o usuário">Olá, {{nome}}!</p>

<!-- Plural -->
<span i18n="{count, plural, =0 {nenhum item} =1 {um item} other {{{count}} itens}}">
  {count, plural, =0 {nenhum item} =1 {um item} other {{{count}} itens}}
</span>
```

## 🔍 Debug e Desenvolvimento

### 1. Angular DevTools
```bash
# Instalar extensão do navegador
# Chrome: Angular DevTools
# Firefox: Angular DevTools

# Usar no código
import { Component } from '@angular/core';

@Component({
  selector: 'app-debug',
  template: `<div>{{dados | json}}</div>`
})
export class DebugComponent {
  dados = { nome: 'Teste', idade: 25 };
  
  ngOnInit() {
    console.log('Dados do componente:', this.dados);
  }
}
```

### 2. Logs e Debug
```typescript
// Configurar logs por ambiente
import { environment } from '../environments/environment';

export class LogService {
  log(message: any): void {
    if (!environment.production) {
      console.log(message);
    }
  }
  
  error(message: any): void {
    console.error(message);
  }
  
  warn(message: any): void {
    if (!environment.production) {
      console.warn(message);
    }
  }
}
```

## 🚀 Performance e Otimização

### 1. Lazy Loading
```typescript
// app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  }
];
```

### 2. OnPush Change Detection
```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-otimizado',
  template: `<div>{{dados.nome}}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtimizadoComponent {
  @Input() dados: any;
}
```

### 3. TrackBy para ngFor
```typescript
// componente.component.ts
trackByFn(index: number, item: any): any {
  return item.id; // ou índice se não houver ID único
}
```

```html
<!-- template.component.html -->
<div *ngFor="let item of lista; trackBy: trackByFn">
  {{item.nome}}
</div>
```

## 💡 Dicas e Boas Práticas

### 1. Estrutura de Projeto
```
src/
├── app/
│   ├── core/           # Serviços singleton, guards, interceptors
│   ├── shared/         # Componentes, pipes, diretivas reutilizáveis
│   ├── features/       # Módulos de funcionalidades
│   │   ├── usuario/
│   │   └── produto/
│   ├── layout/         # Componentes de layout
│   └── models/         # Interfaces e tipos TypeScript
```

### 2. Convenções de Nomenclatura
- **Arquivos**: kebab-case (meu-componente.component.ts)
- **Classes**: PascalCase (MeuComponenteComponent)
- **Métodos/Propriedades**: camelCase (meuMetodo)
- **Constantes**: SNAKE_CASE (API_URL)
- **Interfaces**: PascalCase com 'I' (IUsuario)

### 3. TypeScript Best Practices
```typescript
// Usar interfaces para tipagem
interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo?: boolean;  // Propriedade opcional
}

// Usar enums para valores fixos
enum StatusUsuario {
  ATIVO = 'ativo',
  INATIVO = 'inativo',
  PENDENTE = 'pendente'
}

// Usar generics
class ApiService<T> {
  obter(id: number): Observable<T> {
    return this.http.get<T>(`/api/items/${id}`);
  }
}
```

### 4. Otimizações de Performance
- Use **OnPush** change detection quando possível
- Implemente **trackBy** em listas grandes
- Use **async pipe** para subscriptions automáticas
- Evite funções no template
- Use **lazy loading** para módulos grandes
- Otimize imports (não importe bibliotecas inteiras)

### 5. Segurança
```typescript
// Sanitização de HTML
import { DomSanitizer } from '@angular/platform-browser';

// Validação de formulários
import { Validators } from '@angular/forms';

// Headers de segurança
const headers = new HttpHeaders({
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json'
});
```

---

## 🎯 Comandos de Referência Rápida

```bash
# Projeto
ng new projeto --routing --style=scss
ng serve --open

# Geração
ng g c componente
ng g s servico  
ng g m modulo --routing
ng g g guard
ng g p pipe
ng g d diretiva

# Build e Deploy
ng build --prod
ng test --code-coverage
ng lint
ng update

# Análise
ng build --stats-json
npx webpack-bundle-analyzer dist/projeto/stats.json
```

### 📚 Recursos Úteis

- **Documentação oficial**: https://angular.io/docs
- **Angular CLI**: https://angular.io/cli
- **Angular Material**: https://material.angular.io/
- **RxJS**: https://rxjs.dev/
- **NgRx**: https://ngrx.io/
- **Ionic**: https://ionicframework.com/docs/angular