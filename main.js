var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//ctx.fillRect(0,0,50,50); --> test that works

var imagen = new Image();
imagen.src = 'https://bit.ly/2L7yH3f';

imagen.onload = function(){

    //para dibujar una imagen necesitamos:
    //x, y, ancho y alto además de la imagen:
    ctx.drawImage(imagen, 0,0,80,100);

}