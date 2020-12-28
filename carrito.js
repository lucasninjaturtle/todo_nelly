//Funcion carrito

const agregarcarrito = function (){
    var zapatillaId = event.srcElement.id;
    var precio = document.getElementById (zapatillaId).innerHTML
            localStorage.setItem (`${zapatillaId}`,precio);
            
        


//hacer logica de que no puede haber mas del mismo pedido con un ID
//acumular en el localstorage la compra para lanzarla a otra pagina tipo legacy (./carrito)
// Ver de usar alguna API de wsp para abrirlo con los datos de un objeto de la compra e importalo en el chat.
}





const showCart = ()=>{
    var sandaliaRosa = localStorage.getItem ('precio_sandalia_rosa');
    var ZapaLonaUnisex = localStorage.getItem ('precio_zapa_lona_unisex_negra');
    var pups = localStorage.getItem ('precio_infantil_zapatillas_pups');
debugger
    var total = 0;
    const checkTotal = ()=>{
    var sandaliaRosaPrecio = 0
    var ZapaLonaUnisexPrecio = 0
    var pupsPrecio = 0;
        if (sandaliaRosa!==null && sandaliaRosa.length>27){
            sandaliaRosaPrecio = parseInt(sandaliaRosa.slice(27))
        }
        if (ZapaLonaUnisex!==null&&ZapaLonaUnisex.length>27){
            ZapaLonaUnisexPrecio = parseInt(ZapaLonaUnisex.slice(27))
        }
        
        if (pups!==null&&pups.length>27){
            pupsPrecio = parseInt(pups.slice(27))
        }

        total = sandaliaRosaPrecio + ZapaLonaUnisexPrecio + pupsPrecio

        return total;

    }
    debugger
    checkTotal();
    

   
    

    if(sandaliaRosa !== null){
        $('#sandaliaRosa').append('<div class="divPhoto"> <img class="fotoCart"id="theImg" src="./zapatillas/infantil_sandalias.JPG" /> </div>')
        $("#sandaliaRosa").append(`<div class="divCart"> <h4>${sandaliaRosa.slice(23)}</h4></div>` )
        
    }
    if(ZapaLonaUnisex !== null){
    $('#ZapaLonaUnisex').append('<div class="divPhoto"><img class="fotoCart"id="theImg" src="./zapatillas/zapa_lona_unisex_negra.jpg" /></div>')
    $("#ZapaLonaUnisex").append(`<div class="divCart"><h4>${ZapaLonaUnisex.slice(23)}</h4></div>` );

    }
    if(pups !== null){
        $('#pups').append('<div class="divPhoto"><img class="fotoCart"id="theImg" src="./zapatillas/infantil_zapatillas_pups.jpg" /></div>')
        $("#pups").append(`<div class="divCart"><h4>${pups.slice(23)}</h4></div>` );
    
        }



    $("#total").append(`<h1 style="padding: 10px;">TOTAL </h1> <h1 style="padding: 10px;" class="totalInside">ARS ${total}</h1> <button class="cart"id= "completePayment" onclick='salePago()'> Complete payment </button> <button class="eraseCart" onclick='eraseCart()'> Empty cart </button>`  );

    document.getElementById('cartButton').setAttribute("style","visibility:hidden");

}


const salePago = ()=>{
    alert("Su pago esta siendo procesado, aguarde por favor...")
    console.log( "The End... for now")
}

const eraseCart = ()=>{

    localStorage.removeItem("precio_sandalia_rosa");
    localStorage.removeItem("precio_zapa_lona_unisex_negra");
    localStorage.removeItem("precio_infantil_zapatillas_pups");

    $('#sandaliaRosa').empty()
    $("#ZapaLonaUnisex").empty();
    $("#pups").empty();
    $("#total").empty();
    $("#total").append(`<button class="eraseCart" onclick='eraseCart()'> <a href="./todo_nelly_main.html"> Home </a> </button>`  );

}


// funcion guardardatoscompra()


var compra = document.getElementById ('compra')
console.log(compra);

var guardardatoscompra = function guardardatoscompra(id, precio, descripcion, cantidad) {
    
    document.getElementById
    
    
    return console.log ("guardardatoscompra() o redireccionar a compra")
}

