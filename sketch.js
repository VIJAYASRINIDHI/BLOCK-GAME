var block1, block2, block3, block4;
var ball;
var music;

function preload(){
music=loadSound("p5.sound.js");
}

function setup(){
    
    createCanvas(800,600);

    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=3;

   
    block1=createSprite(100,580,200,30);
    block1.shapeColor="red";

    block2=createSprite(300,580,200,30);
    block2.shapeColor="green";

    block3=createSprite(500,580,200,30);
    block3.shapeColor="blue";

    block4=createSprite(700,580,200,30);
    block4.shapeColor="pink";

}

function draw() {
    background(rgb(10,10,10));
   
    ball.x=World.mouseX;
    ball.y=World.mouseY;
    if(ball.x-block1.x < ball.height/2+block1.height/2 &&
     block1.x-ball.x<ball.height/2+block1.height/2){
      block1.shapeColor="red";
      ball.shapeColor="red";
     }else{
       block1.shapeColor="red";
       ball.shapeColor="red";
     }
     
     if(ball.x-block2.x < ball.height/2+block2.height/2 &&
      block2.x-ball.x<ball.height/2+block2.height/2){
       block2.shapeColor="green";
       ball.shapeColor="green";
      }else{
        block2.shapeColor="green";
        ball.shapeColor="green";
      }
      if(ball.x-block3.x < ball.height/2+block3.height/2 &&
        block3.x-ball.x<ball.height/2+block3.height/2){
         block3.shapeColor="blue";
         ball.shapeColor="blue";
        }else{
          block3.shapeColor="blue";
          ball.shapeColor="blue";
        }
        if(ball.x-block4.x < ball.height/2+block4.height/2 &&
          block4.x-ball.x<ball.height/2+block4.height/2){
           block4.shapeColor="pink";
           ball.shapeColor="pink";
          }else{
            block4.shapeColor="pink";
            ball.shapeColor="pink";
          }

    if(ball.x<0){
      music.stop()
      ball.velocityX=3
    }else if(ball.x>800){
      music.stop()
      ball.velocityX=-3
    }
   
  if(isTouching(ball,block4)){
    music.play()
    ball.shapeColor="yellow";
    bounceOff(ball,block4)
    
  }

  else if(isTouching(ball,block3)){
    music.stop()
    ball.shapeColor="blue";
    bounceOff(ball,block3)
   
  }
    
  else if(isTouching(ball,block2)){
    music.stop()
    ball.shapeColor="green";
    bounceOff(ball,block2)
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  else if(isTouching(ball,block1)){
    music.stop()
    ball.shapeColor="red";
    bounceOff(ball,block1)
  }

  if (ball.y<0){
    music.stop()
    ball.velocityY=3
  }

    drawSprites()
}