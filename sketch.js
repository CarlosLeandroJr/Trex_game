var trex, trex_running, trex_collided;
var ground, invisible_ground, ground_image;

function preload() {
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
trex_collided = loadImage ("trex_collided.png");
ground_image = loadImage ("ground2.png");

}

function setup() {
createCanvas(400,200);
ground = createSprite (200,180,400,20);
invisible_ground = createSprite (200,190,400,10);
invisible_ground.visible = false;
trex = createSprite(50,180,20,50);
ground.addAnimation("moving",ground_image);
trex.addAnimation("running",trex_running);
trex.scale = 0.5;
trex.x = 50;

}

function draw() {
background("white");
trex.collide(invisible_ground);
ground.velocityX = -3;
console.log (trex.y);

if (keyDown("space") && trex.y >= 145) {
trex.velocityY = -10;

}
if (ground.x <0) {
  ground.x = ground.width/2;

}
trex.velocityY = trex.velocityY + 0.8;

drawSprites();

}