var a = [];
var m = [];
var n = [];

function setup() {
  createCanvas(1000,1000);
  for(var i=1;i<110;i++)
  {
    a[i-1] = loadImage("Images/"+i+".png");
    m[i-1] = random(10000);
    n[i-1] = random(-1000,1000);
  }
}

function draw() {
  background(0);
  for(var i=108;i>=0;i--)
  {
    if(i!=5)
      image(a[i],0,m[i]);
    if(m[i]>=0)
    {
      var dx = m[i]/50;
      m[i]-=dx;
    }
 
  }
}