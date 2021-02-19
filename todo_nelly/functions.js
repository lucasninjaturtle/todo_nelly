// CONTACTO


var archivarcontactopormail = ()=>{
var nombre = document.getElementById ("nombre").value
var email = document.getElementById ("email").value
var asunto = document.getElementById ("asunto").value
var mensaje = document.getElementById ("mensaje").value
    localStorage.setItem ('nombre1',nombre);
    localStorage.setItem ('email1',email);
    localStorage.setItem ('asunto1',asunto);
    localStorage.setItem ('mensaje1',mensaje);
}

function enviaralservidorelcontacto (){
    localStorage.getItem ('nombre1');
    localStorage.getItem ('email1');
    localStorage.getItem ('asunto1');
    localStorage.getItem ('mensaje1');
    //poner aca enviar esto al servidor (ver luego como)
}



// Funcion de calculo


const calculocompra_sandalia_rosa = function (){
    let cantidad = document.getElementById ("cantidad_sandalia_rosa").value;
    let zapatilla = infantil_sandalias
    let total = cantidad*zapatilla.precio
    document.getElementById("precio_sandalia_rosa").innerHTML = "Agregar al carrito <br />" +"ARS " + total;
    return console.log(cantidad)
    } 


const calculocompra_infantil_zapatillas_pups = function (){
        let cantidad = document.getElementById ("cantidad_infantil_zapatillas_pups").value;
        let zapatilla = infantil_zapatillas_pups
        let total = cantidad*zapatilla.precio
        document.getElementById("precio_infantil_zapatillas_pups").innerHTML = "Agregar al carrito <br />" +"ARS " + total;
        return console.log(cantidad)
        } 


const calculocompra_zapa_lona_unisex_negra = ()=>{
        let cantidad = document.getElementById ("cantidad_zapa_lona_unisex_negra").value;
        let zapatilla = zapa_lona_unisex_negra
        let descuento = cantidad*zapatilla.precio*zapatilla.descuento/100
        let total = (cantidad*zapatilla.precio)-descuento
        document.getElementById("precio_zapa_lona_unisex_negra").innerHTML = "Agregar al carrito <br />" +"ARS " + total;
        return console.log(cantidad)
        }         




//Jquery Efecto

var efecto = setInterval(() => {
    $("#efecto").fadeOut(500, function(){
        $("#efecto").fadeIn(500)
    })
}, 2000);






// CODIGO EXTRA de prueba
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

//let variable = document.getElementById ('nombre dato a traer').value (si no pongo el .value me trae undefined, mirar porque hay mas valores a traer)

// funcion para los contactos (aunque ya lo hace el HTML)

// function contactopormail (nombre, email, asunto, mensaje){
//     if (nombre !== "" || email !== "" || asunto !== "" || mensaje !== ""){
//         alert ("Introduzca todos los campos: Nombre, Email, Asunto y su mensaje")
//     }
//     else {
//         //enviar el mensaje
//     }
// }


// objeto para carrito que se mueve

//var carrito = {
//    carrito : carritoestatico,
 //   carritoeliminado : carritoeliminado,
//    carritoingreso : carritoingreso,
//}

// funcion para grabar los datos del email

// falta lo del boton "Enviar" no se como hacerlo aun
//linea 156 del HTML  <form action="/action_page.php" target="_blank">




var calculatediscprice = function calculatediscprice (precio, cantidad, codigocalzado, descuento){
    var precio = "precio"
    var cantidad = "cantidad"
    var codigocalzado = 'codigocalzado'
    var descuento = 'descuento'

    if (!descuento){
        return "su precio de " + codigocalzado + 'es de ' + precio*cantidad;
    }
    else {
        var preciofinaldelcalzado = precio*cantidad*descuento/100;

        return "su precio de " + codigocalzado + 'es de ' + preciofinaldelcalzado;
    }

        
    
}







