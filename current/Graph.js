class Graph
{
  constructor()
  {
    this.t = 0;
  }

  plot(y)
  {
    push();
    translate(w/5, h/2);
    stroke(0);
    strokeWeight(w/100);
    point(this.t,y);
    pop();
    this.t++;
  }
}
