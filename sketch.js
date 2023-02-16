
var mar, marImg, barco, barciImg;

function preload(){
marImg = loadImage("sea.png");
barcoImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png")
}

function setup(){
  createCanvas(400,400);
  
  mar = createsprite(400,200);
  mar.addImage(marImg);
  mar.scale = 0.3;

  barco = creatSprite(200,250)
  barco.addAnimation("barco", barcoImg);
  barco.scale = 0.2
}

function draw() {
  background("blue");
    drawSprites();

 if (mar.x < -200) {
    mar.x = 400;


 }
}
