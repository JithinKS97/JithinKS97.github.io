let m, showPos, posStat = true, showVel, velStat = true, showAcc, accStat = true, activate = false;

function setup()
{
  createCanvas(640, 360);
  m = new mover();
  showPos = createCheckbox('Position', true);
  showPos.changed(showPosition);
  showVel = createCheckbox('Velocity', true);
  showVel.changed(showVelocity);
  showAcc = createCheckbox('Acceleration', true);
  showAcc.changed(showAcceleration);
  step = createButton('step');
  step.mousePressed(stepButton);

}

function stepButton()
{
  if(activate == false)
  {
    activate = true;
    noLoop();
  }
  else
  {
    setInterval(stop,50);
    loop();
  }
}

function stop()
{
  noLoop();
}

function showPosition()
{
  if (this.checked())
    posStat = true;
  else
    posStat = false;
}

function showVelocity()
{
  if (this.checked())
    velStat = true;
   else
    velStat = false;
}

function showAcceleration()
{
  if (this.checked())
    accStat = true;
  else
    accStat = false;
}

function draw()
{
  background(51);
  m.display();
  m.drag();
  m.update();
  drawVector(m);
}