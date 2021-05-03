//Create variables here
var dogimage,doghappy,dog,foods,foodstock,database
function preload()
{
	dogimage=loadImage("images/dogImg.png")
  doghappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,500,50,50)
  dog.addImage(dogimage);
  dog.scale=0.5
  database=firebase.database()
  foodstock=database.ref('Food')
  foodstock.on("value",readstock)
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
if (keyWentDown(UP_ARROW)){
  dog.addImage(doghappy)
  rightstock(foods)
}
if (keyWentUp(UP_ARROW)){
  dog.addImage(dogimage)
}
textSize(30)
text("Food Remaining:"+foods,300,250)
text("Press UP Arrow to Feed The Dog",250,150)
}

function readstock(data){
  foods=data.val()
}
function rightstock(x){
  if (x<=0){
    x=0
  }else {
    x=x-1
  }
}