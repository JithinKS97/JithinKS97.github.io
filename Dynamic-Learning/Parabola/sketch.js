let unit = 30, d, x1, x2, i, a, b, c, change;

function setup()
{
  createCanvas(640, 360);
  change = QuickSettings.create(10, 10, "Change");
  change.addRange("a", -10, 10, 1, 0.1, function(value) { });
  change.addRange("b", -10, 10, 0, 0.1, function(value) { });
  change.addRange("c", -10, 10, 0, 0.1, function(value) { });
  change.addButton("reset", function(value) { change.setValue("a", 1); change.setValue("b", 0); change.setValue("c", 0);})
  a = b = c = 0;

}

function draw()
{
  a = change.getValue("a");
  b = change.getValue("b");
  c = change.getValue("c");
  background(0);
  push();
  translate(width/2, height/2);
  grid();
  coOrd();
  scale(unit);
  drawParabola(a, b, c);
  pop();
  textSize(width/25);
  fill(255);
  d = b*b-4*a*c;
  if(d>=0)
  {
    x1 = (-b+sqrt(d))/(2*a);
    x2 = (-b-sqrt(d))/(2*a);
  }
  else
  {
    x1 = x2 = (-b)/(2*a);
  }
  i = sqrt(abs(d))/(2*a);
  d = d.toFixed(1);
  x1 = x1.toFixed(1);
  x2 = x2.toFixed(1);
  i = i.toFixed(1);
  text("Discriminant:"+d, (1/40)*width, (19/20)*height);
  text("x1: "+ x1 + (d<0 ? " + "+i+"i" : "") , (30/40)*width, (17/20)*height);
  text("x2: "+ x2 + (d<0 ? " + "+i+"i" : "") , (30/40)*width, (19/20)*height);
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
