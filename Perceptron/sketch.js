let brain, pts = [];

function setup()
{
  createCanvas(640, 640);
  brain = new Perceptron();
  for(let i=0;i<50;i++)
    pts.push(new Point());
}

function draw()
{
  background(0);
  for(let i=0;i<pts.length;i++)
  {
    pts[i].display();
    if(brain.guess(pts[i].inputs) == pts[i].inputs[2])
      pts[i].trained = true;
  }
}

function mouseClicked()
{
  for(let i=0;i<pts.length;i++)
  {
    brain.train(pts[i].inputs);
    if(brain.guess(pts[i].inputs) == pts[i].inputs[2])
      pts[i].trained = true;
    pts[i].display();
  }
}

class Point
{
  constructor()
  {
    this.inputs = [];
    this.trained = false;
    for(let i=0;i<2;i++)
    {
      this.inputs[i] = random(0, 640);
      if(this.inputs[0]>this.inputs[1])
        this.inputs[2] = 1;
      else
        this.inputs[2] = -1;
    }
  }

  display()
  {
    if(this.trained == true)
      fill(0,255,0);
    else
    {
      if(this.inputs[0] > this.inputs[1])
        fill(255,0,0);
      else
        fill(0,0,255);
    }
    ellipse(this.inputs[0], this.inputs[1], 20, 20);
  }
}

class Perceptron
{
  constructor()
  {
    this.weights = [];
    this.lr = 1;
    for(let i=0;i<2;i++)
      this.weights[i] = random(-1, 1);
  }

  guess(inputs)
  {
    let sum=0;
    for(let i=0;i<this.weights.length;i++)
      sum += inputs[i]*this.weights[i];
    let output = this.sign(sum);
    return output;
  }

  sign(x)
  {
    if(x>=0)
      return 1;
    else
      return -1;
  }

  train(inputs)
  {
    let error = this.guess(inputs) - inputs[2];
    if(inputs[2] != this.guess(inputs))
    {
      for(let i=0;i<this.weights.length;i++)
        this.weights[i] += this.error*inputs[i]*this.lr;
    }
  }
}
