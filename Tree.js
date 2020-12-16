class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.image = loadImage("Plucking Mangoes/tree.png");
        World.add(world,this.body);

    }
}