class boxground{

	constructor(x,y,w,h){
		var options={
			isStatic:true			
    }
      
		this.x=x;
		this.y=y;
		this.width=w;
		this.height=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
	}
	display(){
			var groundPos=this.body.position;		

			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0);
			rect(this.x,this.y,this.width, this.height);
	}
}