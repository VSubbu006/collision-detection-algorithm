var fixedRect,movingRect;


function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(600,300,100,50);
  movingRect = createSprite(700,150,40,100);
  
  fixedRect.shapeColor = "orange";
  movingRect.shapeColor = "orange";


  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background(0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

}else{
  fixedRect.shapeColor = "orange";
  movingRect.shapeColor = "orange";

}
  drawSprites();
}