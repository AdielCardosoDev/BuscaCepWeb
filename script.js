var botao = document.getElementById("botao");
botao.addEventListener("click", function () {
  var cep = document.getElementById("inputCep").value;

  var api = `https://viacep.com.br/ws/${cep}/json/`;

  var request = new XMLHttpRequest();

  request.open("GET", api);

  request.onload = function () {
    var endereco = JSON.parse(request.responseText);

    var logradouro = document.getElementById("logradouro");
    logradouro.innerHTML = endereco.logradouro;

    var bairro = document.getElementById("bairro");
    bairro.innerHTML = endereco.bairro;

    var localidade = document.getElementById("localidade");
    localidade.innerHTML = endereco.localidade;

    var uf = document.getElementById("uf");
    uf.innerHTML = endereco.uf;
  };

  request.send();
});
