let osc, gra, w=640, h=360, start, stat = false, amp;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
  gra = new Graph();
  start = createButton('start');
  amp = createSlider();
  start.mousePressed(startPressed);
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
}

function startPressed()
{
  stat = !stat;
  if(stat == true)
  {
    start.html("stop");
    gra.graphs.push(new Points());
  }
  else
  {
   start.html("start");
   gra.graphs[gra.graphs.length-1].end = true;
   osc.d = -h/5;
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
