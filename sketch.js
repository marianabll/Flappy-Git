var fundo;
var birdImg, bird;
var predio1, predio2, predio3;
var nuvem


function preload() {
  fundo = loadImage("assets/bg.png");
  birdImg = loadImage("assets/bird.png");
  predio1 = loadImage("assets/obsBottom1.png");
  predio2 = loadImage("assets/obsBottom2.png");
  predio3 = loadImage("assets/obsBottom3.png");
  balao = loadImage("assets/obsTop1.png")
  nuvem = loadImage("assets/nuvem.png");

}


function setup() {
  createCanvas(1000,500)

  bird = createSprite(300, 250);
  bird.addImage(birdImg)
  bird.scale = 0.2

}

function draw() {
  background(fundo);

  bird.velocityY += 0.8

  if(keyDown("space")) {
    bird.velocityY = -10
  }

  criarObstaculos()
  criarObstaculosAereos()

  drawSprites()
}


function criarObstaculos() {
  if(frameCount % 80 === 0) {
    obstaculo = createSprite(width, 350)

    var dado = Math.round(random(1,3))

    switch (dado) {
      case 1 : obstaculo.addImage(predio1);
        break;
      case 2 : obstaculo.addImage(predio2);
        break;
      case 3 : obstaculo.addImage(predio3);
        break;
    }

    obstaculo.scale = 0.2
    obstaculo.velocityX = -6
  }
}

function criarObstaculosAereos() {
  if(frameCount % 90 === 0) {
    obstaculo_aereo = createSprite(width, random(80,180))

    var dado = Math.round(random(1,2))

    switch (dado) {
      case 1 : obstaculo_aereo.addImage(nuvem);
        break;
      case 2 : obstaculo_aereo.addImage(balao);
        break;
    }

    obstaculo_aereo.scale = 0.2
    obstaculo_aereo.velocityX = -4
  }
}