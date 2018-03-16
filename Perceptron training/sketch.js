let pts = [], p, trainingIndex = 0;

function setup()
{
  createCanvas(600, 600);
  for(let i=0;i<100;i++)
    pts[i] = new Point();
  p = new Perceptron();
}

function draw()
{
  background(0);
  push()
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  line(-width/2,0,width/2,0);
  line(0,height/2,0,-height/2);
  let x1 = new Point(1, f(1));
  let x2 = new Point(-1, f(-1));
  line(x1.pixelX(), x1.pixelY(), x2.pixelX(), x2.pixelY());
  for(pt of pts)
  {
    pt.display();
  }

  for(pt of pts)
  {
    let inputs = [pt.x, pt.y, 1];
   // p.train(inputs, pt.label);
    if(p.guess(inputs) == pt.label)
      fill(0,255,0);
    else
      fill(255, 0, 0);
    ellipse(pt.pixelX(), pt.pixelY(), 10, 10);
  }

  let inputs = [pts[trainingIndex].x, pts[trainingIndex].y, 1];
  p.train(inputs, pts[trainingIndex].label);
  trainingIndex++;
  if(trainingIndex == pts.length)
    trainingIndex = 0;
  p.drawLine();

  pop();
}

class Point
{
  constructor(x, y)
  {
    if(arguments.length == 2)
    {
      this.x = x;
      this.y = y;
    }
    else
    {
      this.x = random(-1, 1);
      this.y = random(-1, 1);
      if(this.y>=f(this.x))
        this.label = 1;
      else
        this.label = -1;
    }
  }

  display()
  {
    if(this.label == 1)
      fill(0);
    else
      fill(255);
    ellipse(this.pixelX(), this.pixelY(), 20, 20);
  }

  pixelX()
  {
    return map(this.x, -1, 1, -width/2, width/2);
  }
  pixelY()
  {
    return map(this.y, -1, 1, height/2, -height/2);
  }
}

function f(x)
{
  let m=1, b=0.2;
  return m*x+b;
}

class Perceptron
{
  constructor()
  {
    this.weights = [random(-1, 1), random(-1, 1), random(-1,1)];
    this.lr = 0.1;
  }

  guess(inputs)
  {
    let sum = 0, output;
    for(let i=0;i<this.weights.length;i++)
    {
      sum += this.weights[i] * inputs[i];
    }
    output = sign(sum);
    return output;
  }

  train(inputs, target)
  {
    let output = this.guess(inputs);
    let error = target - output;
    for(let i=0;i<this.weights.length;i++)
      this.weights[i] += error*inputs[i]*this.lr;
  }

  drawLine()
  {
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    let w2 = this.weights[2];

    let x1 = 1;
    let y1 = (-w2/w1)-(w0/w1);
    let x2 = -1;
    let y2 = (-w2/w1)-(w0/w1)*(-1);

    let pt1 = new Point(x1, y1);
    let pt2 = new Point(x2, y2);

    line(pt1.pixelX(), pt1.pixelY(), pt2.pixelX(), pt2.pixelY());
  }
}

function sign(x)
{
  if(x>=0)
    return 1;
  else
    return -1;
}