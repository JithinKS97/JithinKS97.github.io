class Graph
{
  constructor()
  {
    this.graphs = [];
  }

  plot(y)
  {
    for(let i=0;i<this.graphs.length;i++)
    {
      if(this.graphs[i].end == false)
        this.graphs[i].y[this.graphs[i].y.length] = y; //Points are added to the array of graphs

      push();
      translate(w/5, h/2);
      for(let x=0;x<this.graphs[i].y.length;x++)
      {
        stroke(this.graphs[i].col);
        strokeWeight(w/250);
        line(x-1,this.graphs[i].y[x-1], x, this.graphs[i].y[x]);
      }
      pop();
    }
  }
}

class Points
{
  constructor()
  {
    this.y = [];
    colorMode(HSL);
    this.col = color(random(0, 255), random(80, 100), random(40, 60));
    this.end = false;
  }
}
