


function setup() 
{
  createCanvas(800,400);

  Fixed = createSprite(700, 200, 50, 50);
  Fixed.shapeColor = "blue";

  Moving = createSprite(200, 200, 70, 50);
  Moving.shapeColor = "red"; 
}

function draw() 
{
  background(255,255,255);  
  
  Moving.x = World.mouseX;
  Moving.y = World.mouseY;
  
  if (Fixed.x - Moving.x < Fixed.width/2 + Moving.width/2 &&
      Moving.x - Fixed.x < Fixed.width/2 + Moving.width/2 &&
      Fixed.y - Moving.y < Fixed.height/2 + Moving.height/2 &&
      Moving.y - Fixed.y < Fixed.height/2 + Moving.height/2 )
      {
        Fixed.shapeColor = "yellow";
        Moving.shapeColor = "yellow";
      }
  else{
        Fixed.shapeColor = "blue";
        Moving.shapeColor = "red";
  }


  drawSprites();
}