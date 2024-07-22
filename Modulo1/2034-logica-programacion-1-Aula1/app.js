// Variables
let numeroMaximo = 3000;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = prompt("Ingresa el numero de intentos que deseas jugar");
//Ciclo Mientras que
//console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){
numeroUsuario = parseInt(prompt("Me indicas un número entre 1 al "+numeroMaximo+" por favor:"));

if (numeroUsuario == numeroSecreto) { 
    alert(`Acertaste, el numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
}else {
  if (numeroUsuario > numeroSecreto){
    alert('El numero secreto es menor');
  }else {
    alert('El número secreto es mayor');
  }
  intentos ++;
  if (intentos > maximoIntentos){
    alert (`Llegaste al numero maximo de ${maximoIntentos} intentos`);
    alert("El numero secreto es "+numeroSecreto+ ", intentalo de nuevo");
    break;
  }
 // alert ('Lo siento, el número ingresado es incorrecto');
}
}
