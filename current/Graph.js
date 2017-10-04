class Graph
{
  constructor()
  {
    this.graphs = new Points();
  }

  plot(y)
  {
    this.graphs.y[this.graphs.y.length] = y;
    push();
    translate(w/5, h/2);
    strokeWeight(5);
    stroke(255);
    for(let i=0;i<this.graphPts.pts.length;i++)
      point(i,this.graphPts.pts[i]);
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
