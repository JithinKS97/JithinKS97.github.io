let osc, gra, w=640, h=360;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
  gra = new Graph();
}

function draw()
{
  colorMode(HSL);
  background(255);
  osc.display();
  osc.update();
  gra.plot(osc.d)
}
