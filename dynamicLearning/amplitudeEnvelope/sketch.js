let osc, gra, w=640, h=360, start, amp, stat = 0, sp;

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
  
  sp = new Spring();
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
  if(stat == 0 && abs(osc.d)>0)
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
  sp.display();
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
  let triLen = width/50;
  translate(w/5, h/2);
  strokeWeight(w/250);
  stroke(30);
  line(0, 0 , w*4/5-triLen, 0);
  line(0,-h/2+triLen,0,h/2-triLen);
  pop();
  

  fill(30);
  
  push();
  translate(width-width/50,height/2);
  rotate(-PI/2);
  triangle(triLen/2,0,-triLen/2,0,0,triLen);
  pop();
  
  push();
  translate(width/5,triLen);
  rotate(PI);
  triangle(triLen/2,0,-triLen/2,0,0,triLen);
  pop();
  
  push();
  translate(width/5,height-triLen);
  rotate(2*PI);
  triangle(triLen/2,0,-triLen/2,0,0,triLen);
  pop();
}

class Spring
{
    constructor()
    {
        this.len = h/13.8;
        this.pos = [];
        this.n = 14;

        for(let i=0;i<=this.n;i++)
            this.pos[i] = 0;

        this.angle;
        this.pos[0] = this.len/2;
        this.x = w/10;
    }
    
    display()
    {
        stroke(0);
        strokeWeight(5);
        this.angle = asin((h/2-this.len/3 + osc.d -this.len)/(this.n*this.len));
        
        line(this.x,this.pos[0] - this.len/2,this.x,this.pos[0]);
        line(this.x, this.pos[0], this.x+this.len*cos(this.angle)/2, this.pos[0]+this.len*sin(this.angle)/2);
        this.pos[1] = this.pos[0]+this.len*sin(this.angle)/2;
        
        for(let i=1;i<this.n;i++)
        {
            if(i%2!=0)
            {
                line(this.x-this.len*cos(this.angle)/2+this.len*cos(this.angle), this.pos[i], this.x+this.len*cos(this.angle)/2 - this.len*cos(this.angle), this.pos[i] + this.len*sin(this.angle));
                this.pos[i+1] = this.pos[i] + this.len*sin(this.angle);
            }
            else
            {
                line(this.x-this.len*cos(this.angle)/2, this.pos[i], this.x+this.len*cos(this.angle)/2, this.pos[i] + this.len*sin(this.angle));
                this.pos[i+1] = this.pos[i] + this.len*sin(this.angle);
            }
        }
        line(this.x-this.len*cos(this.angle)/2, this.pos[this.n], this.x, this.pos[this.n] + this.len*sin(this.angle)/2);
        line(this.x, this.pos[this.n] + this.len*sin(this.angle)/2, this.x, this.pos[this.n] + this.len*sin(this.angle)/2+this.len/2);
        
    }
}