let osc, gra, w=640, h=360, start, clear, stat = false, amp, sp;

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
  sp = new Spring();
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
  background(0);
  drawCoord();
  sp.display()
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
  stroke(100);
  let triLen = width/50;
  line(0, 0 , w*4/5-triLen, 0);
  line(0,-h/2+triLen,0,h/2-triLen);
  pop();

  fill(100);

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
        stroke(100);
        strokeWeight(w/120);
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
