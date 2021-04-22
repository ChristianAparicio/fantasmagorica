class FantasmaVerde extends Fantasma{
    constructor(x, y,r,g,b){
        super(x,y);
        this.dir = 0;
        this.r = r;
        this.g = g;
        this.b = b;
        // 0 es hacia arriba 1 es hacia abajo
    }
    mostrar(){
        fill(0,255,0);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER); 
        this.especial();       
    }

    especial(){
        this.rebotar();
    }

    rebotar(){
        if(this.y>400){
            this.dir = 0;
        }else if(this.y<0){
            this.dir = 1;
        }
    }
    mover(){
        if(this.dir === 0){
            this.y--;
        }else{
            this.y++;
        }
    }
}