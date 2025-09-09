// === SELEÇÃO DE ELEMENTOS ===

// getElementById - Seleciona elemento pelo ID
let elementoPorId = document.getElementById("meuId");

// getElementsByClassName - Seleciona elementos pela classe (retorna HTMLCollection)
let elementosPorClasse = document.getElementsByClassName("minhaClasse");

// getElementsByTagName - Seleciona elementos pela tag (retorna HTMLCollection)
let elementosPorTag = document.getElementsByTagName("div");

// querySelector - Seleciona primeiro elemento que corresponde ao seletor CSS
let primeiroElemento = document.querySelector(".minhaClasse");
let elementoPorIdQuery = document.querySelector("#meuId");
let primeiroParagrafo = document.querySelector("p");

// querySelectorAll - Seleciona todos os elementos que correspondem ao seletor CSS
let todosElementos = document.querySelectorAll(".minhaClasse");
let todosParagrafos = document.querySelectorAll("p");

// === MANIPULAÇÃO DE CONTEÚDO ===

let elemento = document.querySelector("#meuElemento");

// textContent - Define/obtém o conteúdo de texto (ignora HTML)
elemento.textContent = "Novo texto";
let texto = elemento.textContent;

// innerHTML - Define/obtém o conteúdo HTML
elemento.innerHTML = "<strong>Texto em negrito</strong>";
let html = elemento.innerHTML;

// innerText - Define/obtém o texto visível (considera CSS)
elemento.innerText = "Texto visível";
let textoVisivel = elemento.innerText;

// outerHTML - Define/obtém o HTML do elemento incluindo ele mesmo
let htmlCompleto = elemento.outerHTML;

// === MANIPULAÇÃO DE ATRIBUTOS ===

let imagem = document.querySelector("img");

// getAttribute - Obtém o valor de um atributo
let src = imagem.getAttribute("src");
let alt = imagem.getAttribute("alt");

// setAttribute - Define o valor de um atributo
imagem.setAttribute("src", "nova-imagem.jpg");
imagem.setAttribute("alt", "Descrição da imagem");

// removeAttribute - Remove um atributo
imagem.removeAttribute("title");

// hasAttribute - Verifica se o elemento tem um atributo específico
let temSrc = imagem.hasAttribute("src");

// === MANIPULAÇÃO DE CLASSES CSS ===

let div = document.querySelector("div");

// classList.add - Adiciona uma classe
div.classList.add("novaClasse");

// classList.remove - Remove uma classe
div.classList.remove("classeRemover");

// classList.toggle - Adiciona se não existir, remove se existir
div.classList.toggle("ativa");

// classList.contains - Verifica se a classe existe
let temClasse = div.classList.contains("ativa");

// classList.replace - Substitui uma classe por outra
div.classList.replace("classeAntiga", "classeNova");

// === MANIPULAÇÃO DE ESTILOS ===

let elementoEstilo = document.querySelector("#meuElemento");

// style - Define estilos inline
elementoEstilo.style.color = "red";
elementoEstilo.style.backgroundColor = "blue";
elementoEstilo.style.fontSize = "20px";

// === CRIAÇÃO E MANIPULAÇÃO DE ELEMENTOS ===

// createElement - Cria um novo elemento
let novoParagrafo = document.createElement("p");

// createTextNode - Cria um nó de texto
let textoNode = document.createTextNode("Texto do parágrafo");

// appendChild - Adiciona um elemento filho
novoParagrafo.appendChild(textoNode);
document.body.appendChild(novoParagrafo);

// removeChild - Remove um elemento filho
let elementoRemover = document.querySelector("#remover");
elementoRemover.parentNode.removeChild(elementoRemover);

// replaceChild - Substitui um elemento filho
let novoElemento = document.createElement("div");
let elementoAntigo = document.querySelector("#antigo");
elementoAntigo.parentNode.replaceChild(novoElemento, elementoAntigo);

// insertBefore - Insere um elemento antes de outro
let referencia = document.querySelector("#referencia");
let novoElemento2 = document.createElement("span");
referencia.parentNode.insertBefore(novoElemento2, referencia);

// cloneNode - Clona um elemento
let elementoOriginal = document.querySelector("#original");
let clone = elementoOriginal.cloneNode(true); // true para clonar filhos também

// === MANIPULAÇÃO DE ELEMENTOS PAI/FILHO ===

let elementoAtual = document.querySelector("#atual");

// parentNode - Retorna o elemento pai
let pai = elementoAtual.parentNode;

// parentElement - Retorna o elemento pai (similar ao parentNode)
let elementoPai = elementoAtual.parentElement;

// children - Retorna todos os elementos filhos (apenas elementos, não texto)
let filhos = elementoAtual.children;

// firstElementChild - Retorna o primeiro elemento filho
let primeiroFilho = elementoAtual.firstElementChild;

// lastElementChild - Retorna o último elemento filho
let ultimoFilho = elementoAtual.lastElementChild;

// nextElementSibling - Retorna o próximo elemento irmão
let proximoIrmao = elementoAtual.nextElementSibling;

// previousElementSibling - Retorna o elemento irmão anterior
let irmaoAnterior = elementoAtual.previousElementSibling;

// === PROPRIEDADES ÚTEIS ===

let elementoUtil = document.querySelector("#util");

// id - Obtém/define o ID do elemento
let idElemento = elementoUtil.id;
elementoUtil.id = "novoId";

// className - Obtém/define as classes do elemento
let classes = elementoUtil.className;
elementoUtil.className = "classe1 classe2";

// tagName - Retorna a tag do elemento
let tag = elementoUtil.tagName; // 'DIV', 'P', etc.

// === MÉTODOS DE DOCUMENT ===

// document.title - Obtém/define o título da página
let titulo = document.title;
document.title = "Novo Título";

// document.URL - Retorna a URL completa
let url = document.URL;

// document.domain - Retorna o domínio
let dominio = document.domain;

// document.readyState - Retorna o estado do documento
let estado = document.readyState; // 'loading', 'interactive', 'complete'

// document.head - Retorna o elemento <head>
let head = document.head;

// document.body - Retorna o elemento <body>
let body = document.body;
