class mover
{
  constructor()
  {
    this.pos = 100;
    this.vel = 0;
    this.acc = 0;
    this.sid = width/10;
    this.dragging = false;
  }

  display()
  {
    push();
    translate(width/2, height/2);
    fill(255);
    rectMode(CENTER);
    stroke(255);
    strokeWeight(2);
    fill(0);
    if (this.dragging)
      fill(0);
    rect(this.pos,0,this.sid, this.sid);
    pop();
  }

  isAbove()
  {
    if(mouseX<width/2+this.pos+this.sid/2 && mouseX>width/2+this.pos-this.sid/2 && mouseY>height/2-this.sid/2 && mouseY<height/2+this.sid/2)
      return true;
    else
      return false;
  }

  drag()
  {
    if(this.isAbove() && mouseIsPressed)
      this.dragging = true;
    if(this.dragging == true)
    {
      this.vel = 0;
      this.pos = mouseX - width/2;
    }
  }

  update()
  {
    this.k = 0.003;
    this.acc = -this.k*this.pos;
    this.vel += this.acc;    
    this.pos += this.vel;
  }
}

function mouseReleased()
{
  m.dragging = false;
}