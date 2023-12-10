function compraCamiseta(){
    let compraCamiseta = prompt('¿Deseas realizar la compra? (Escribe "aceptar" si deseas realizarla, o "rechazar" sino.')
    if (compraCamiseta == 'aceptar'){ 
        return prompt('Introduce tu número de tarjeta') + '. Compra realizada'
    }else{

        return 'La compra no se realizara'
    }
}

alert(compraCamiseta())
//CAMISETA RIVER PLATE
let boton1 = document.querySelector('#boton1')
let imagen1 = document.querySelector('#imagen1')
let texto1 = document.querySelector('#texto1')
let imagenCambiada = false;
boton1.onclick = function(){

if(imagenCambiada==false){
    imagen1.src='https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd06c88edba348079e67af01014db201_9366/camiseta-alternativa-river-plate-22-23.jpg'
    texto1.innerText = 'Camiseta del Club Atletico River Plate VISITANTE'
    imagenCambiada=true
    
}else{
    imagen1.src='riveeeeeeeer.jpg'
    texto1.innerText = 'Camiseta del Club Atletico River Plate LOCAL'
    imagenCambiada=false
}
}