var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyIMG, fairyVoice;
var fairyLeft, fairyRight; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyIMG = loadImage("images/fairyImage1.png"); 
	fairyVoice = loadSound("sound/joyMusic.mp3")
	fairyLeft = loadAnimation("fairyImage1.png")
	fairRight = loadAnimation("fairyImage2.png")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy
	fairy = crateSprite(200,200);
	fairy.addImage(fairyImg);
	fairy.scale = 0.5;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y >470){
	  Matter.Bodoy.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX = -1;
		fairy.changeAnimation(fairyLeft);
	}

	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX = 1;
		fairy.changeAnimation(fairyRight)
	}
}
