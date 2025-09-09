function ola() {
    // Obtém referências aos elementos do DOM
    const inputName = document.getElementById('inputName');
    const titleName = document.getElementById('titleName');

    // Obtém o valor digitado no campo de texto
    const nome = inputName.value.trim();

    // Verifica se o nome não está vazio
    if (nome !== '') {
        // Define o texto do elemento h1 como o nome digitado
        titleName.textContent = "Olá " + nome;
        titleName.style.display = 'block';
    } else {
        // Se o campo estiver vazio, exibe um alerta
        alert('Por favor, digite um nome!');

        // Esconde o resultado caso esteja visível
        titleName.style.display = 'none';
    }
}
