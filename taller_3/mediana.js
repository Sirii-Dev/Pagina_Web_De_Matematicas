function calcularMediana() {
   //Interactuando con HTML
  let valor = document.getElementById("UserValues");
  valor = valor.value;

  //convirtiendo a array de strings
  valor = valor.split(",");

  //convirtiendo a array de eneros
  valor = valor.map((x) => parseFloat(x));

  //acomodando el array de menor a mayor
  let valores = valor.sort(function (a, b) {
    return a - b;
  });

  let mitadLista = parseInt(valores.length / 2);

  //Calculando la mediana
  let mediana;
  let resultado = document.getElementById("Reslutado");
  if (valores.length % 2 === 0) {
    let elemento1 = valores[mitadLista - 1];
    let elemento2 = valores[mitadLista];

    mediana = (elemento1 + elemento2) / 2;

    resultado.innerText = `La mediana es ${mediana}`
  } else {
   mediana = valores[mitadLista];

    resultado.innerText = `La mediana es ${mediana}`
  }
}
