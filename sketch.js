var f1,m1;


function setup() {
  createCanvas(400,400);
  f1 = createSprite(200, 200, 50, 80);
  f1.shapeColor="green";
  m1 = createSprite(400, 200, 80, 50);
  m1.shapeColor="green";
}

function draw() {
  background(0);  
m1.x= World.mouseX;
m1.y= World.mouseY;

if (m1.x-f1.x<m1.width/2+f1.width/2 &&
  f1.x-m1.x<m1.width/2+f1.width/2 && 
  m1.y-f1.y<m1.height/2+f1.height/2 &&
  f1.y-m1.y<m1.height/2+f1.height/2 ) {

  f1.shapeColor="red";
  m1.shapeColor="red";

}
else{
 f1.shapeColor="green";
 m1.shapeColor="green";

}
  drawSprites();
}