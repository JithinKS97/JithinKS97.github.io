class Oscillator
{
  constructor()
  {
    this.d = -h/5;
    this.v = 0;
    this.a = 0;
    this.damp = 0;
    this.initAmp = 0;
  }

  display()
  {
    fill(218, 100, 50);
    noStroke();
    push();
    translate(w/10, h/2);
    ellipse(0, this.d, w/30, w/30);
    pop();
  }

  update()
  {
    this.v += this.a;
    this.d += this.v;
    this.a = -0.005*this.d - this.damp*this.v;
  }
}