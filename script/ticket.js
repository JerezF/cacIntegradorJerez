   //      ------ Variables ------

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var mail = document.getElementById("mail");
var cantidad = document.getElementById("cantidad");
var categoria = document.getElementById("opcionesDescuento");
var btnBorrar = document.getElementById("btnBorrar");
var btnResumen = document.getElementById("btnResumen");
var precioPagar = document.getElementById("precioPagar");
var pTotalAPagar = document.getElementById("pTotalAPagar");

//          -----Funciones------

function vaciarFormulario(){
    nombre.value = "";
    apellido.value = "";
    mail.value = "";
    cantidad.value = "";
    categoria.value = "";
    pTotalAPagar.innerHTML = "";
}

function calcularResumen(){
    let porcentaje;
    let valorEntrada = 200;
    let valorSeleccionado = categoria.value;
    let cantidadEntero = parseInt(cantidad.value);
    

    if(valorSeleccionado == "1"){
        porcentaje = 200 * 0.8;
        precioFinal = 200 - porcentaje;
        valorEntrada = cantidadEntero * precioFinal;
        
    } else if (valorSeleccionado == "2"){
        porcentaje = 200 * 0.5;
        precioFinal = 200 - porcentaje;
        valorEntrada = cantidadEntero * precioFinal;

    } else if( valorSeleccionado == "3"){
        porcentaje = 200 * 0.15;
        precioFinal = 200 - porcentaje;
        valorEntrada = cantidadEntero * precioFinal;

    } else {
        precioFinal = 200;
        valorEntrada = cantidadEntero * precioFinal;
    }

    pTotalAPagar.innerHTML = "";
    document.getElementById("pTotalAPagar").innerHTML += valorEntrada;
}

//          -----Eventos------
btnBorrar.addEventListener("click", vaciarFormulario);
btnResumen.addEventListener("click", calcularResumen);




