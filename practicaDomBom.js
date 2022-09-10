// let document=document.getElementById('body')

// let myp = document.createElement('p');
// myp.innerHTML = 'yet another';
// "yet another"
// document.body.appendChild(myp)
let button = document.getElementById('button1');

button.addEventListener('click', enviarDatos, false);
button.addEventListener('click', calcularDatos, false);
button.addEventListener('click', refrescarPantalla, false);
function enviarDatos(e){
	console.log("enviar datos..." + e.target);
}

function calcularDatos(e){
	console.log("calcular datos..." +  e.target);
}

function refrescarPantalla(e){
	console.log("refrescar pantalla..." +  e.target);
}