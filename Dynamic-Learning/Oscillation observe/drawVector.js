function drawVector(m)
{
  let posSign, velSign, accSign, aw = 5, velScale = 10, accScale = 200;

  if(m.pos!=0)
    posSign = m.pos/abs(m.pos);
  if(m.pos!=0)
    velSign = m.vel/abs(m.vel);
  if(m.acc!=0)
    accSign = m.acc/abs(m.acc);

  stroke(255);
  strokeWeight(3);
  push();
  translate(width/2, height/2 + m.sid)
  if(posStat == true)
  {
    line(0,0,m.pos,0);
    triangle(posSign*aw+m.pos,0,m.pos,aw,m.pos,-aw)
  }
  pop();

  push();
  translate(width/2 + m.pos, height/2)
  if(m.vel !=0 && m.dragging == false && velStat == true)
  {
    line(0,0,m.vel*velScale,0);
    triangle(velSign*aw+m.vel*10,0,m.vel*velScale,aw,m.vel*velScale,-aw);
  }
  pop();

  push();
  translate(width/2 + m.pos, height/2 - m.sid)
  if(m.vel !=0 && accStat == true)
  {
    line(0,0,-m.k*m.pos*accScale,0);
    triangle(accSign*aw+-m.k*m.pos*accScale,0,-m.k*m.pos*accScale,aw,-m.k*m.pos*accScale,-aw);
  }
  pop();
}