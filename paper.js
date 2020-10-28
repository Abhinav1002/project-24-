class paper
{
  constructor(x,y,r)
  {
     var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2

      }
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.x=x;
this.y=y;
this.r=r


World.add(world, this.body);
}
display()
{

 var paperos=this.body.position;

  push()
  translate(paperos.x,paperos.y);
  rectMode(CENTRE)
  strokeWeight(3);
  fill(255,0,255);
  ellips(0,0,this.t,this.r);
  pop()
}
};