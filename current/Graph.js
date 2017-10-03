class Graph
{
  constructor()
  {
    this.t = 0;
    this.graphPts = new Points();
  }

  plot(y)
  {
    this.graphPts.pts[this.graphPts.pts.length] = y;
    push();
    translate(w/5, h/2);
    strokeWeight(5);
    stroke(255);
    for(let i=0;i<this.graphPts.pts.length;i++)
      point(i,this.graphPts.pts[i]);
    pop();
    this.t++;
  }
}

class Points
{
  constructor()
  {
    this.pts = [];
  }
}
