// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

 //* creamos el Molde 
 class Personas{
     constructor(Nombre,edad,dni,Sexo,Peso,altura,anioNacimiento){
         this.Nombre = Nombre,
         this.edad = edad,
         this.dni = dni,
         this.Sexo = Sexo,
         this.Peso = Peso,
         this.altura = altura,
         this.anioNacimiento = anioNacimiento

     }
     mostrarGeneracion(){
         if (1930 <= (2022 - parseInt(this.edad)) && (2022 - parseInt(this.edad))<1949) {
             alert("<br> Tu generacion es Silent Generation y tu caracteristica es la Austeridad")
            
         }
         else if (1949 <= (2022 - parseInt(this.edad)) && (2022 - parseInt(this.edad)) <1969) {
             alert("<br> Tu generacion es Baby Boom y tu caracteristica es la Ambicion")
            
         }
         else if (1969 <= (2022-parseInt(this.edad)) && (2022 - parseInt(this.edad)) <1981) {
             alert("<br> Tu generacion es Generacion X tu caracteristica es la Obsesion por el Exito")
            
         }
         else if (1981 <= (2022 - parseInt(this.edad)) && (2022 - parseInt(this.edad)) <1994) {
             alert("<br> Tu generacion es Generacion Y Millennials tu caracteristica es la Frustracion")
            
         }
        else if (1994 <= (2022 - parseInt(this.edad)) && (2022 - parseInt(this.edad)) <2010) {
             alert("<br> Tu generacion es Generacion Z  tu caracteristica es la Frustracion")
            
         }
        
        
     }
     esMayorDeEdadd(){
         if (parseInt(this.edad) >= 18) {
             alert(" Eres mayor de edad")
         }else {
             alert("Eres menor de edad")

        }
     }
     mostrarDatos(){
         alert(" Estos datos son correctos:"+" \n Nombre:"+this.Nombre+"\n Edad:"+parseInt(this.edad)+"\n DNI:"+this.dni+"\n Sexo:"+this.Sexo+"\n Peso:"+this.peso+"\n Altura:"+this.altura +"\n Año de Nacimiento"+this.anioNacimiento)
     }
 }

// let persona1=[]
// console.log(persona1)
    // let Nombre = (document.getElementById("Nombre").value);
    // let edad = (document.getElementById("edad").value);
    // let dni  = (document.getElementById("DNI").value);
    // let Sexo  = (document.getElementById("Sexo").value);
    // let Peso  = (document.getElementById("peso").value);
    // let altura  = (document.getElementById("altura").value);    
    // let anioNacimiento  = (document.getElementById("anioNacimiento").value);
    // let form=document.getElementById("form")
    // console.log(form)
    

     //creo el array donde voy a guardar las personas, uso JSon para traer de LocalStorage
    let ArrNuevaPersona = JSON.parse(localStorage.getItem("Lista_Personas")) || [];

    //creo una funcion para crear objeto persona y pushar al array
    const handleSubmit=(e)=>{
        // PARA EVITAR QUE ACTUALICE
        e.preventDefault();
        //TRAER LOS DATOS DEL INPUT
        let Nombre = (document.getElementById("Nombre").value);
        let edad = (document.getElementById("edad").value);
        let dni  = (document.getElementById("DNI").value);
        let Sexo  = (document.getElementById("Sexo").value);
        let Peso  = (document.getElementById("peso").value);
        let altura  = (document.getElementById("altura").value);    
        let anioNacimiento  = (document.getElementById("anioNacimiento").value);
        //CREA LA NUEVA PERSONA
        const nuevaPersona = new Personas(Nombre,edad,dni,Sexo,Peso,altura,anioNacimiento)
        //MUESTRA POR PANTALLA
        console.log(nuevaPersona);
        //MANDO LOS DATOS AL ARRAY
        ArrNuevaPersona.push(nuevaPersona);
        //MUESTO POR PANTALL
        console.log(ArrNuevaPersona);
        //ENVIO LA INFO A LOCASTORAGE
        localStorage.setItem("Lista_Personas",JSON.stringify(ArrNuevaPersona));
        //RESETEO EL FORMULARIO
        form.reset()
        //RECARGO LA PAGINA
        window.location.reload() 
    }
    form.addEventListener("submit",handleSubmit)

    
let consultaLS = JSON.parse(localStorage.getItem("Lista_Personas"))|| [];
console.log(consultaLS)

    //creo funcion para ir agregando los nombre:  
     let listaPersonas = document.getElementById("ListaPersonas");
     console.log(listaPersonas);

     const createPersonas=(persona)=>{
        ListaPersonas.innerHTML +=`<th class=" text-center">${persona.Nombre}</th>
         <th class=" text-center">${persona.edad}</th>
         <th class=" text-center">${persona.dni}</th>
         <th class=" text-center">${persona.Sexo}</th>
         <th class=" text-center">${persona.Peso}</th>
         <th class=" text-center">${persona.altura}</th>
         <th class=" text-center">${persona.anioNacimiento}</th>
         <th class="text-center" >
                            <button class=" btn btn-danger">generacion</button>
                            <button class=" btn btn-warning">Mayoria edad</button>
                            <button class=" btn btn-info">Mis Datos</button>
        </th>`
        
        

     }
     ///creo un for para recorrer la funcion, esto entra al array y va ejecutando la funcion "create personas"
     for (let index = 0; index < consultaLS.length; index++) {
        const element = consultaLS[index];
       createPersonas(element);
        
        
     } 
      
    
 
 function optenerValores() {
     let Nombre = (document.getElementById("Nombre").value);
     let edad = (document.getElementById("edad").value);
     let dni  = (document.getElementById("DNI").value);
     let Sexo  = (document.getElementById("Sexo").value);
     let Peso  = (document.getElementById("peso").value);
     let altura  = (document.getElementById("altura").value);    
     let anioNacimiento  = (document.getElementById("anioNacimiento").value);
     // persona1.push(Nombre,dni,Sexo,Peso,altura,anioNacimiento);
     let persona = new Personas(Nombre,edad,dni,Sexo,Peso,altura,anioNacimiento)
     console.log(persona);
     persona.mostrarGeneracion()

}

// function mayoriaEdad() {
//     let Nombre = (document.getElementById("Nombre").value);
//     let edad = (document.getElementById("edad").value);
//     let dni  = (document.getElementById("DNI").value);
//     let Sexo  = (document.getElementById("Sexo").value);
//     let Peso  = (document.getElementById("peso").value);
//     let altura  = (document.getElementById("altura").value);    
//     let anioNacimiento  = (document.getElementById("anioNacimiento").value);
//     // persona1.push(Nombre,dni,Sexo,Peso,altura,anioNacimiento);
//     let persona = new Personas(Nombre,edad,dni,Sexo,Peso,altura,anioNacimiento)
//     console.log(persona);
//     persona.esMayorDeEdadd()

// }
// function mostrarDatosUsuario() {
//     let Nombre = (document.getElementById("Nombre").value);
//     let edad = (document.getElementById("edad").value);
//     let dni  = (document.getElementById("DNI").value);
//     let Sexo  = (document.getElementById("Sexo").value);
//     let Peso  = (document.getElementById("peso").value);
//     let altura  = (document.getElementById("altura").value);    
//     let anioNacimiento  = (document.getElementById("anioNacimiento").value);
//     // persona1.push(Nombre,dni,Sexo,Peso,altura,anioNacimiento);
//     let persona = new Personas(Nombre,edad,dni,Sexo,Peso,altura,anioNacimiento)
//     console.log(persona);
//     persona.mostrarDatos()
// }