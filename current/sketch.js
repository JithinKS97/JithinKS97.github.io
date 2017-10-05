let osc, gra, w=640, h=360, start, stat = false, amp;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
  gra = new Graph();
  start = createButton('start');
  amp = createSlider(0,h/5,0);
  amp.input(ampMoved);
  start.mousePressed(startPressed);
}

function ampMoved()
{
  stat = false;
  if(gra.graphs.length>=1) //If amplitude is changed inbetween oscillator should stop
  {
    gra.graphs[gra.graphs.length-1].end = true
    osc.v=0;
  }
}

function draw()
{
  colorMode(HSL);
  background(0);
  drawCoord();
  osc.display();
  gra.plot(osc.d);
  if(stat == true)
  {
    osc.update();
  }
  else{
    osc.d = -amp.value();
  }
  print(stat);
}

function startPressed()
{
  stat = !stat;
  if(stat == true && abs(osc.d)>0) //abs(osc.d)>0 to ensure that graph is plotted only once mover starts moving
  {
    start.html("stop");
    gra.graphs.push(new Points());
  }
  else if(stat == false)
  {
   start.html("start");
   gra.graphs[gra.graphs.length-1].end = true;
   osc.d = amp.value();
   osc.v=0;
  }
}

function drawCoord()
{
  push();
  translate(w/5, h/2);
  strokeWeight(w/250);
  stroke(255);
  line(0, 0 , w*4/5, 0);
  line(0,-h/2,0,h/2);
  pop();
}
