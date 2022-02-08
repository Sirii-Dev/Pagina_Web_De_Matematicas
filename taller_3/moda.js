function calcularModa() {
  //interactuando con HTML
  let valor = document.getElementById("InputValues");
  valor = valor.value;

  //convirtiendo a array de strings
  valor = valor.split(",");

  //convirtiendo el array a enteros
  valor = valor.map((x) => parseFloat(x));

  //contando cuantas veces aparece cada elemento
  let contador = {};

  //recorriendo y añadiendo los valores al contador
  valor.map(function (elemento) {
    if (contador[elemento]) {
      //si el elemento que recibimos ya esta en contador sumale 1
      contador[elemento] += 1;
    } else {
      //si no existe, crealo y marca como que ha aparecido 1 vez
      contador[elemento] = 1;
    }
  });

  //convirtiendo de nuevo a array con Object.entries y ordenando de menor a mayor con sort
  let listaOrdenada = Object.entries(contador).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  let moda;

  //sacando el elemento que mas se repite
  let ultimoElemento = listaOrdenada[listaOrdenada.length - 1]; //ultimo array de lista ordenada
  ultimoElemento = ultimoElemento[1]; //segundo valor de moda

  let penultimoElemento = listaOrdenada[listaOrdenada.length - 2]; //ultimo array de lista ordenada
  penultimoElemento = penultimoElemento[1]; //segundo valor de moda

  let respuesta = document.getElementById("InputResultado");

  if (ultimoElemento > penultimoElemento) {
    moda = listaOrdenada[listaOrdenada.length - 1]; //ultimo array de lista ordenada
    moda = moda[0]; //segundo valor de moda
    //console.log("tu moda es" + moda);
    respuesta.innerText = "Tu moda es " +moda;
  } else {
    respuesta.innerText = "Lo siento no puede calcular la moda";
  }
}
