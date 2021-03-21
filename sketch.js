var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
fixedRect1= createSprite(200,100,50,50);
fixedRect1.shapeColor="green";

  movingRect= createSprite(400, 200, 80, 30);
movingRect.shapeColor="green";
movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    fixedRect1.shapeColor="green";
  }
  drawSprites();
}
