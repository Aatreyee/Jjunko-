const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var k=0;
var bridge;
var logs=[];
var bridgeScene;
var bridgeGirl,bridgeGirlAni,bridgeGirlSprite;

var world,engine;
function preload()
{
	bridgeGirlAni = loadAnimation("sprite000.png","sprite001.png","sprite002.png","sprite003.png","sprite004.png","sprite005.png");
	bridgeSceneImg = loadImage("bridgeScene.png");
}

function setup() {
	
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;
	 
	for(var y=100;y<height-100;y=y+50){
		logs.push(new Bridge(width/2,y,100,20))
	}

	bridgeGirl=Bodies.rectangle(100,height-200,100,140);
	World.add(world,bridgeGirl);

	bridgeScene = createSprite(0,width);
	bridgeScene.addImage(bridgeSceneImg);
	
	bridgeGirlSprite = createSprite(100,height-200);
	bridgeGirlSprite.addAnimation("girl",bridgeGirlAni);

	Engine.run(engine);
  
}


function draw() {
  
  background(bridgeSceneImg);

  for(var l=0;l<logs.length;l=l+1){
	  logs[l].display();
  }

  if(frameCount%100===0){
	  Matter.Body.setStatic(logs[k].body,false);
	  k=k+1;
  }
  

  bridgeGirlSprite.x=bridgeGirl.position.x;
  bridgeGirlSprite.y=bridgeGirl.position.y;
  
  drawSprites();
 
}



