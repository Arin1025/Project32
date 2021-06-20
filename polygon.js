class Polygon{
    constructor(bodyA, pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.polygon=Matter.Constraint.create(option);
        World.add(world, this.polygon);
    }
        display(){
        if(this.polygon.bodyB){
        strokeWeight(4);
        stroke(48,22,8);
        line(this.bodyB.position.x - 20, this.bodyB.position.y, this.pointB.x, this.pointB.y);
        line(this.bodyB.position.x - 20, this.bodyB.position.y, this.pointB.x + 50, this.pointB.y);
        }
        }
    
        fly(){
        this.polygon.bodyA=null; 
        }
    }