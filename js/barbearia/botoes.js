window.onload = function () {
    carregarDados();
    carregarDados2();
    carregarDados3();
};

function mostrarTabela() {
    var tabelaContainer = document.getElementById('tabelaContainer');
    tabelaContainer.style.display = tabelaContainer.style.display === 'none' ? 'block' : 'none';
}

function adicionarLinha() {
    var tabela = document.getElementById('tabela');
    var semana = document.getElementById('semana').value;
    var objetivo = document.getElementById('objetivo').value;
    var status = document.getElementById('status').value;

    // Verificar se os campos estão preenchidos
    if (!semana || !objetivo || !status) {
        alert('Por favor, preencha todos os campos antes de adicionar um novo crronograma.');
        return;
    }

    var tabela = document.getElementById('tabela');

    var newRow = tabela.insertRow(tabela.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = semana;
    cell2.innerHTML = objetivo;
    cell3.innerHTML = status;
    cell4.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha(this)" style="width: 20px; height: 20px; cursor: pointer">';
    cell5.innerHTML = '<img src="Imagens/excluir.png" alt="Editar" onclick="editarLinha(this)" style="width: 20px; height: 20px; cursor: pointer">';

    limparCampos();
    salvarDados();
}

function editarLinha(botao) {
    var linha = botao.parentNode.parentNode;
    var tabela = document.getElementById('tabela');
    var index = linha.rowIndex;

    document.getElementById('semana').value = tabela.rows[index].cells[0].innerHTML;
    document.getElementById('objetivo').value = tabela.rows[index].cells[1].innerHTML;
    document.getElementById('status').value = tabela.rows[index].cells[2].innerHTML;

    tabela.deleteRow(index);
    salvarDados();
}

function excluirLinha(botao) {
    var linha = botao.parentNode.parentNode;
    var tabela = document.getElementById('tabela');
    var index = linha.rowIndex;

    tabela.deleteRow(index);
    salvarDados();
}

function limparCampos() {
    document.getElementById('semana').value = '';
    document.getElementById('objetivo').value = '';
    document.getElementById('status').value = 'em_andamento';
}

function salvarDados() {
    var tabela = document.getElementById('tabela');
    var dados = [];

    for (var i = 1; i < tabela.rows.length; i++) {
        var linha = tabela.rows[i];
        var semana = linha.cells[0].innerHTML;
        var objetivo = linha.cells[1].innerHTML;
        var status = linha.cells[2].innerHTML;

        dados.push({ semana: semana, objetivo: objetivo, status: status });
    }

    localStorage.setItem('dadosCronograma', JSON.stringify(dados));
}

function carregarDados() {
    var tabela = document.getElementById('tabela');
    var dados = localStorage.getItem('dadosCronograma');

    if (dados) {
        dados = JSON.parse(dados);

        for (var i = 0; i < dados.length; i++) {
            var newRow = tabela.insertRow(tabela.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = dados[i].semana;
            cell2.innerHTML = dados[i].objetivo;
            cell3.innerHTML = dados[i].status;
            cell4.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha(this)" style="width: 20px; height: 20px; cursor: pointer">';
            cell5.innerHTML = '<img src="Imagens/excluir.png" alt="Editar" onclick="editarLinha(this)" style="width: 20px; height: 20px; cursor: pointer">';
        }
    }
}

function mostrarTabela() {
    var tabelaContainer = document.getElementById('tabelaContainer');
    tabelaContainer.style.display = tabelaContainer.style.display === 'none' ? 'block' : 'none';
}

/* ---------- tabela 2 ------------- */

function mostrarTabela2() {
    var tabelaContainer2 = document.getElementById('tabelaContainer2');
    tabelaContainer2.style.display = tabelaContainer2.style.display === 'none' ? 'block' : 'none';
}

function adicionarLinha2() {
    var tabela = document.getElementById('tabela2');
    var objeto = document.getElementById('objeto').value;
    var quantidade = document.getElementById('quantidade').value;
    var valor = document.getElementById('valor').value;

    // Verificar se os campos estão preenchidos
    if (!objeto || !quantidade || !valor) {
        alert('Por favor, preencha todos os campos antes de adicionar um novo projeto.');
        return;
    }

    valor = 'R$ ' + valor;

    var newRow = tabela.insertRow(tabela.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = objeto;
    cell2.innerHTML = quantidade;
    cell3.innerHTML = valor;
    cell4.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha2(this)" style="width: 20px; height: 20px; cursor: pointer">';
    cell5.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinha2(this)" style="width: 20px; height: 20px; cursor: pointer">';

    limparCampos2();
    salvarDados2();
}

function editarLinha2(botao) {
    var linha = botao.parentNode.parentNode;
    var tabela = document.getElementById('tabela2');
    var index = linha.rowIndex;

    document.getElementById('objeto').value = tabela.rows[index].cells[0].innerHTML;
    document.getElementById('quantidade').value = tabela.rows[index].cells[1].innerHTML;
    document.getElementById('valor').value = tabela.rows[index].cells[2].innerHTML;

    tabela.deleteRow(index);
    salvarDados2();
}

function excluirLinha2(botao) {
    var linha = botao.parentNode.parentNode;
    var tabela = document.getElementById('tabela2');
    var index = linha.rowIndex;

    tabela.deleteRow(index);
    salvarDados2();
}


function limparCampos2() {
    document.getElementById('objeto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('valor').value = '';
}

function salvarDados2() {
    var tabela = document.getElementById('tabela2');
    var dados = [];

    for (var i = 1; i < tabela.rows.length; i++) {
        var linha = tabela.rows[i];
        var objeto = linha.cells[0].innerHTML;
        var quantidade = linha.cells[1].innerHTML;
        var valor = linha.cells[2].innerHTML;

        dados.push({ objeto: objeto, quantidade: quantidade, valor: valor });
    }

    localStorage.setItem('dadosCronograma2', JSON.stringify(dados));
}

function carregarDados2() {
    var tabela = document.getElementById('tabela2');
    var dados = localStorage.getItem('dadosCronograma2');

    if (dados) {
        dados = JSON.parse(dados);

        for (var i = 0; i < dados.length; i++) {
            var newRow = tabela.insertRow(tabela.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = dados[i].objeto;
            cell2.innerHTML = dados[i].quantidade;
            cell3.innerHTML = dados[i].valor;
            cell4.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha2(this)" style="width: 20px; height: 20px; cursor: pointer">';
            cell5.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinha2(this)" style="width: 20px; height: 20px; cursor: pointer">';
        }
    }
}

function mostrarTabela2() {
    var tabelaContainer = document.getElementById('tabelaContainer2');
    tabelaContainer.style.display = tabelaContainer.style.display === 'none' ? 'block' : 'none';
}

/* ------------ tabela 3 ----------- */

function mostrarTabela3() {
    var tabelaContainer3 = document.getElementById('tabelaContainer3');
    tabelaContainer3.style.display = tabelaContainer3.style.display === 'none' ? 'block' : 'none';
}

function adicionarLinha3() {
    var tabela = document.getElementById('tabela3');
    var MateriaisDeConstrucao = document.getElementById('MateriaisDeConstrucao').value;
    var MaoDeObra = document.getElementById('MaoDeObra').value;
    var equipamentos = document.getElementById('equipamentos').value;

    // Verificar se os campos estão preenchidos
    if (!MateriaisDeConstrucao || !MaoDeObra|| !equipamentos) {
        alert('Por favor, preencha todos os campos antes de adicionar um novo recurso.');
        return;
    }

    var newRow = tabela.insertRow(tabela.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = MateriaisDeConstrucao;
    cell2.innerHTML = MaoDeObra;
    cell3.innerHTML = equipamentos;
    cell4.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha3(this)" style="width: 20px; height: 20px; cursor: pointer">';
    cell5.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinha3(this)" style="width: 20px; height: 20px; cursor: pointer">';

    limparCampos3();
    salvarDados3();
}

function editarLinha3(botao) {
    var linha = botao.parentNode.parentNode;
    var tabela = document.getElementById('tabela3');
    var index = linha.rowIndex;

    document.getElementById('MateriaisDeConstrucao').value = tabela.rows[index].cells[0].innerHTML;
    document.getElementById('MaoDeObra').value = tabela.rows[index].cells[1].innerHTML;
    document.getElementById('equipamentos').value = tabela.rows[index].cells[2].innerHTML;

    tabela.deleteRow(index);
    salvarDados3();
}

function excluirLinha3(botao) {
    var linha = botao.parentNode.parentNode;
    var tabela = document.getElementById('tabela3');
    var index = linha.rowIndex;

    tabela.deleteRow(index);
    salvarDados3();
}


function limparCampos3() {
    document.getElementById('MateriaisDeConstrucao').value = '';
    document.getElementById('MaoDeObra').value = '';
    document.getElementById('equipamentos').value = '';
}

function salvarDados3() {
    var tabela = document.getElementById('tabela3');
    var dados = [];

    for (var i = 1; i < tabela.rows.length; i++) {
        var linha = tabela.rows[i];
        var MateriaisDeConstrucao = linha.cells[0].innerHTML;
        var MaoDeObra = linha.cells[1].innerHTML;
        var equipamentos = linha.cells[2].innerHTML;

        dados.push({ MateriaisDeConstrucao: MateriaisDeConstrucao, MaoDeObra: MaoDeObra, equipamentos: equipamentos});
    }

    localStorage.setItem('dadosCronograma3', JSON.stringify(dados));
}

function carregarDados3() {
    var tabela = document.getElementById('tabela3');
    var dados = localStorage.getItem('dadosCronograma3');

    if (dados) {
        dados = JSON.parse(dados);

        for (var i = 0; i < dados.length; i++) {
            var newRow = tabela.insertRow(tabela.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = dados[i].MateriaisDeConstrucao;
            cell2.innerHTML = dados[i].MaoDeObra;
            cell3.innerHTML = dados[i].equipamentos;
            cell4.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha3(this)" style="width: 20px; height: 20px; cursor: pointer">';
            cell5.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinha3(this)" style="width: 20px; height: 20px; cursor: pointer">';
        }
    }
}

function mostrarTabela3() {
    var tabelaContainer = document.getElementById('tabelaContainer3');
    tabelaContainer.style.display = tabelaContainer.style.display === 'none' ? 'block' : 'none';
}


function foto() {
    var fotoContainer = document.getElementById('fotoContainer');
  
    // Alternar a exibição da fotoContainer
    if (fotoContainer.style.display === 'none') {
      fotoContainer.style.display = 'block';
    } else {
      fotoContainer.style.display = 'none';
    }
  }
  
  // Função para ocultar todos os contêineres
function ocultarTodosConteineres() {
    var tabelaContainer = document.getElementById('tabelaContainer');
    var tabelaContainer2 = document.getElementById('tabelaContainer2');
    var tabelaContainer3 = document.getElementById('tabelaContainer3');
    var fotoContainer = document.getElementById('fotoContainer');

    // Ocultar todos os contêineres
    if (tabelaContainer.style.display !== 'none') {
        tabelaContainer.style.display = 'none';
    }
    if (tabelaContainer2.style.display !== 'none') {
        tabelaContainer2.style.display = 'none';
    }
    if (tabelaContainer3.style.display !== 'none') {
        tabelaContainer3.style.display = 'none';
    }
    if (fotoContainer.style.display !== 'none') {
        fotoContainer.style.display = 'none';
    }
}

// Função para mostrar a tabela e ocultar as outras
function mostrarTabela() {
    ocultarTodosConteineres();
    var tabelaContainer = document.getElementById('tabelaContainer');
    tabelaContainer.style.display = tabelaContainer.style.display === 'none' ? 'block' : 'none';
}

// Função para mostrar a tabela2 e ocultar as outras
function mostrarTabela2() {
    ocultarTodosConteineres();
    var tabelaContainer2 = document.getElementById('tabelaContainer2');
    tabelaContainer2.style.display = tabelaContainer2.style.display === 'none' ? 'block' : 'none';
}

// Função para mostrar a tabela3 e ocultar as outras
function mostrarTabela3() {
    ocultarTodosConteineres();
    var tabelaContainer3 = document.getElementById('tabelaContainer3');
    tabelaContainer3.style.display = tabelaContainer3.style.display === 'none' ? 'block' : 'none';
}

/*--------------  botão que mostra a foto --------------*/
function foto() {
    ocultarTodosConteineres();
    var fotoContainer = document.getElementById('fotoContainer');
      fotoContainer.style.display = fotoContainer.style.display === 'none' ? 'block' : 'none';
}
