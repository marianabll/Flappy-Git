var fundo;
var birdImg, bird;
var predio1, predio2, predio3;
var nuvem;

var obsGroup1, obsGroup2;

var estado_jogo = 1

var placar = 0


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

  bird = createSprite(width/2, 250);
  bird.addImage(birdImg)
  bird.scale = 0.15

  bird.debug = true;
  bird.setCollider("circle", 0, 0, 155)

  obsGroup1 = new Group()
  obsGroup2 = new Group()
}


function draw() {
  background(fundo);

  fill("red")
  textSize(24)
  text("Pontuação: " + placar, 60,80)

  if(estado_jogo == 1) {

    placar = placar + Math.round(frameRate()/60)

    criarObstaculos()
    criarObstaculosAereos()

    bird.velocityY += 0.8

    if(keyDown("space")) {
      bird.velocityY = -10
    }

    if(bird.y > height || obsGroup1.isTouching(bird) || obsGroup2.isTouching(bird)) {
      estado_jogo = 2
    }
  }

  if(estado_jogo == 2) {
    
    bird.velocityY = 0
    obsGroup1.setVelocityXEach(0)
    obsGroup2.setVelocityXEach(0)
  }

  drawSprites()
}


function criarObstaculos() {
  if(frameCount % 60 === 0) {
    obstaculo = createSprite(width, random(400,420))

    var dado = Math.round(random(1,3))

    switch (dado) {
      case 1 : obstaculo.addImage(predio1);
        break;
      case 2 : obstaculo.addImage(predio2);
        break;
      case 3 : obstaculo.addImage(predio3);
        break;
    }

    obstaculo.scale = 0.12
    obstaculo.velocityX = -(6 + placar/200)

    obsGroup1.add(obstaculo)
  }
}

function criarObstaculosAereos() {
  if(frameCount % 90 === 0) {
    obstaculo_aereo = createSprite(width, random(80,120))

    var dado = Math.round(random(1,2))

    switch (dado) {
      case 1 : obstaculo_aereo.addImage(balao);
        break;
      case 2 : obstaculo_aereo.addImage(balao);
        break;
    }

    obstaculo_aereo.scale = 0.2
    obstaculo_aereo.velocityX = random(-6,-4)

    obstaculo_aereo.debug = true
    obstaculo_aereo.setCollider("rectangle", 0, 0, 100, 850)

    obsGroup2.add(obstaculo_aereo)
  }
}
