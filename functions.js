// Declaracion de variables GENERALES

// contacto

let nombre = "";
let email = '' ;
let asunto = '';
let mensaje = '';


// funciones constructoras


//zapatillas

function NuevaZapatilla (marca, modelo, precio, colores, materiales, distribuidor) {
    this.marca = marca || "unknown";
    this.modelo = modelo || "unknown";
    this.precio = precio || "unknown";
    this.colores = colores || "unknown";
    this.materiales = materiales || "unknown";
    this.distrubuidor = distribuidor || "unknown";
}


// Zapatillas
var popotas = new NuevaZapatilla ("zoo", "ojotas", '500', ['amarillo', 'verde', 'azul'], "plastico", 'la esquina SA');


// se puede hacer una pagina HTML especifica solo para cargar las zapatillas como variables y actualizar stocks y precios??



// funcion para los contactos

function contactopormail (nombre, email, asunto, mensaje){
    if (nombre !== "" || email !== "" || asunto !== "" || mensaje !== ""){
        alert ("Introduzca todos los campos: Nombre, Email, Asunto y su mensaje")
    }
    else {
        //enviar el mensaje
    }
}








