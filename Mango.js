class Mango {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.image = loadImage("Plucking Mangoes/mango.png");
        World.add(world,this.body);


    }
}