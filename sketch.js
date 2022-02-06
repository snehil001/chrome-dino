let unicorn;
let train;
let tree;
let back;
let sceneImage;
let unicornImage;
let trainImage;
let treeImage;
let bgImage;


function preload(){
  sceneImage = loadImage('scene.jpg');
  unicornImage = loadImage('unicorn.png');
  trainImage = loadImage('train.png');
  treeImage = loadImage('tree.png');
  bgImage = loadImage('background.jpg');
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
  train = new Train();
  tree = new Tree();
  bg = new BackGround();
}

function draw() { 
	background(sceneImage);

	if(bg.x <= width){
		bg.show();
		bg.move();
	}
	else if(bg.x > width){
		bg = new BackGround();
	}
	
	if(tree.x >= -tree.size){
		tree.show();
		tree.move();
	}
	else if(tree.x < -tree.size) {
		tree = new Tree();
	}

	if(train.x >= -train.size){
		train.show();
		train.move();
	}
	else if(train.x < -train.size) {
		train = new Train();
	}

	unicorn.show();
	unicorn.move();
}

function keyPressed(){
  if(key == ' '){
    unicorn.jump();
  }
}