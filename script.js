var label = document.querySelector('label');

function converte() {
  var valorReal = document.querySelector('input').value;
  var valorConvertido = parseFloat(valorReal) * 5.13;
  label.textContent = "$" + valorConvertido.toFixed(2);
  if (label.textContent == "$NaN"){
    label.textContent = "VALOR INVÁLIDO";
  }
}

function AddTexto(item) {
  var texto = document.querySelector('input');
  texto.value += item;
}

function limpa() {
  var texto = document.querySelector('input');
  texto.value = "";
}