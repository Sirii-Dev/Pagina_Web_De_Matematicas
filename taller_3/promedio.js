function calcularPromedio() {
    let valor = document.getElementById("InputString")
    valor = valor.value;

    //convirtiendo a array de strings
    valor = valor.split(",");
  

    //convirtiendo el array a enteros
    valor = valor.map((x) => parseFloat(x));


    // sacando la suma de los numeros y el numero de vueltas
    let sumaLista = 0;
    vueltas = 0;

    for (let i = 0; i < valor.length; i++) {
    sumaLista += valor[i];
    vueltas++;
  }
    console.log(sumaLista);
    

    promedio = sumaLista / vueltas;

    let promedioTotal = document.getElementById ("InputButton");
    promedioTotal.innerText = `El promedio es ${promedio}`
    

}