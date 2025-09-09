document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('estado');
    const municipioSelect = document.getElementById('municipio');
    const form = document.getElementById('localizacao-form');

    // Evento quando o estado é alterado
    estadoSelect.addEventListener('change', function() {
        const estado = this.value;
        
        // Limpa o select de municípios
        municipioSelect.innerHTML = '<option value="">Carregando...</option>';
        municipioSelect.disabled = true;
        
        if (estado) {
            carregarMunicipios(estado);
        } else {
            municipioSelect.innerHTML = '<option value="">Selecione um estado primeiro</option>';
            municipioSelect.disabled = true;
        }
    });

    // Função para carregar os municípios de um estado
    function carregarMunicipios(uf) {
        // Usando a API do IBGE
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => response.json())
            .then(municipios => {
                // Ordena os municípios por nome
                municipios.sort((a, b) => a.nome.localeCompare(b.nome));
                
                // Preenche o select de municípios
                let options = '<option value="">Selecione um município</option>';
                
                municipios.forEach(municipio => {
                    options += `<option value="${municipio.id}">${municipio.nome}</option>`;
                });
                
                municipioSelect.innerHTML = options;
                municipioSelect.disabled = false;
            })
            .catch(error => {
                console.error('Erro ao carregar municípios:', error);
                municipioSelect.innerHTML = '<option value="">Erro ao carregar municípios</option>';
            });
    }

    // Evento de submit do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const estado = estadoSelect.options[estadoSelect.selectedIndex].text;
        const municipio = municipioSelect.options[municipioSelect.selectedIndex].text;
        
        if (estado && municipio) {
            alert(`Você selecionou: ${municipio} - ${estado}`);
        } else {
            alert('Por favor, selecione um estado e um município.');
        }
    });
});