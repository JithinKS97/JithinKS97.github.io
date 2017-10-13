class Graph
{
  constructor()
  {
    this.graph = new Points();
    this.pause = false;
  }

  plot(y)
  {
    if(this.pause == false)
      this.graph.y[this.graph.y.length] = y;
    push();
    translate(w/5, h/2);
    strokeWeight(w/250);
    stroke(0);
    noFill();
    beginShape();
    for(let i=0;i<this.graph.y.length;i++)
      vertex(i,this.graph.y[i]);
    endShape();
    pop();
  }

  preview()
  {
    push();
    
    translate(w/5, h/2);
    noFill();
    stroke(0);
    for(let x=0;x<width*(4/5);x++)
    {
      if(x%5==0 && x>=1)
      {
        strokeWeight(w/200);
        line(x-1, -osc.initAmp*exp(-osc.damp*(x-1)/2), x, -osc.initAmp*exp(-osc.damp*x/2));
      }
    }

    for(let x=0;x<width*(4/5);x++)
    {
        if(x%5==0 && x>=1)
        {
          strokeWeight(w/200);
          line(x-1, osc.initAmp*exp(-osc.damp*(x-1)/2), x, osc.initAmp*exp(-osc.damp*x/2));
        }
    }
    pop();
  }

  
}

class Points
{
  constructor()
  {
    this.y = [];
  }
}