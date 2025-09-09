// === ADIÇÃO DE EVENTOS ===

let botao = document.querySelector("#meuBotao");

// addEventListener - Adiciona um ouvinte de evento
botao.addEventListener("click", function () {
  console.log("Botão clicado!");
});

// Arrow function
botao.addEventListener("click", () => {
  console.log("Botão clicado com arrow function!");
});

// Função nomeada
function handleClick() {
  console.log("Função nomeada executada!");
}
botao.addEventListener("click", handleClick);

// === TIPOS COMUNS DE EVENTOS ===

// Eventos de mouse
botao.addEventListener("click", () => console.log("Clique"));
botao.addEventListener("dblclick", () => console.log("Duplo clique"));
botao.addEventListener("mouseenter", () => console.log("Mouse entrou"));
botao.addEventListener("mouseleave", () => console.log("Mouse saiu"));
botao.addEventListener("mousedown", () =>
  console.log("Botão do mouse pressionado")
);
botao.addEventListener("mouseup", () => console.log("Botão do mouse liberado"));
botao.addEventListener("mousemove", () => console.log("Mouse movido"));

// Eventos de teclado
let input = document.querySelector("#meuInput");
input.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada:", event.key);
});
input.addEventListener("keyup", (event) => {
  console.log("Tecla liberada:", event.key);
});
input.addEventListener("keypress", (event) => {
  console.log("Tecla pressionada (keypress):", event.key);
});

// Eventos de formulário
let formulario = document.querySelector("#meuForm");
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário
  console.log("Formulário enviado!");
});
input.addEventListener("focus", () => console.log("Campo ganhou foco"));
input.addEventListener("blur", () => console.log("Campo perdeu foco"));
input.addEventListener("change", () => console.log("Valor do campo mudou"));
input.addEventListener("input", () => console.log("Entrada de dados"));

// Eventos de janela
window.addEventListener("load", () => console.log("Página carregada"));
window.addEventListener("resize", () => console.log("Janela redimensionada"));
window.addEventListener("scroll", () => console.log("Página rolada"));
window.addEventListener("beforeunload", (event) => {
  // Aviso antes de sair da página
  event.preventDefault();
  event.returnValue = "";
});

// === OBJETO EVENT ===

// Propriedades importantes do objeto event
botao.addEventListener("click", (event) => {
  console.log("Tipo de evento:", event.type); // 'click'
  console.log("Elemento alvo:", event.target); // Elemento que disparou o evento
  console.log("Elemento atual:", event.currentTarget); // Elemento que tem o listener
  console.log("Coordenadas X:", event.clientX); // Posição X do mouse
  console.log("Coordenadas Y:", event.clientY); // Posição Y do mouse
  console.log("Tecla Ctrl pressionada:", event.ctrlKey);
  console.log("Tecla Shift pressionada:", event.shiftKey);
  console.log("Tecla Alt pressionada:", event.altKey);
});

// === REMOÇÃO DE EVENTOS ===

// Para remover um evento, a função precisa ser nomeada
function meuManipulador() {
  console.log("Evento executado!");
}

botao.addEventListener("click", meuManipulador);
// ... mais tarde ...
botao.removeEventListener("click", meuManipulador);

// === PROPAGAÇÃO DE EVENTOS ===

let divPai = document.querySelector("#pai");
let divFilho = document.querySelector("#filho");

// Bubbling (padrão) - do elemento mais interno para o mais externo
divFilho.addEventListener("click", () => {
  console.log("Filho clicado (bubbling)");
});
divPai.addEventListener("click", () => {
  console.log("Pai clicado (bubbling)");
});

// Capturing - do elemento mais externo para o mais interno
divFilho.addEventListener(
  "click",
  () => {
    console.log("Filho clicado (capturing)");
  },
  true
); // true para capturing
divPai.addEventListener(
  "click",
  () => {
    console.log("Pai clicado (capturing)");
  },
  true
);

// stopPropagation - Impede a propagação do evento
divFilho.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o evento chegue ao pai
  console.log("Evento no filho, mas não propaga para o pai");
});

// preventDefault - Impede o comportamento padrão
let link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault(); // Impede que o link seja seguido
  console.log("Link clicado, mas não foi para a URL");
});

// === EVENTOS PERSONALIZADOS ===

// Criar um evento personalizado
let meuEvento = new CustomEvent("meuEventoPersonalizado", {
  detail: { mensagem: "Dados do evento personalizado" },
});

// Adicionar listener para o evento personalizado
document.addEventListener("meuEventoPersonalizado", (event) => {
  console.log("Evento personalizado disparado:", event.detail.mensagem);
});

// Disparar o evento personalizado
document.dispatchEvent(meuEvento);

// === DELEGAÇÃO DE EVENTOS ===

// Adicionar evento ao elemento pai para lidar com eventos dos filhos
let lista = document.querySelector("ul");
lista.addEventListener("click", (event) => {
  // Verifica se o alvo é um item da lista
  if (event.target.tagName === "LI") {
    console.log("Item da lista clicado:", event.target.textContent);
  }
});

// === EVENTOS DE TOQUE (mobile) ===

let elementoToque = document.querySelector("#touchElement");

elementoToque.addEventListener("touchstart", (event) => {
  console.log("Toque iniciado");
});

elementoToque.addEventListener("touchmove", (event) => {
  console.log("Toque movido");
});

elementoToque.addEventListener("touchend", (event) => {
  console.log("Toque finalizado");
});

// === EVENTOS DE DRAG AND DROP ===

let elementoDrag = document.querySelector("#dragElement");

elementoDrag.addEventListener("dragstart", (event) => {
  console.log("Arrastar iniciado");
  event.dataTransfer.setData("text/plain", event.target.id);
});

elementoDrag.addEventListener("drag", (event) => {
  console.log("Elemento sendo arrastado");
});

elementoDrag.addEventListener("dragend", (event) => {
  console.log("Arrastar finalizado");
});

let zonaDrop = document.querySelector("#dropZone");

zonaDrop.addEventListener("dragover", (event) => {
  event.preventDefault(); // Necessário para permitir drop
  console.log("Elemento sobre a zona de drop");
});

zonaDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData("text/plain");
  console.log("Elemento dropado:", data);
});
