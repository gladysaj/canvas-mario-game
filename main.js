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

/*Syntaxis constructor

class David{
  constructor(variable){
      this.variable = variable;
  }
} */

/*Atributte

// sin constructor
class Bliss{
  variable = 'dato';
}

// con constructor
class Bliss{
 constructor(dato){
     this.variable = data;
 }
} */

/* Method
class Bliss{
     draw(){
         //lo que sea que tu funcion haga
     }
} */


class Mario{
  constructor(apellido){
      this.apellido = apellido
      this.imagen1 = new Image ()
      this.imagen1.src = "https://bit.ly/2L7yH3f"
      this.imagen2 = new Image ()
      this.imagen2.src = "https://bit.ly/2L3ikoe"
      this.imagen = this.imagen1
  }
  
  draw(){
    if(frames % 10  === 0){
      this.imagen = this.imagen == this.imagen1 ? this.imagen2 : this.imagen1;
    }
      ctx.drawImage(this.imagen, 0,0,80,100)
  }
}

var marioPerez = new Mario("Perez");

//Ciclo cuadro por cuadro

var frames = 0;
setInterval(function(){
    //sumamos cada cuadro que dibujamos:
    frames++;
    //borramos el canvas
    ctx.clearRect(0,0,256,256);
    //dibujamos a mario
    marioPerez.draw()
},1000/60 );

/*Instancia
var marioPerez = new Mario("Perez");
var marioLopez = new Mario("Lopez");
var marioZavala = new Mario("Zavala");
var marioBlisS = new Mario("BlisS"); */

//el metodo draw se heredo de la clase Mario
//marioPerez.draw(); 
