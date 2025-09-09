// === CRIAÇÃO E MANIPULAÇÃO DE ARRAYS ===

// Criar um array
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];

// Adicionar elementos
frutas.push("uva"); // Adiciona no final: ['maçã', 'banana', 'laranja', 'uva']
frutas.unshift("morango"); // Adiciona no início: ['morango', 'maçã', 'banana', 'laranja', 'uva']

// Remover elementos
frutas.pop(); // Remove do final: ['morango', 'maçã', 'banana', 'laranja']
frutas.shift(); // Remove do início: ['maçã', 'banana', 'laranja']

// === ITERAÇÃO E TRANSFORMAÇÃO ===

// forEach - Executa uma função para cada elemento
frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`);
});

// map - Cria um novo array com resultados da função
let maiusculas = frutas.map((fruta) => fruta.toUpperCase());
// Resultado: ['MAÇÃ', 'BANANA', 'LARANJA']

// filter - Cria um novo array com elementos que passam no teste
let numerosPares = numeros.filter((num) => num % 2 === 0);
// Resultado: [2, 4]

// reduce - Reduz o array a um único valor
let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
// Resultado: 15

// === BUSCA E VERIFICAÇÃO ===

// find - Retorna o primeiro elemento que passa no teste
let banana = frutas.find((fruta) => fruta === "banana");
// Resultado: 'banana'

// findIndex - Retorna o índice do primeiro elemento que passa no teste
let indiceBanana = frutas.findIndex((fruta) => fruta === "banana");
// Resultado: 1

// includes - Verifica se um elemento existe no array
let temMaca = frutas.includes("maçã");
// Resultado: true

// indexOf - Retorna o índice da primeira ocorrência
let posicaoLaranja = frutas.indexOf("laranja");
// Resultado: 2

// === ORDENAÇÃO E ORGANIZAÇÃO ===

// sort - Ordena os elementos (atenção: modifica o array original)
let numerosDesordenados = [3, 1, 4, 1, 5];
numerosDesordenados.sort((a, b) => a - b); // Ordena números
// Resultado: [1, 1, 3, 4, 5]

// reverse - Inverte a ordem dos elementos
frutas.reverse();
// Resultado: ['laranja', 'banana', 'maçã']

// slice - Retorna uma cópia de parte do array (não modifica original)
let fatia = frutas.slice(1, 3);
// Resultado: ['banana', 'maçã']

// splice - Adiciona/remove elementos (modifica o array original)
frutas.splice(1, 1, "kiwi"); // Remove 1 elemento na posição 1 e adiciona 'kiwi'
// Resultado: ['laranja', 'kiwi', 'maçã']

// === OUTROS MÉTODOS ÚTEIS ===

// join - Junta todos os elementos em uma string
let frutasString = frutas.join(", ");
// Resultado: 'laranja, kiwi, maçã'

// concat - Combina dois ou mais arrays
let vegetais = ["cenoura", "beterraba"];
let alimentos = frutas.concat(vegetais);
// Resultado: ['laranja', 'kiwi', 'maçã', 'cenoura', 'beterraba']

// flat - Cria um novo array com todos os elementos de sub-arrays concatenados
let arrayAninhado = [1, [2, 3], [4, [5, 6]]];
let arrayAplanado = arrayAninhado.flat(2);
// Resultado: [1, 2, 3, 4, 5, 6]

// every - Verifica se todos os elementos passam no teste
let todosPares = numeros.every((num) => num % 2 === 0);
// Resultado: false

// some - Verifica se pelo menos um elemento passa no teste
let algumPar = numeros.some((num) => num % 2 === 0);
// Resultado: true
