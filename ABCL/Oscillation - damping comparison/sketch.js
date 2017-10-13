let osc, gra, w=640, h=360, start, clear, stat = false, amp;

function setup()
{
  createCanvas(w, h);
  osc = new Oscillator();
  gra = new Graph();
  start = createButton('start');

  amp = createSlider(0,h/5,0);
  amp.input(ampMoved);

  damp = createSlider(0,100,0);
  damp.input(dampMoved);

  start.mousePressed(startPressed);
  clear = createButton('clear');
  clear.mousePressed(clearPressed);
}

function ampMoved()
{
  stat = false;
  if(gra.graphs.length>=1) //If amplitude is changed inbetween, oscillator should stop
  {
    gra.graphs[gra.graphs.length-1].end = true
    osc.v=0;
  }
}

function dampMoved()
{
  stat = false;
  if(gra.graphs.length>=1) //If amplitude is changed inbetween oscillator should stop
  {
    gra.graphs[gra.graphs.length-1].end = true
    osc.v=0;
  }
}

function startPressed()
{
  stat = !stat;
  if(stat == true && abs(osc.d)>0) //abs(osc.d)>0 to ensure that graph is plotted only once the oscillator starts moving
  {
    start.html("stop");
    gra.graphs.push(new Points()); //New graph points set is created when start button is pressed
  }
  else if(stat == false)
  {
    start.html("start");
    gra.graphs[gra.graphs.length-1].end = true; ///To stop the the drawing of the graph when stop button is pressed
    osc.d = amp.value();
    osc.v=0;
  }
}

function clearPressed()
{
  for(let i=gra.graphs.length;i>=1;i--) //Erases all the graphs
    gra.graphs.pop();
  stat = false;
  osc.v = 0;
}

function draw()
{
  colorMode(HSL);
  background(255);
  drawCoord();
  osc.display();
  gra.plot(osc.d);
  line()
  if(stat == true)
  {
    osc.update();
  }
  else{
    osc.d = -amp.value(); //Applying amplitude to the oscillator
    osc.damp = map(damp.value(), 0, 100, 0, 0.2); //Applying dampening to the oscillator
  }

  if(stat == false)
    start.html('start');

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
