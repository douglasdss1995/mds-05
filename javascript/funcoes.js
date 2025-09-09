
// Funções são blocos de código que podem ser reutilizados
// Funções podem receber parâmetros e retornar valores

// Funções podem ser declaradas de várias formas
function imprimirOla() {
    console.log("Olá");
}
imprimirOla();

// Funções podem receber parâmetros
// Parâmetros são variáveis que podem ser passadas para a função
function imprimirSoma(var1, var2) {
    console.log(var1 + var2);
}
imprimirSoma(1, 1);

// Funções podem retornar valores
// Retornar valores significa que a função pode devolver um valor para quem a chamou
function retornaASoma(var1, var2) {
    return (var1 + var2);
}

let soma = retornaASoma(1, 1);
console.log(soma);
