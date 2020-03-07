
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
      this.x = 10;
      this.y = 295;
      this.width = 30;
      this.height = 40;
  }
  
  collision(item){
    return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
  }

  draw(){
    if(this.y < 295) this.y += 4;
    if(frames % 10 === 0){
         this.imagen = this.imagen == this.imagen1 ? this.imagen2 : this.imagen1;
    }
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
}
}

  /*draw(){
    if(frames % 10  === 0){
      this.imagen = this.imagen == this.imagen1 ? this.imagen2 : this.imagen1;
    }
      ctx.drawImage(this.imagen, 0,0,80,100)
  }
} */

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


//Fourth iteration
class Background{
  constructor(){
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.imagen = new Image()
      this.imagen.src = 'https://bit.ly/2TQwFIY'
  }
  
  draw(){
     // restamos en x para moverlo
     this.x--;
     // en caso de alcanzar el final de la imagen reseteamos x
     if(this.x < -canvas.width) this.x = 0;
     ctx.drawImage(this.imagen,this.x,this.y,this.width,this.height); 
   // dibujamos una segunda imagen al final de la primera
    ctx.drawImage(this.imagen,this.x + this.width,this.y,this.width,this.height); 
  }
}

var fondo = new Background();
var marioPerez = new Mario("Perez");

var frames = 0;
setInterval(function(){
    //sumamos cada cuadro que dibujamos:
    frames++;
    //borramos el canvas
    ctx.clearRect(0,0,256,256);
    //dibujamos a mario
    fondo.draw()
    marioPerez.draw()
},1000/60 );

// Event listeners

addEventListener('keydown', function(event){
  if(event.keyCode === 32){
      marioPerez.y -= 80;
  }
})

//Generate enemies
//clases

class Enemy{
  constructor(){
  //de principio el enemigo aparece fuera del canvas
      this.x = canvas.width;
      //el y del enemigo es el mismo de mario
      this.y = 295;
      this.width = 20;
      this.height = 40;
      this.image = new Image();
      this.image.src = "https://bit.ly/2BAISL4";
  }

  draw(){
      //el y del enemigo es el mismo de mario
      if(frames % 10) this.x -= 5;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

/*function generateEnemies() {
  if(frames % 100 == 0 || frames % 60 == 0 || frames % 170 == 0){
  //aquí crearemos a los enemigos
  }
} */

var enemies = [];

function generateEnemies() {
    if(frames % 100 == 0 || frames % 60 == 0 || frames % 170 == 0){
        // creamos una instancia de Enemy y la agregamos aun arreglo
        var enemy = new Enemy
        enemies.push(enemy);
    }
}

function drawingEnemies(){
  enemies.forEach(function(enemy){
      enemy.draw()
      // Checar colisiones
      if(marioPerez.collision(enemy)){
        
        // Ejecutaremos el gameOver
        console.log("GameOver") 
    }
})
}
 

setInterval(function(){
  // sumamos cada cuadro que dibujamos
  frames++
  // borramos el canvas
  ctx.clearRect(0,0,256,256);
  // Dibujamos a mario y el background
  fondo.draw();
  marioPerez.draw();
  // Generamos enemigos
  generateEnemies();
  drawingEnemies();
}, 1000/60)

//Collitions
