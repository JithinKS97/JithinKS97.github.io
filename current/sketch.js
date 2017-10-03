let osc;
let w = 640;
let h = 360;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
}

function draw()
{
  background(0);
  osc.display();
  osc.update();
}
