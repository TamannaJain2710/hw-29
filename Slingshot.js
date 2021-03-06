class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 4,
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        push();
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(68,224,208);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
}