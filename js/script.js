document.getElementById("sair").addEventListener("click", function () {
  // Quando o botão "Sair" é clicado, redireciona o usuário para a página inicial
  window.location.href = "login.html";
});

document.getElementById("BuscarTabela").addEventListener("click", function () {
  // Obtém uma referência à tabela com o ID "Tabela1"
  var tabela = document.getElementById("Tabela1");

  // Verifica se a tabela está oculta e alterna a visibilidade
  tabela.style.display = tabela.style.display === "none" ? "table" : "none";
});

function abrirModal() {
  var modal = document.getElementById('novoProjeto');
  modal.style.display = 'flex';  // Alterado de 'none' para 'flex'
}

function fecharModal() {
  var modal = document.getElementById('novoProjeto');
  modal.style.display = 'none';
}

function buscarProjeto() {
  var nomeCliente = document.getElementById('nomeCliente').value.toLowerCase();
  var cnpj = document.getElementById('cnpj').value.toLowerCase();
  var nomeEmpresa = document.getElementById('nomeEmpresa').value.toLowerCase();
  var status = document.getElementById('status').value.toLowerCase();

  var tabela = document.getElementById('Tabela1');
  var linhas = tabela.getElementsByTagName('tr');

  for (var i = 1; i < linhas.length; i++) {
      var colunas = linhas[i].getElementsByTagName('td');
      var exibirLinha = false;

      if (
          (nomeCliente === '' || colunas[0].textContent.toLowerCase().includes(nomeCliente)) &&
          (cnpj === '' || colunas[1].textContent.toLowerCase().includes(cnpj)) &&
          (nomeEmpresa === '' || colunas[2].textContent.toLowerCase().includes(nomeEmpresa)) &&
          (status === 'opção' || colunas[3].textContent.toLowerCase().includes(status))
      ) {
          exibirLinha = true;
      }

      linhas[i].style.display = exibirLinha ? 'table-row' : 'none';
  }
}

function salvarProjeto() {
  console.log('Salvando novo projeto...');

  // Adicione aqui a lógica para salvar o novo projeto

  // Após salvar, feche o modal
  fecharModal();
}

// Adicione um listener para fechar o modal se o usuário clicar fora do modal
document.addEventListener('click', function (event) {
  var modal = document.getElementById('novoProjeto');
  if (event.target === modal) {
      fecharModal();
  }
});
