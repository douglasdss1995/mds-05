let valor = "Texto";

if (typeof valor === "string") {
    console.log("É uma string!");
} else if (typeof valor === "number") {
    console.log("É um número!");
} else if (typeof valor === "boolean") {
    console.log("É um booleano!");
} else {
    console.log("Tipo desconhecido.");
}