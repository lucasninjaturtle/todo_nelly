const apilink2 = 'https://pokeapi.co/api/v2/pokemon/pikachu';



var clickForm2 = document.querySelector('#precio_sandalia_rosa');



clickForm2.addEventListener('click', function(){
    var LinkBusqueda2 = apilink2

    fetch(LinkBusqueda2) // en el fetch las siuiebtes lineas comentadas son casi ssiempre iguales//
    .then(respuesta2 => respuesta2.json()) //
    .then(objeto2 =>{
        
        if (objeto2.weight === 60){
            alert ('Esta promo es para vos!!')
        }
        console.log(objeto2)

    })
    
    
    
    
    .catch(err => {
    console.log(err)
    })
})

