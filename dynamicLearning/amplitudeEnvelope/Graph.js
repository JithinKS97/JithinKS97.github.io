let s;

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
    stroke(218, 100, 50);
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
    stroke(340, 100, 50, map(osc.damp, 0, sqrt(4*0.005), 1, 0));
    if(osc.damp<sqrt(4*0.005))
    {
      for(let x=0;x<width*(4/5);x++)
      {
        if(x%6==0 && x>=1)
        {
          strokeWeight(w/200);
          line(x-1, -osc.initAmp*exp(-osc.damp*(x-1)/2), x, -osc.initAmp*exp(-osc.damp*x/2));
       }
      }

      for(let x=0;x<width*(4/5);x++)
      {
        if(x%6==0 && x>=1)
        {
          strokeWeight(w/200);
          line(x-1, osc.initAmp*exp(-osc.damp*(x-1)/2), x, osc.initAmp*exp(-osc.damp*x/2));
        }
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

