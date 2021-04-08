var ninja;
var  obstacle, ninImg;






function setup()
{
  createCanvas(1200,800);

  
  


ninja = createSprite(370,700,60,60);
ninja.shapeColor = "black";

ground = createSprite(0,800,1200,10);
ground.visible = false;


}

  


function draw()
{

  
  
  
  
  if (keyDown("UP")) 
    {
      ninja.velocityY = -12;
    }
    ninja.velocityY = ninja.velocityY +0.8;
  
    ninja.collide(ground);
  
    if (keyDown("DOWN")) 
    {
      ninja.scale = 0.3;
  
     }
     else
     {
       ninja.scale = 0.5;
     }
    
     
  
     drawSprites();

    
}

  
function obstacles()
{
  if(World.frameCount%150 === 0)
  {
    obstacle = createSprite(1200,Math.round(random(400,650)), 50, 50);
    
    obstacle.velocityX = -20;
    r = Math.round(random(1,2));

    if (r === 1)
    {
      obstacle.shapeColor = "red";
    }

    else 
    {
      obstacle.shapeColor = "blue";
    }

    
  }
}


  

  


