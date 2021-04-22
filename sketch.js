let verde = new FantasmaVerde(100,100,0,255,0);
let rojo = new FantasmaRojo(200,100,255,0,0);
let amarillo = new FantasmaAmarillo(300,100,255,0,0);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  verde.mostrar();
  verde.mover();
  rojo.mostrar();
  rojo.mover();
  amarillo.mostrar();
  amarillo.mover();  
}
