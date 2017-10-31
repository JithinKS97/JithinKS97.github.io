class Graph
{
  constructor()
  {
    this.graphs = [];
  }

  plot(y)
  {
    for(let i=0;i<this.graphs.length;i++) //To loop through all the graphs
    {
      if(this.graphs[i].end == false)
        this.graphs[i].y[this.graphs[i].y.length] = y; //Points are added to the last element of the array, i.e the present graph

      push();
      translate(w/5, h/2);
      for(let x=0;x<this.graphs[i].y.length;x++) //Plotting each points the in Point array
      {
        stroke(this.graphs[i].col);
        strokeWeight(w/200);
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
    this.col = color(random(0, 255), random(30, 80), random(40, 80));
    this.end = false;
  }
}
