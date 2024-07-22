//Funcion Hola Mundo

function holaMundo(){
console.log('¡Hola, mundo!');
}
holaMundo();

//Funcion saludo Persona
function saludo(nombrePersona){
  console.log("¡Hola, "+ nombrePersona);
}
saludo("John Pico");

//Funcion doble de un numero
function dobleDeUnNumero(numero){
  return numero*2;
}
console.log(`Doble del numero 15 es ${dobleDeUnNumero(15)}`);

//Funcion promedio 3 numeros
function promedioTresNumeros(valor1,valor2,valor3){
return Math.floor((valor1+valor2+valor3)/3);
}
console.log("EL promedio de los 3 numeros ingresado es "+promedioTresNumeros(10,20, 50));

//Funcion numero mayor de 2
function numeroMayor(numero1, numero2){
 let nMayor;
  if(numero1<numero2){
    nMayor=numero2;
  }else{
    nMayor=numero1;
  }
  return nMayor
}
console.log("El numero mayor ingresado es "+numeroMayor(100, 35));

//Funcion numero multiplicado por si mismo
function numeroAlCuadrado(valor4){
  return valor4*valor4;
}
console.log(`El cuadrado del valor ingresado es ${numeroAlCuadrado(5)}`);
