class Graph
{
  constructor()
  {
    this.graphs = [];
  }

  plot(y)
  {
    push();
    translate(w/5, h/2);
    stroke(0);
    strokeWeight(w/200);
    noFill();
    for(let i=0;i<this.graphs.length;i++) //To loop through all the graphs
    {
      stroke(this.graphs[i].col);
      strokeWeight(w/200);
      if(this.graphs[i].end == false)
        this.graphs[i].y[this.graphs[i].y.length] = y; //Points are added to the last element of the array, i.e the present graph
      beginShape();
      for(let x=0;x<this.graphs[i].y.length;x++) //Plotting each points the in Point array   
        vertex(x, this.graphs[i].y[x]);
      endShape();
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
    this.col = color(random(0, 360), 80, random(40, 70));
    this.end = false;
  }
}
