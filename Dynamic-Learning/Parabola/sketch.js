let unit = 50;

var a = 1, aMin = -10, aMax = 10, aStep = 0.1;
var b = 0, bMin = -10, bMax = 10, bStep = 0.1;
var c = 0, cMin = -10, cMax = 10, cStep = 0.1;

var gui;

function setup()
{
  createCanvas(1000, 800);

  gui = createGui(' ');
  gui.addGlobals('a', 'b', 'c');

}

function draw()
{
  background(0);
  push();
  translate(width/2, height/2);
  grid();
  coOrd();
  scale(unit);
  drawParabola(a, b, c);
  pop();
}

function drawParabola(a, b, c)
{
  noFill();
  let prevX, prevY;
  for(let x = -width/2; x<width/2; x+=1*(unit/4)/unit)
  {
    stroke(220,50,80);
    strokeWeight(4/unit);
    line(prevX, -prevY,x,-(a*x*x+b*x+c));
    prevX = x;
    prevY = a*x*x+b*x+c;
  }
}

function coOrd()
{
  stroke(255);
  line(-width/2,0,width/2,0);
  line(0,height/2,0,-height/2);
}

function grid()
{
  stroke(50);
  for(let x=0;x<width/2;x+=unit)
    line(x, -height/2, x, height/2);
  for(let x=0;x>-width/2;x-=unit)
    line(x, -height/2, x, height/2);
  for(let y=0;y<height/2;y+=unit)
    line(-width/2, y, width/2, y);
  for(let y=0;y>-width/2;y-=unit)
    line(-width/2, y, width/2, y);
}
