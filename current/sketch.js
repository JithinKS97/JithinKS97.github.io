let osc, gra, w=640, h=360, start, stat = false;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
  gra = new Graph();
  start = createButton('start');
  start.mousePressed(startPressed);
}

function draw()
{
  colorMode(HSL);
  background(0);

  push();
  translate(w/5, h/2);
  strokeWeight(w/250);
  stroke(255);
  line(0, 0 , w*4/5, 0);
  line(0,-h/2,0,h/2);
  pop();

  osc.display();
  if(stat == true)
  {
    gra.plot(osc.d);
    osc.update();
  }
}

function startPressed()
{
  stat = !stat;
  if(stat == true)
    start.html("stop");
  else
   start.html("start");
}
