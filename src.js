var numeros = document.querySelectorAll(".nsexy");
var contador=0;
var btn = document.querySelector("button");

btn.onclick = function(e){
  contador=contador+1;
  updateController();
}

function updateController(){
  let unidad = contador%10,
  decena = contador%100-unidad,
  centena = contador%1000-unidad-decena;

  numeros[2].innerHTML = unidad;
  numeros[1].innerHTML = decena/10;
  numeros[0].innerHTML = centena/100;
}
