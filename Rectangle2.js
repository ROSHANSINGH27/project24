class Rectangle2{
    constructor (x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,20,options)
            this.width=130
            this.height=20
            World.add(world,this.body)
    
    
    }
    
    display(){
    
      var pos=this.body.position
     rectMode(CENTER)
     fill("blue")
     rect(pos.x,pos.y,this.width,this.height)
    }
    }