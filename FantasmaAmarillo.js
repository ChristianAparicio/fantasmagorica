class FantasmaAmarillo extends Fantasma{
    constructor(x,y,r,g,b){
        super(x,y);
        this.dir = 1;
        this.r = r;
        this.g = g;
        this.b = b;
        // 0 es hacia arriba 1 es hacia abajo
    }
    mostrar(){
        fill(255,255,0);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER); 
        this.especial();       
    }

    especial(){
        this.saltar();
    }

    saltar(){
        if(this.y>400){
            this.y = 0; 
        }
    }
    mover(){
        if(this.dir === 1){            
            this.y++;
        }
    }
}