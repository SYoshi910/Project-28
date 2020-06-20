class Launch {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length:20
        }
        this.launch = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.launch);
    }
    fly(){
        this.launch.bodyA = null;
    }
    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}