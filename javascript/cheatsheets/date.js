// === CRIAÇÃO DE DATAS ===

// Criar data atual
let agora = new Date();

// Criar data específica
let dataEspecifica = new Date("2024-01-15");
let dataCompleta = new Date(2024, 0, 15, 14, 30, 0); // Ano, Mês(0-11), Dia, Hora, Minuto, Segundo

// Criar data a partir de timestamp
let dataTimestamp = new Date(1705327800000);

// === MÉTODOS GETTERS (obter valores) ===

let data = new Date("2024-01-15 14:30:45");

// getFullYear - Retorna o ano (4 dígitos)
let ano = data.getFullYear();
// Resultado: 2024

// getMonth - Retorna o mês (0-11, janeiro = 0)
let mes = data.getMonth();
// Resultado: 0 (janeiro)

// getDate - Retorna o dia do mês (1-31)
let dia = data.getDate();
// Resultado: 15

// getDay - Retorna o dia da semana (0-6, domingo = 0)
let diaSemana = data.getDay();
// Resultado: 1 (segunda-feira)

// getHours - Retorna a hora (0-23)
let hora = data.getHours();
// Resultado: 14

// getMinutes - Retorna os minutos (0-59)
let minutos = data.getMinutes();
// Resultado: 30

// getSeconds - Retorna os segundos (0-59)
let segundos = data.getSeconds();
// Resultado: 45

// getMilliseconds - Retorna os milissegundos (0-999)
let milissegundos = data.getMilliseconds();
// Resultado: 0

// getTime - Retorna o timestamp (milissegundos desde 1/1/1970)
let timestamp = data.getTime();
// Resultado: timestamp correspondente

// === MÉTODOS SETTERS (definir valores) ===

let dataModificada = new Date("2024-01-15");

// setFullYear - Define o ano
dataModificada.setFullYear(2025);

// setMonth - Define o mês (0-11)
dataModificada.setMonth(5); // Junho

// setDate - Define o dia do mês
dataModificada.setDate(20);

// setHours - Define a hora
dataModificada.setHours(18);

// setMinutes - Define os minutos
dataModificada.setMinutes(45);

// setSeconds - Define os segundos
dataModificada.setSeconds(30);

// setTime - Define a data usando timestamp
dataModificada.setTime(1705327800000);

// === FORMATAÇÃO E CONVERSÃO ===

let dataAtual = new Date();

// toString - Converte para string (formato padrão)
let stringData = dataAtual.toString();
// Resultado: 'Mon Jan 15 2024 14:30:45 GMT-0300'

// toDateString - Converte apenas a data para string
let stringDataSimples = dataAtual.toDateString();
// Resultado: 'Mon Jan 15 2024'

// toTimeString - Converte apenas o horário para string
let stringHora = dataAtual.toTimeString();
// Resultado: '14:30:45 GMT-0300'

// toLocaleDateString - Formata a data de acordo com a localidade
let dataLocal = dataAtual.toLocaleDateString("pt-BR");
// Resultado: '15/01/2024'

// toLocaleTimeString - Formata o horário de acordo com a localidade
let horaLocal = dataAtual.toLocaleTimeString("pt-BR");
// Resultado: '14:30:45'

// toLocaleString - Formata data e hora de acordo com a localidade
let dataHoraLocal = dataAtual.toLocaleString("pt-BR");
// Resultado: '15/01/2024 14:30:45'

// toISOString - Converte para string no formato ISO 8601
let isoString = dataAtual.toISOString();
// Resultado: '2024-01-15T17:30:45.123Z'

// toJSON - Converte para string JSON (mesmo que toISOString)
let jsonString = dataAtual.toJSON();

// === OPERAÇÕES COM DATAS ===

// Calcular diferença entre datas
let inicio = new Date("2024-01-01");
let fim = new Date("2024-12-31");
let diferencaMs = fim - inicio; // Diferença em milissegundos
let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);

// Adicionar dias
let dataHoje = new Date();
dataHoje.setDate(dataHoje.getDate() + 7); // Adiciona 7 dias

// Comparar datas
let data1 = new Date("2024-01-15");
let data2 = new Date("2024-01-20");
let comparacao = data1 < data2; // true

// === MÉTODOS ESTÁTICOS ===

// Date.now() - Retorna o timestamp atual
let timestampAgora = Date.now();
// Resultado: timestamp atual em milissegundos

// Date.parse() - Analisa uma string de data e retorna timestamp
let timestampParse = Date.parse("2024-01-15");
// Resultado: timestamp correspondente

// Date.UTC() - Retorna timestamp para data UTC
let timestampUTC = Date.UTC(2024, 0, 15, 14, 30, 0);
// Resultado: timestamp UTC
