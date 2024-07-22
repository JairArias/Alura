//Creando lista vacia
let listaGenerica = [];
console.log("Lista Generica"+listaGenerica);

//Creando lista de lenguajes de programacion
let lenguajesDeProgramacion = ['JavaScripts','C','C++','Kotlin','Python'];
console.log("Cantidad de elementos en la lista "+lenguajesDeProgramacion.length);
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
console.log("Cantidad de elementos en la lista "+lenguajesDeProgramacion.length);

//Mostrar elementos Lenguaje Programacion
function mostrarLenguajeProgramacion(){
  for(let i=0;i<lenguajesDeProgramacion.length;i++){
    console.log("Lenguaje = "+lenguajesDeProgramacion[i]);
  }
}
mostrarLenguajeProgramacion();

//Mostrar elementos Lenguaje Programacion orden inverso
function mostrarLenguajeProgramacionInverso (){
  for(let i=lenguajesDeProgramacion.length-1;i>=0;i--){
    console.log("lenguaje ="+lenguajesDeProgramacion[i]);
  }
}
mostrarLenguajeProgramacionInverso();

//Promedio lista de numeros
let listaNumeros=['5','4','20','15','35','1','0','19','-5'];
function promedioNumeros(){
let suma = 0;
  for(i=0;i<listaNumeros.length;i++){
    suma+=Math.floor(listaNumeros[i]);
  }
return  suma/listaNumeros.length;
}
promedioNumeros();
let promedio = promedioNumeros();
console.log(`El promedio de los numeros es ${promedio}`);

//Numero mayor y menor
function numeroMayorMenor(){
  let nMas = 0;
  let nMenos = listaNumeros[0];
  for(i=0;i<listaNumeros.length;i++){
    //numero mayor
    if(nMas < listaNumeros[i]){
     nMas = Math.floor(listaNumeros[i]);
     }
    //numero menor
          if(nMenos>listaNumeros[i]){
      nMenos=Math.floor(listaNumeros[i]);
    }
}
console.log("El numero mayor de la lista es :"+nMas);
console.log('El número menor de la lista es :'+nMenos);
}
numeroMayorMenor();

//Suma de los elemntos de la lista
function sumaNumeros(){
  let valorTotal = 0;
  for(let i=0;i<listaNumeros.length;i++){
    valorTotal+=Math.floor(listaNumeros[i]);
  }
  console.log("La suma de los elementos es :"+valorTotal);
}
sumaNumeros();

//Buscar numero en lista
function buscarNumero(valorBuscar){
  for (i=0;i<listaNumeros.length;i++){
    if(valorBuscar==listaNumeros[i]){
      return i;
    }
    
  }
  return "-1";

}
let valorBuscar = 55;
let ubicacion = buscarNumero(valorBuscar);
console.log(`EL numero ${valorBuscar} se encuentra en la ubicacion ${ubicacion}`);

//Funcion suma de 2 listas
let lista1 = ['5','8','15','20','0','-5'];
let lista2 = ['14','2','9','4','36','84'];
function sumaListas(){
  let sumaListas=[];
  let x;
        console.log("Suma de elementos de 2 listas");
  for(i=0;i<lista1.length;i++){
    for(let j=0;j<lista2.length;j++){
      if(i==j){
      sumaListas[x]=Math.floor(lista1[i])+Math.floor(lista2[j]);
      console.log(sumaListas[x]);
      }
    }
  }
}
sumaListas();

//Funcion lista cuadrado
function listaAlCuadrado(){
  let listaCuadrado=[];
  console.log("Lista Elementos al cuadrado");
  for(j=0;j<lista2.length;j++){
    listaCuadrado[i]=Math.pow(lista2[j], 2);
    console.log(listaCuadrado[i]);
  }
}
listaAlCuadrado();
