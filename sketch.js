var  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var count=0;
var gameState = "start";

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {

  background("black");

  textSize(35);
  text("Score : "+score,20,30);

  textSize(30);
  text("500",15,550);
  text("500",95,550);
  text("500",175,550);
  text("500",255,550);
  text("/100",255,580);

  text("100",335,550);
  text("100",415,550);
  text("100",495,550);

  text("200",575,550);
  text("200",655,550);
  text("200",735,550);

  //text("0",600,760);

  Engine.update(engine);
  ground.display();

  if(gameState==="end"){
    textSize(100);
    text("Game Over",150,250);
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        //count++;
        if(count>=5)gameState="end";
      
      }

      else if(particle.body.position.x<600&&particle.body.position.x>301){
        score=score+100;
        particle=null;
        //count++;
        if(count>=5)gameState="end";
      
      }

      else if(particle.body.position.x<900&&particle.body.position.x>601){
      score=score+200;
      particle=null;
      //count++;
      if(count>=5)gameState="end";
      }

    }
  }

  for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
  }

}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}