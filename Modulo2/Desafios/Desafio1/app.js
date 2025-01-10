let titulo =document.querySelector("h1");
titulo.innerHTML="Hora del desafio!!";

function inicio(){
  console.log("El boton fue clicado");
}
function nombre(){
  let ciudadBrasil = prompt("Digite una ciudad de Brasil");
  alert("Estuve en "+ciudadBrasil+" y me acordé de ti");
}

function javaScript(){
  alert("Yo amo JS");
}

function suma(){
  let valor1 =parseInt(prompt("Digite un numero"));
  let valor2 = parseInt(prompt("Digite un segundo numero"));
  let resultado = valor1 + valor2;
  alert(`La suma de los numero ingresados es ${resultado}`);
}
