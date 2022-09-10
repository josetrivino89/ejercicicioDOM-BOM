// Números mágicos - Dificultad:  🟢
// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let crearNumeoAleatorio = document.getElementById("start");
let eleccionUsuario = document.getElementById("input_number");
let enviarParaComparar = document.getElementById("send");

let numero
let numeroUsuario 


crearNumeoAleatorio.addEventListener("click",startGame);

function startGame() {
    numero = Math.floor( Math.random()*100)  
    console.log(numero)      

    mostrarCajaNumero()
    muestreInput()
}


function mostrarCajaNumero() {
    let element = document.createElement("div")
    element.id = "caja_numero"
    element.style.width ="100px"
    element.style.height ="100px"
    element.style.background ="blue"

    document.body.appendChild(element)    
}

function muestreInput() {
    eleccionUsuario.style.display = "block"
    enviarParaComparar.style.display = "block"
}
  eleccionUsuario.addEventListener("change", setearNumero)

 function setearNumero(e) {      
    //para tomar el valor del input usamos el evento (e.target.value)
      console.log(e.target.value) 
      numeroUsuario = e.target.value
}

enviarParaComparar.addEventListener("click",comparar);

function comparar() {
    let caja = document.getElementById("caja_numero") 
    caja.innerHTML= numero
    
    if (numeroUsuario == numero) {
        alert("Ganaste, tu eleccion fue "+ numeroUsuario +" El numero aleatorio era: "+ numero)
        
    }alert("Perdiste, tu eleccion fue "+ numeroUsuario +" El numero aleatorio era: "+ numero)
    
}







