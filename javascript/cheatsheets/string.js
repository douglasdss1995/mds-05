// === EXTRAÇÃO E BUSCA ===

let texto = "JavaScript é incrível!";

// charAt - Retorna o caractere na posição especificada
let primeiroChar = texto.charAt(0);
// Resultado: 'J'

// indexOf - Retorna a posição da primeira ocorrência
let posicaoJavaScript = texto.indexOf("JavaScript");
// Resultado: 0

// lastIndexOf - Retorna a posição da última ocorrência
let ultimaPosicaoE = texto.lastIndexOf("é");
// Resultado: 12

// includes - Verifica se a string contém o texto especificado
let contemIncrivel = texto.includes("incrível");
// Resultado: true

// startsWith - Verifica se começa com o texto especificado
let comecaComJava = texto.startsWith("Java");
// Resultado: true

// endsWith - Verifica se termina com o texto especificado
let terminaComPonto = texto.endsWith("!");
// Resultado: true

// === EXTRAÇÃO DE PARTES ===

// slice - Extrai uma parte da string
let parte = texto.slice(0, 10);
// Resultado: 'JavaScript'

// substring - Similar ao slice, mas não aceita valores negativos
let sub = texto.substring(11, 13);
// Resultado: 'é '

// substr - Extrai a partir de um índice com um comprimento específico (obsoleto)
let substr = texto.substr(11, 2);
// Resultado: 'é ' (use slice no lugar)

// === TRANSFORMAÇÃO ===

// toUpperCase - Converte para maiúsculas
let maiusculas = texto.toUpperCase();
// Resultado: 'JAVASCRIPT É INCRÍVEL!'

// toLowerCase - Converte para minúsculas
let minusculas = texto.toLowerCase();
// Resultado: 'javascript é incrível!'

// trim - Remove espaços do início e fim
let textoComEspacos = "  Olá Mundo!  ";
let textoLimpo = textoComEspacos.trim();
// Resultado: 'Olá Mundo!'

// trimStart - Remove espaços do início
let inicioLimpo = textoComEspacos.trimStart();
// Resultado: 'Olá Mundo!  '

// trimEnd - Remove espaços do fim
let fimLimpo = textoComEspacos.trimEnd();
// Resultado: '  Olá Mundo!'

// replace - Substitui a primeira ocorrência
let substituido = texto.replace("JavaScript", "Python");
// Resultado: 'Python é incrível!'

// replaceAll - Substitui todas as ocorrências (ES2021)
let todasSubstituidas = texto.replaceAll("i", "I");
// Resultado: 'JavascrIpt é Incrível!'

// === DIVISÃO E JUNÇÃO ===

// split - Divide a string em um array
let palavras = texto.split(" ");
// Resultado: ['JavaScript', 'é', 'incrível!']

let caracteres = texto.split("");
// Resultado: ['J','a','v','a','S','c','r','i','p','t',' ','é',' ','i','n','c','r','í','v','e','l','!']

// repeat - Repete a string um número específico de vezes
let repetido = "Olá ".repeat(3);
// Resultado: 'Olá Olá Olá '

// padStart - Preenche o início da string até o comprimento especificado
let numero = "5";
let numeroFormatado = numero.padStart(3, "0");
// Resultado: '005'

// padEnd - Preenche o fim da string até o comprimento especificado
let textoPreenchido = "5".padEnd(3, "0");
// Resultado: '500'

// === OUTROS MÉTODOS ÚTEIS ===

// length - Retorna o comprimento da string
let comprimento = texto.length;
// Resultado: 22

// charCodeAt - Retorna o código Unicode do caractere
let codigoUnicode = texto.charCodeAt(0);
// Resultado: 74 (código de 'J')

// fromCharCode - Cria uma string a partir de códigos Unicode
let caractere = String.fromCharCode(74);
// Resultado: 'J'

// match - Procura por correspondências usando uma expressão regular
let vogais = texto.match(/[aeiou]/gi);
// Resultado: array com todas as vogais encontradas

// search - Procura por uma correspondência e retorna a posição
let posicaoVogal = texto.search(/[aeiou]/i);
// Resultado: 1 (posição da primeira vogal)
