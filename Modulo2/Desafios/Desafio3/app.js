//Funcion IMC de una persona
function masaCorporal(altura, peso){
  return peso/Math.pow(altura, 2);
  
}
let altura = 1.80;
let peso = 80;
let imc = masaCorporal(altura, peso);
 console.log(`su masa corporal es ${imc}`);

//Funcion Factorial
function numeroFactorial(numero){
  let contador = numero;
  while (numero>1 ){
    numero--;
    contador = contador*numero;
  }
  return contador;
}
let numero = 10;
let factorial = numeroFactorial(numero);
console.log("El numero factorial de "+numero+" es "+factorial);

//Funcion Conversor de moneda
function conversionMoneda(valor){
  let real= 5.48;
  return valor * real;
  
}
let valor = 2500;
let monedaReal = Math.floor(conversionMoneda(valor));
console.log(`La cantidad de ${valor} dolares en moneda real brasilera  es ${monedaReal}`);

//Funcion area y perimetro de sala rectangular
function calcularArea(vAltura, ancho){
  return vAltura * ancho;
}
function calcularPerimetro(vAltura, ancho){
  return (vAltura*2)+(ancho*2);
}
let vAltura = 18;
let ancho = 12;
let area = calcularArea(vAltura, ancho);
let perimetro = calcularPerimetro(vAltura, ancho);
console.log(`El area es de ${area} el perimetro es de ${perimetro} de la sala rectangular`);

//Funcion area y perimetro sala circular
function areaCircular(radio, pi){
return pi*Math.pow(radio, 2);
}
function perimetroCircular(radio, pi){
return pi*(radio*2);
}

const pi  = 3.1416;
let radio = 6;
let calculoArea = areaCircular(radio,pi);
let calculoPerimetro = perimetroCircular(radio, pi);
console.log(`El area es de ${calculoArea} el perimetro es de ${calculoPerimetro} de la circunferencia`);
