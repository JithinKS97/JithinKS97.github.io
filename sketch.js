var osc, graphs = [], started = false, ampMove = false, graphNo=-1, vessel, liquid, outline, spring, mass, transLayer, damping, arrow; //ampMove to check if amplitude slider is in use, graphNo to keep track of the current graph

function setup()
{
  createCanvas(1280, 720);
  
  LoadImages();
  
  createP('');
  
  osc = new Oscillator(createVector(width/8,0), height/2);
  
  amp = createSlider(0, height/4, 0);
  amp.input(ampMoved);
  amp.changed(ampChanged);
  amp.style("width","25%")
  
  createP("Amplitude");
  
  dConst = createSlider(0,100,0);
  dConst.input(dMoved);

  createP("Damping Constant");
  
  button1 = createButton("Start");
  button2 = createButton("Stop");
  button3 = createButton("Clear");

  
  button1.mousePressed(start);
  button2.mousePressed(stop);
  button3.mousePressed(clr);
}

function LoadImages()
{
  liquid = loadImage("Images/liquid.png");
  vessel = loadImage("Images/vessel.png");
  outline = loadImage("Images/outline.png");
  spring = loadImage("Images/spring.png")
  mass = loadImage("Images/mass.png")
  transLayer = loadImage("Images/transLayer.png");
  damping = loadImage("Images/damping.png");
  arrow = loadImage("Images/arrow.png");
}

function ampMoved()
{
  osc.dis = -amp.value(); // to set the amplitude of the oscillator with the value present in the slider
  if(graphNo>=0)
  {
    if(graphs[graphNo].drawStat == true)  
      graphs[graphNo].drawStat = false;  // to stop the graph from drawing if slider is moved
  }
  ampMove = true;
  osc.vel = 0;
  if(started == true) //  to stop the oscillator
    started = false;
}

function ampChanged()
{
  ampMove = false;
}

function dMoved()
{
  osc.dis = -amp.value(); // to set the amplitude of the oscillator with the value present in the slider
  if(graphNo>=0)
  {
    if(graphs[graphNo].drawStat == true)  
      graphs[graphNo].drawStat = false;  // to stop the graph from drawing if slider is moved
  }
  
}

function start()
{
  if(started == false) // if oscillator is moving at present, pressing start shouln't affect its motion.
  {
    started = true;
    osc.dis = -amp.value();
    if(abs(osc.dis)>0)  // graph should be drawn only if the oscillator is moving
    {
      graphs.push(new Graph());
      graphNo++;
      graphs[graphNo].drawStat = true;
    }
  }
}

function clr()
{
  graphs.splice(0,graphs.length);
  graphNo = -1;
  started = false;
}


function stop()
{
  started = false;  // to stop the drawing of the graph
  if(graphNo>=0)
    graphs[graphNo].drawStat = false;
  osc.vel = 0;  // when the oscillator is stopped, its veloicty is set to zero so that when it starts the next time, starting velocity is zero
}

function draw()
{
  background(0);
  Coord();
  
  osc.b = map(dConst.value(),0,100,0,0.4);
  
  osc.applyForce();
  
  if(graphNo>=0)
    graphs[graphNo].add(osc.dis); // to add the the displacement value to the graph
  
  for(var i=0;i<graphs.length;i++)
    graphs[i].plot();
  
  if(ampMove == false && started == true)
    osc.update();
  osc.display();
  
  push()
  translate(width/2,height*17/20);
  imageMode(CENTER);
  image(damping,0,0,width/2.45,width/15);
  imageMode(CORNER);
  image(arrow,-width/5.75 + map(dConst.value(),0,100,0,width/3.1),width/30,width/50,width/50);
  pop();
}

function Oscillator(pivot, length)
{
  this.dis = 0, this.vel = 0, this.acc = 0;
  this.display = function()
  {
    rectMode(CENTER);
    image(vessel,0,0,width/5,height);
    image(liquid,0,0,width/5,height);
    image(mass,0,this.dis,width/5,height);
    image(spring, width/10-width/55, width/41,width/20, height/2-width/20+this.dis);
    image(outline,0,0,width/5,height);
    image(transLayer,0,0,width/5,height);
  }
  
  this.update = function()
  {
    this.vel += this.acc;
    this.dis += this.vel;
  }
  
  this.applyForce = function()
  {
    this.k=0.01, this.b;
    this.acc = -this.k * this.dis - this.vel*this.b;
  }
}

function Graph()
{
  colorMode(HSL);
  this.y = [], this.size = 0, this.drawStat = false, this.col = color(random(0, 360), random(50,100), random(50, 90));
  this.plot = function()
  {
    push();

    translate(width/5, height/2);
    
    stroke(255);
    strokeWeight(width/450);
  
    line(0,0,width*4/5,0);
    line(0,-height/2,0,height/2);
    
    stroke(this.col);
    strokeWeight(width/400);
    
    for(var i=1;i<this.size;i++)
    {
      var prevX, prevY;
      line(prevX, prevY, (width/425)*i,this.y[i]);   // the graph is scaled in x axis by multiplying by 3
      prevX = (width/425)*i;
      prevY = this.y[i];
    }
    pop();
  }
  
  this.add = function(m)
  {
    if(this.drawStat == true && this.size*(width/425)<width*4/5) //to prevent the graph from drawing after it passes canvas this.size*3<width*4/5
    {
      this.y[this.size] = m;
      this.size++;
    }
    else
    {
      this.drawStat = false;
      stop();
    }
  }
}

function Coord()
{
    push();
    translate(width/5, height/2);
    stroke(255);
    strokeWeight(width/500);
    line(0,0,width*4/5,0);
    line(0,-height/2,0,height/2);
    pop();
}