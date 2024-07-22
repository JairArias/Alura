// Saludo por consola
alert ('Bienvenido a tu sistema de entretenimiento');

//saludo por consola
let nombre2 = ("John Jairo Pico");
console.log(`¡Hola, ${nombre2}`);

//saludo con alert
let nombre = ("John Jairo Pico");
alert (`¡Hola, ${nombre2}`);

//Pregunta lenguaje programacion
let consulta = prompt("¡Hola, digita cual es tu lenguaje de programacion favorito");
console.log("Tu lenguaje de programacion favorito es "+consulta);

//Suma de numeros
let valor1 = 15;
let valor2 = 154;
let resultado = valor1 + valor2;
console.log(`La Suma de los valores ${valor1} + ${valor2} es igual ${resultado}`);

//resta de numeros
let valor3 = 458;
let valor4 = 89;
let resultado2 = valor3 - valor4;
console.log(`La diferencia entre los valores ${valor3} - ${valor4} es igual ${resultado2}`);

//Mayor de edad
let edad = prompt("Digite su edad, por favor");

if (edad < 18){
  console.log("Tienes "+edad+" años, eres menor de edad");
}else{
  console.log("Tienes "+edad+" años, eres mayor de edad");
}

//numero positivo o negativo
let numero = prompt("Digita un numero");
if(numero>0){
  console.log("El numero ingresado es "+numero+" y es positivo");
}
else if (numero==0){
  console.log("El numero ingresado es 0");
}else{
  console.log("El numero ingresado es "+numero+" y es negativo");
  }

//bucle
let contador = 0;
while(contador<=10){
  contador++;
  console.log("Numero de secuencia "+numero);
  
}

//nota
let nota = 5;
if(nota>=7){
  console.log(`Aprobo con ${nota}`);
}else{
  console.log(`Reprobo con ${nota}`);
}

//Numero aleatoreo
let numeroAleatoreo = Math.random();
console.log("El numero aleatoreo es "+numeroAleatoreo);

//Numero aleatoreo entero
let NumeroAEntero = Math.flor(Math.random()*10)+1;
console.log('El numero es '+NumeroAEntero);

//numero aleatoreo de 1 a 1000
let numeroAEntero2 = Math.floor(Math.random()*1000)+1;
console.log("El numero aleatoreo es "+numeroAEntero2);
