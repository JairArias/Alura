//Valida si es fin de semana o entre semana
let diaSemana = prompt('Ingrese el dia de la semana');
console.log(diaSemana);
if (diaSemana =='Sabado' || diaSemana == 'Domingo'){
  alert('!Buen fin de semana!');
  else{
    alert ('!Buena semana!');
  }
}
//Verifica si numero ingresado es positivo o negativo
let numero = prompt('Digite un numero');
console.log(numero);
if (numero > 0){
  alert('¡El numero ingresado es positivo');
  else if(numero < 0){
    alert('¡El numero ingresado es negativo!');
  }
}
//Sistema de puntuacion en un juego
let puntuacion = 98;
console.log(puntuacion);
if (puntuacion >= 100){
  alert('¡Felicidades, has ganado!');
  else{
    alert('Intentalo nuevamente para ganar');
  }
}
//Saldo de cuenta de ahorros
let saldoCuenta = 24.586.345;
console.log(saldoCuenta);
alert(`Bienvenido, el saldo de su cuenta es: ${saldoCuenta} , gracias por usar nuestros servicios`);
//Solicitar nombre de usuario
let nombreUsuario = prompt('Ingrese su nombre de usuario');
console.log(nombreUsuario);
alert('Bienvenido '+ nombreUsuario+' al sistema');

