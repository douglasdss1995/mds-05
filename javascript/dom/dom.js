
/*
* DOM (Document Object Model)
* O DOM é uma interface de programação para documentos HTML e XML.
* Ele representa a estrutura do documento como uma árvore de nós, onde cada nó é um objeto que representa uma parte do documento.
*/

/**
 * Seletores de Elementos
 * Os seletores de elementos são usados para acessar e manipular elementos HTML no DOM.
 */

// Retorna um único elemento com um ID específico.
const elementoPorId = document.getElementById('identificador');

// Retorna uma coleção de elementos que possuem uma classe específica.
const elementoPorClass = document.getElementsByClassName('classe-css');

// Retorna todos os elementos de um tipo específico (tag) no documento.
const elementoPorTagName = document.getElementsByTagName('tag');

// Retorna o primeiro elemento que corresponde ao seletor CSS
// Utiliza os mesmos padrões dos seletores CSS
let elementoPorQuery = document.querySelector('.classe-name');

// Retorna todos os elementos que correspondem ao seletor CSS
// Utiliza os mesmos padrões dos seletores CSS
const elementoPorQueryAll = document.querySelectorAll('#titulo');


/*
* Manipulação de Elementos
* A manipulação de elementos no DOM envolve a adição, remoção e modificação de elementos HTML.
*/
let elemento = document.getElementById('titleDiv');

// textContent
let text = elemento.textContent; // obter o valor
elemento.textContent = "Novo texto"; // Definir valor

// innerHTML
text = elemento.innerHTML; // obter o valor
elemento.innerHTML = "<h1 id='titleH1'>Novo texto</h1>"; // Definir valor utilizando HTML

//style
elemento = document.getElementById('titleH1');
elemento.style.color = 'blue'; // Definir estilo
elemento.style.backgroundColor = 'red'; // Definir estilo
elemento.style.fontSize = '3rem'; // Definir estilo

// classList

// Utiliza o primeiro elemento com a classe paragrafo
elemento = document.getElementsByClassName('paragraph')[0]; 
elemento.classList.add('text-warning'); // Adiciona classe ao elemento
elemento.classList.remove('text-warning'); // Remove classe ao elemento

// Seletores que retornam múltiplos elementos podem ser manipulados com um loop
elemento = document.getElementsByClassName('paragraph'); // Busca todos os elementos com a classe paragrafo
for (let i = 0; i < elemento.length; i++) {
    elemento[i].classList.toggle('text-warning'); // Alterna entre adicionar e remover a classe
}

elemento = document.getElementById('inputNumber'); // Busca a input pelo ID
attr = elemento.getAttribute('type'); // Busca o valor do atributo type da input nome
console.log(attr);
//Altera o atributo type da input para number
elemento.setAttribute('type', 'number');
elemento.removeAttribute('placeholder'); // Remove o atributo name da input nome