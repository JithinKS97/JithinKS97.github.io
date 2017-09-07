var lantern = [],
  mSize, bg, crowd, timer = 0,
  dyuthi, logo, gec, t = 0,
  wind, tap = 0,bool=true,tap=0;

function setup() {
  var x = window.innerWidth;
  var y = window.innerHeight;
  if (y < 500)
    y = 500;
  if (x < 800) {
    var myCanvas = createCanvas(x, y + 1);
    mSize = width / 9;
    bool=false;
  } else {
    var myCanvas = createCanvas(x - 15, y);
    mSize = width / 24;
  }
  myCanvas.parent('can');
  for (var i = 0; i < 80; i++)
    lantern.push(new Lantern());
  for (var i = 0; i < lantern.length; i++) {

    lantern[i].img = loadImage("data/" + int(random(4)) + ".png");
    if (i > lantern.length / 2)
      lantern[i].w = (i + 1) * mSize / lantern.length;
    else
      lantern[i].w = (lantern.length / 2 + 1) * mSize / lantern.length;
    lantern[i].vel.y = -lantern[i].w / 100;
  }
  bg = loadImage("data/bg.png");
  dyuthi = loadImage("data/dyuthi.png");
  logo = loadImage("data/logo.png");
}

function draw() {
  image(bg, 0, 0, width, height);

  var thewind = createVector(wind, 0);
  var randWind = createVector(map(noise(t), 0, 1, -height / 8000, height / 8000), 0);
  var x = window.innerWidth;
  for (var i = 0; i < lantern.length; i++) {
    lantern[i].display();
    lantern[i].upperbound();
    lantern[i].update();
  }

  for (var i = 0; i < lantern.length; i++) {
    if (i % 3 == 0)
      lantern[i].applyForce(createVector(randWind.x, 0));
    else
      lantern[i].applyForce(createVector(-randWind.x, 0));

    wind = (mouseX - width / 2) / 50000;
    lantern[i].applyForce(thewind);
  }


  var x = window.innerWidth;
  if (x <= 1010) {
    var ratio = x / 1000;
    if (x < 400)
      ratio += 0.25;
    image(dyuthi, width / 2 - dyuthi.width * ratio / 2, height / 2 - dyuthi.height * ratio / 2, dyuthi.width * ratio, dyuthi.height * ratio);
  } else {
    image(dyuthi, width / 2 - dyuthi.width / 2, height / 2 - dyuthi.height / 2, dyuthi.width, dyuthi.height);
  }
  t += 0.01;

}

function Lantern() {
  this.pos = createVector(random(width), random(8 * height / 10, height * 11 / 10));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.w = random(0, 100);
  this.v = 0;
  this.img;
  this.death = false;
  this.trigger = 0;

  this.display = function() {
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, this.w, this.w);
    imageMode(CORNER);
  }

  this.upperbound = function() {
    if (this.pos.y < -this.w)
      this.pos.y = height + this.w;
    if (this.pos.x > width + this.w / 2) {
      this.pos.x = -this.w / 2
      this.vel.x = width / 200;
    }
    if (this.pos.x < -this.w / 2) {
      this.pos.x = width + this.w / 2;
      this.vel.x = -width / 200;
    }
  }

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    if (this.vel.x > 3)
      this.vel.x = 3;
    if (this.vel.x < -3)
      this.vel.x = -3;
    this.acc.mult(0);
    this.vel.x *= 0.9;
    if (this.death == true) {
      var dx = this.w / 4;
      this.w -= dx;
    }
  }
  this.applyForce = function(x) {
    this.acc.add(x);
  }

  this.isInside = function()
  {
    if (bool==true)  //this should run if its desktop
    {
      if (mouseX > this.pos.x - this.w / 2 && mouseX < this.pos.x + this.w / 2 && mouseY > this.pos.y - this.w / 2 && mouseY < this.pos.y + this.w / 2)
        return true;
      else
        return false;
    }
    else if (bool==false)  //this should run if its mobile
    {
        for (var i = 0; i < touches.length; i++)
        {
          if (touches[i].x > this.pos.x - this.w / 2 && touches[i].x < this.pos.x + this.w / 2 && touches[i].y > this.pos.y - this.w / 2 && touches[i] < this.pos.y + this.w / 2)
            return true;
          else
            return false;
        }
    }
  }

}


function mouseClicked() {
  for (var i = 0; i < lantern.length; i++) {
    if (lantern[i].isInside() == true) {
      lantern[i].death = true;
      if(bool==true){
        tap += 1;
        console.log("Click");
        if (tap == 10)
        setTimeout(function() {
          var date2=new Date();
          alert("Time taken: "+(date2.getTime()-date1.getTime())/1000 +' seconds');
        }, 1000);
      }
    }
  }
}

function touchStarted()
{
  for (var i = 0; i < lantern.length; i++)
    if (lantern[i].isInside() == true)
      lantern[i].trigger = 1;
    else
      lantern[i].trigger = 0;
}

function touchEnded()
{
  for (var i = 0; i < lantern.length; i++)
    if (lantern[i].trigger == 1){
      lantern[i].death = true;
      if(bool==false){
        tap += 1;
        console.log("Mob");
        console.log("Mob");
        if (tap == 10)
          setTimeout(function() {
            var date2=new Date();
            alert("Time taken: "+(date2.getTime()-date1.getTime())/1000 +' seconds');
          }, 1000);
    }
  }
}
