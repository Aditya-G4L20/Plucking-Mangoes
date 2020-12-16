class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.image = loadImage("Plucking Mangoes/stone.png");
        World.add(world, this.body);
    }
}