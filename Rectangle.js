class Rectangle{
constructor (x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,20,20,options)
        this.width=20
        this.height=100
        World.add(world,this.body)


}

display(){

  var pos=this.body.position
 rectMode(CENTER)
 fill("blue")
 rect(pos.x,pos.y,this.width,this.height)
}
}