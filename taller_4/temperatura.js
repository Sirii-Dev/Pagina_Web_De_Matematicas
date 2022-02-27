let tipo;
function seleccion() {
  /* Para obtener el texto */
  let temperaturaInicial = document.getElementById("gradosIniciales");
  tipo = String(
    temperaturaInicial.options[temperaturaInicial.selectedIndex].text
  );
  console.log(tipo);
  //alert(tipo);
}

let destino;
function tFinal() {
  /* Para obtener el texto */
  let temperaturaFinal = document.getElementById("gradosFinales");
  destino = temperaturaFinal.options[temperaturaFinal.selectedIndex].text;
}

function convertir() {
  //obteniendo el valor numerico de la temperatura
  let valorNumerico = document.getElementById("temperatura");
  valorNumerico = parseFloat(valorNumerico.value);

  let resultado;

  if (tipo == "C°" && destino == "K°") {
    // conversion de celsius a kelvin
    resultado = valorNumerico + 273.15;
  } else if (tipo == "C°" && destino == "F°") {
    //conversion de celsius a fahrenheit
    resultado = valorNumerico * 1.8 + 32;
    resultado = resultado.toFixed(2);
  } else if (tipo == "F°" && destino == "C°") {
    //fahrenheit a celsius
    resultado = (valorNumerico - 32) * 0.5555555556;
    resultado = resultado.toFixed(2);
  } else if (tipo == "F°" && destino == "K°") {
    //fahrenheit a kelvin
    resultado = (valorNumerico - 32) * 0.5555555556 + 273.15;
    resultado = resultado.toFixed(2);
  } else if (tipo == "K°" && destino == "C°") {
    //kelvin a celsius
    resultado = valorNumerico - 273.15;
  } else if (tipo == "K°" && destino == "F°") {
    //kelvin a fahrenheit
    resultado = (valorNumerico - 273.15) * 1.8 + 32;
    resultado = resultado.toFixed(2);
  } else {
    resultado = "invalido";
  }

  let resultadoFinal = document.getElementById("Resultado");
  resultadoFinal.innerText = resultado;
}
