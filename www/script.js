//// Função para armazenar o nome de uma pessoa em um assento específico
function reservarAssento(assento) {
  var nome = prompt("Digite o nome da pessoa que irá ocupar o assento " + assento + ":");

  // Verifica se o nome foi fornecido
  if (nome !== null && nome.trim() !== "") {
    // Armazena o nome no localStorage
    localStorage.setItem(assento, nome);
    alert("Assento " + assento + " reservado para " + nome);
  }
}

// Função para exibir o nome da pessoa que está ocupando um assento específico
function exibirNomeAssento(assento) {
  var nome = localStorage.getItem(assento);
  if (nome) {
    alert("O assento " + assento + " está ocupado por " + nome);
  } else {
    alert("O assento " + assento + " está vazio");
  }
}

// Função para exibir os lugares ocupados e vazios
function exibirLugares() {
  var lugaresOcupados = [];
  var lugaresVazios = [];

  for (var i = 0; i < assentos.length; i++) {
    var assento = assentos[i];
    var nome = localStorage.getItem(assento);
    if (nome) {
      lugaresOcupados.push(assento);
    } else {
      lugaresVazios.push(assento);
    }
  }

  alert("Lugares ocupados: " + lugaresOcupados.join(", "));
  alert("Lugares vazios: " + lugaresVazios.join(", "));
}

// Criação de uma lista de assentos
var assentos = ['A1', 'A2', 'A3', 'A4', 'A5'];

// Criação de botões para cada assento
for (var i = 0; i < assentos.length; i++) {
  var assento = assentos[i];
  var button = document.createElement('button');
  button.innerHTML = assento;
  button.addEventListener('click', function() {
    var assentoSelecionado = this.innerHTML;
    reservarAssento(assentoSelecionado);
    exibirLugares();
  });
  document.body.appendChild(button);
}

// Exemplo de exibição do nome de uma pessoa em um assento específico
exibirNomeAssento('A1');

