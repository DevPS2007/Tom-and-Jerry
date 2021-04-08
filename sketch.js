var garden,garedenimg;
var tom,tomani,tomimg;
var jerry,jerryimg,jerryimg1;
function preload() {
    gardenimg=loadImage("garden.png");
    tomani=loadAnimation("cat2.png","cat3.png");
    jerryimg=loadAnimation("mouse2.png","mouse3.png");
    tomimg=loadAnimation("cat1.png");
    jerryimg1=loadAnimation("mouse1.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400,10,10);
  garden.scale=1.2;
    garden.addImage(gardenimg);
    
    //create tom and jerry sprites here
    tom=createSprite(750,600,10,10);
    tom.addAnimation("aaaaa",tomani);
    tom.scale=0.1;
    tom.velocityX=-3;
    tom.debug=true;
    tom.setCollider("circle",0,0,400);
    jerry=createSprite(150,650,10,10);
    //jerry.addAnimation("running",jerryimg1);
    jerry.addAnimation("aaaaaaaa",jerryimg);
   // jerry.addAnimation("running",jerryimg1);
    jerry.scale=0.1;
    jerry.debug=true;
    jerry.setCollider("circle",0,0,300);
    
}

function draw() {
 background("red");
 //if(tom.isTouching(jerry)){
    //tom.addAnimation("running",tomani);
   // jerry.addAnimation("running",jerryimg1);
 //}
 if(tom.isTouching(jerry)){
    tom.addAnimation("running",tomani);
    jerry.addAnimation("running",jerryimg1);
    tom.velocityX=0;
}
 drawSprites();
}