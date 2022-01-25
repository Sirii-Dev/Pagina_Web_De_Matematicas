//FUCIONES DE RETORNADO
//Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Codigo del triangulo
function perimetroTriangulo(ladoA, ladoB, base) {
  return ladoA + ladoB + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}


//Código del circulo
function perimetroCirculo(radio) {
  let resultado = radio * radio * Math.PI;
  resultado = resultado.toFixed(2)
  return resultado;
}

function areaCirculo(radio) {
  let resultado = radio * radio * Math.PI;
  resultado = resultado.toFixed(2)
  return resultado;
}

//INTERACCION CON HTML Y FUNCIONES DE ONCLICK

//Interaccion para el cuadrado
function calcularPerimetroCuadrado() {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;
  let resultado = perimetroCuadrado(value);

  let inputCuadrado = document.getElementById("ResultadoCuadrado");
  inputCuadrado.innerText = `El perimetro del cuadrado es ${resultado}cm`;
}

function calcularAreaCuadrado() {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;
  let resultado = areaCuadrado(value);

  let inputCuadrado= document.getElementById("ResultadoCuadrado");
  inputCuadrado.innerText = `El área del cuadrado es ${resultado}cm²`;
}

//Interaccion para el triangulo
function calcularPerimetroTriangulo(){
  let inputA = document.getElementById("InputA");
  let valueA = parseFloat(inputA.value);

  let inputB = document.getElementById("InputB");
  let valueB = parseFloat(inputB.value)

  let inputC = document.getElementById("InputC");
  let valueC = parseFloat(inputC.value);

  let resulado = perimetroTriangulo(valueA, valueB, valueC);

  let inputTriangulo = document.getElementById("ResultadoTriangulo");
  inputTriangulo.innerText = `El perimetro del triangulo es ${resulado}cm`
}

function calcularAreaTriangulo(){
  let inputBase = document.getElementById("InputC");
  let valueBase = parseFloat(inputBase.value);

  let inputAltura = document.getElementById("InputAltura");
  let valueAltura = parseFloat(inputAltura.value)
  
  let resulado = areaTriangulo(valueBase, valueAltura);

  let inputTriangulo = document.getElementById("ResultadoTriangulo");
  inputTriangulo.innerText = `El área del triangulo es ${resulado}cm²`
}


//Altura del triangulo
let altura;
function calcularAlturaTriangulo() {
  let ladoA = document.getElementById("InputA");
  let valueA = Number(ladoA.value);
  console.log(valueA);

  let ladoB = document.getElementById("InputB");
  let valueB = Number(ladoB.value);
  console.log(valueB);

  let ladoC = document.getElementById("InputC");
  const valueBase = Number(ladoC.value);

  if (valueA == 0) {
    altura = Math.sqrt((valueB**2) -((valueBase/2)**2));
  } else {
    altura = Math.sqrt((valueA**2) -((valueBase/2)**2));
  }

  let resultado= document.getElementById(
    "ResultadoTriangulo"
  );
  resultado.innerText = `La altura es de ${altura} cm`;
}


//Interaccion para el circulo
function calcularPerimetroCirculo(){
  let inputRadio = document.getElementById("InputRadio");
  let valueRadio = inputRadio.value;

  let resultado = perimetroCirculo(valueRadio);

  let inputCirculo = document.getElementById("ResultadoCirculo");
  inputCirculo.innerText = `El perimetro del circulo es ${resultado}cm`;
}

function calcularAreaCirculo(){
  let inputRadio = document.getElementById("InputRadio");
  let valueRadio = inputRadio.value;

  let resultado = areaCirculo(valueRadio);

  let inputCirculo = document.getElementById("ResultadoCirculo");
  inputCirculo.innerText = `El área del circulo es ${resultado}cm²`;
}