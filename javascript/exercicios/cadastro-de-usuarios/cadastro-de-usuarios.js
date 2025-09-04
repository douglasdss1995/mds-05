const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");

// Função para adicionar uma nova linha na tabela
function addUser(name, email, phone) {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${phone}</td>`;
  tableBody.appendChild(tableRow);
}

/**
 * Função para validar o formulário
 * @param {Event} event - O evento de submit do formulário
 */
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio do formulário
  event.stopPropagation(); // Para evitar que o evento de submit se propague e atualize a página

  // Valida o formulário
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  // Captura os valores dos inputs
  // Utiliza o método trim() para remover espaços em branco
  const name = form.inputName.value.trim();
  const email = form.inputEmail.value.trim();
  const phone = form.inputPhone.value.trim();
  // Adiciona à tabela
  addUser(name, email, phone);
  // Limpa o formulário e feedback visual
  form.reset();
  form.classList.remove("was-validated");
});
