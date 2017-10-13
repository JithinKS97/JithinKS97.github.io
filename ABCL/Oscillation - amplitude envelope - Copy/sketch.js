let osc, gra, w=640, h=360, start, amp, stat = 0;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
  gra = new Graph();

  start = createButton('start');
  start.mousePressed(startPressed);

  amp = createSlider(0,h/5,0);
  amp.input(ampMoved);


  damp = createSlider(0,100,0);
  damp.input(dampMoved);

  clear = createButton('clear');
  clear.mousePressed(clearPressed);      
}

function ampMoved()
{
  start.html('start');
  stat = 0;
  osc.v=0;
  for(let i=gra.graph.y.length;i>=0;i--)
    gra.graph.y.pop();
}

function dampMoved()
{
  start.html('start');
  stat = 0;
  osc.v=0;
  for(let i=gra.graph.y.length;i>=0;i--)
    gra.graph.y.pop();
}

function startPressed()
{
  if(stat == 0)
  {
    start.html('pause');
    stat = 1;
  }
  else if(stat == 1)
  {
    start.html('resume')
    stat = 2;
  }
  else if(stat == 2)
  {
    start.html('pause');
    gra.pause = false;
    stat = 1;
  }
}

function clearPressed()
{
  for(let i=gra.graph.y.length;i>=0;i--)
    gra.graph.y.pop();
  stat = 0;
  start.html('start');
  osc.v = 0;
  gra.pause = false;
}

function draw()
{
  colorMode(HSL);
  background(255);
  drawCoord();
  osc.display();
  gra.preview();
  
  if(stat == 0)
  {
    osc.initAmp = osc.d;
    osc.damp = map(damp.value(), 0, 100, 0, 0.2); 
    osc.d = -amp.value();
  }
  if(stat == 1)
  {
    gra.plot(osc.d)
    osc.update();
  }
  if(stat == 2)
  {
    gra.pause = true;
    gra.plot(osc.d);
  }

}

function drawCoord()
{
  push();
  translate(w/5, h/2);
  strokeWeight(w/250);
  stroke(30);
  line(0, 0 , w*4/5, 0);
  line(0,-h/2,0,h/2);
  pop();
}