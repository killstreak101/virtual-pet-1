var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg;
var food, dogfoodImg;


function preload()
{
  dogImg = loadImage("Dog.png");
  dogHappyImg = loadImage("happydog.png");
  dogfoodImg = loadImage("dogfood1.png");
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  emo = createSprite(200,200,1,1);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);
  
  food = createSprite(140,435,10,10);
  food.addImage(dogfoodImg);
  food.scale = 0.025;

  food1 = createSprite(210,280,10,10);
  food1.addImage(dogfoodImg);
  food1.scale = 0.2;
  food1.visible = false;


  for (var i = 5; i < 500; i=i+10) 
{

var dot = createSprite(i, 5, 3, 3);
dot.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(i, 495, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(495,i, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(5,i, 3, 3);
dot1.shapeColor = "blue";

}
}


function draw() {  
  background("lightgreen");

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
    food1.visible = true;

   
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    food1.visible = false;
  }
}

if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 50;

}



  drawSprites();
  textSize(17);
  fill("black");
  text("I am your Puppy sniper feed me ",100,150);
  fill("black");
  text(" Press up arrow key to feed your pet sniper",50,50);
  fill("black");
  text("food Remaining  "+foodS,170,440);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

