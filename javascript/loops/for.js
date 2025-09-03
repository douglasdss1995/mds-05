function imprimir(param = "Olá Mundo") {
    console.log(param);
}

let str = "";

for (let i = 0; i < 10; i++) {
    // str = str + i;
    str += i;
    console.log(str);
}
console.log(str);

let int = 1;

// for é uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira
// O for é composto por três partes: inicialização, condição e incremento
// A inicialização é executada uma vez antes do loop começar
// Caso não seja utilizada as chaves, será executada apenas uma linha
for (let i = 0; i < 9; i++)
    int = int + i;

// Caso seja utilizada as chaves, será executado um bloco de código
for (let i = 0; i < 9; i++) {
    int = int + i;
    console.log(int);
}

// Declara um array com os números de 1 a 5
const array1 = ["1", "2", "3", "4", "5"];

// forEach é um método de array que executa uma função para cada elemento do array
// Caso não seja utilizada as chaves, será executada apenas uma linha
for (const element of array1)
    console.log(element);

// Caso seja utilizada as chaves, será executado um bloco de código
for (const element of array1) {
    console.log(element);
    imprimir()
}

array1.forEach(
    () => imprimir()
);

array1.forEach(
    element => imprimir(element)
);

array1.forEach(
    element => {
        imprimir(element);
        imprimir(element);
    }
);