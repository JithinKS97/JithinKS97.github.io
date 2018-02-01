var m, showPos = true, posStat = true, showVel=true, velStat = true, showAcc=true, accStat = true, activate = false, gui;

function setup()
{
  createCanvas(640, 360);
  m = new mover();
  step = createButton('step');
  step.mousePressed(stepButton);
  gui = createGui('Show');
  gui.addGlobals("showPos", "showVel", "showAcc");


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

function draw()
{
  background(0);
  m.display();
  m.drag();
  m.update();
  drawVector(m);

  if (showPos == true)
  posStat = true;
  else
  posStat = false;

  if (showVel == true)
  velStat = true;
  else
  velStat = false;

  if (showAcc == true)
  accStat = true;
  else
  accStat = false;
}