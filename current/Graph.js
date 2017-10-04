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
    for(let x=0;x<this.graphs.y.length;x++)
    {
      stroke(this.graphs.col);
      strokeWeight(w/250);
      line(x-1,this.graphs.y[x-1], x, this.graphs.y[x]);
    }
    pop();
  }
}

class Points
{
  constructor()
  {
    this.y = [];
    colorMode(HSL);
    this.col = color(random(0, 255), random(80, 100), random(40, 60));
  }
}
