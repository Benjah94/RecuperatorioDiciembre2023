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
//CAMISETA RIVER PLATE
let boton2 = document.querySelector('#boton2')
let imagen2 = document.querySelector('#imagen2')
let texto2 = document.querySelector('#texto2')
let imagenCambiada2 = false;
boton2.onclick = function(){

if(imagenCambiada2==false){
    imagen2.src='https://cdnx.jumpseller.com/prueba-22/image/35590817/resize/640/640?1698683140'
    texto2.innerText = 'Camiseta de la Seleccion Argentina VISITANTE'
    imagenCambiada2=true
    
}else{
    imagen2.src='Argentina23.jpg'
    texto2.innerText = 'Camiseta de la Seleccion Argentina LOCAL'
    imagenCambiada2=false
}
}
//CAMISETA ARGENTINA
