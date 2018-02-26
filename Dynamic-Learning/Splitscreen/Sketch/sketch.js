var img1, img2, d = 40, p = [], overP= false, curMov= -1, k = 35;

var electrical, nuclear, total;

var es = false;
var ns = false;
var ts = false;
var ms = false;

function setup()
{
    // var canvas = createCanvas(640, 360);

    var parentObj = $("#simulation-window");
    // var canvas = createCanvas(640, 360);
    var canvas = createCanvas(parentObj.width(), parentObj.height());
    canvas.parent('sketch-holder');
    img1 = loadImage("Images/proton.png");
    img2 = loadImage("Images/protonBright.png");
    img3 = loadImage("Images/pSource.png");
    img4 = loadImage("Images/pSourceB.png");

    electrical = createCheckbox('Electrical force', false);
    electrical.parent('box');
    nuclear = createCheckbox('Nuclear force',false);
    nuclear.parent('box');
    total = createCheckbox('Net force', false);
    total.parent('box');
    move = createCheckbox('Motion',false);
    move.parent('box');

    electrical.changed(ec);
    nuclear.changed(nc);
    total.changed(tc);
    move.changed(mv);


    /*var theta = 0;
    var n = 5;
    var r = 100;

    for(var i=0;i<360;i++)
    {
        if(i%(360/n)==0)
            p.push(new Proton(width/2 + r*cos(radians(i)), height/2 + r*sin(radians(i))));     
    }*/
}

function ec()
{
    es = !es;
}

function nc()
{
    ns = !ns;
}

function tc()
{
    ts = !ts;
}

function mv()
{
    ms = !ms;
}


function draw()
{
    imageMode(CENTER);
    background(0);
    protonSource();
    protonPop();
    for(var i=0;i<p.length;i++)
    {
        p[i].display();
        p[i].drawForce();
    }
    electricForce();
    nuclearForce();
}

function electricForce()
{
  for(var i=0;i<p.length;i++)
  {
    var net = createVector();
    for(var j=0;j<p.length;j++)
    {
      if(i!=j)
      {
        var d = createVector(p[j].pos.x, p[j].pos.y); //The displacement vector
        d.sub(p[i].pos);
        r = d.mag();
        d.normalize();
        d.mult(1/(pow(r/k,2))+0.5);
        d.mult(-k);
        net.add(d)
      }
    }
    p[i].EF = net;
  }
}

function nuclearForce()
{
  for(var i=0;i<p.length;i++)
  {
    var net = createVector();
    for(var j=0;j<p.length;j++)
    {
      if(i!=j)
      {
        var d = createVector(p[j].pos.x, p[j].pos.y); //The displacement vector
        d.sub(p[i].pos);
        r = d.mag();
        d.normalize();
        d.mult((1.9/pow(r/k,1)-1/pow(r/k,3)));
        d.mult(k);
        net.add(d)
      }
    }
    p[i].NF = net;
    if(ms == true)
        p[i].update();
  }
}

class Proton
{
    constructor(x, y)
    {
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.moving = false;
        this.EF = createVector();
        this.NF = createVector();
        this.TF = createVector();
    }
    display()
    {
        if(this.mouseIsOver())
            image(img2, this.pos.x, this.pos.y, d ,d);
        else
            image(img1, this.pos.x, this.pos.y, d ,d);  // To brighten if mouse is over the proton

        if(this.moving == true)
        {
            this.pos.x = mouseX; // To move the proton
            this.pos.y = mouseY;
        }
    }
    mouseIsOver()
    {
        if(dist(mouseX, mouseY, this.pos.x, this.pos.y)<d/2) //To check if the cursor is on the proton
            return true;
        else
            return false;
    }
    drawForce()
    {
        push();
        translate(this.pos.x, this.pos.y);
        if(es == true)
            arrowLine(0,0,this.EF.x, this.EF.y);
        if(ns == true)
            arrowLine(0,0,this.NF.x, this.NF.y);
        this.TF = p5.Vector.add(this.NF,this.EF);
        if(ts == true)
            arrowLine(0,0,this.TF.x, this.TF.y);
        if(this.moving == true && es == false && ns == false && ts == false)
            arrowLine(0,0,this.TF.x, this.TF.y);
        pop();
    }
    update()
    {
        this.acc = this.TF.div(10);
        this.acc.limit(1);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.limit(1);
    }

}

function protonPop()
{
    for(var i=0;i<p.length;i++)
    {
        if(p[i].pos.x>width || p[i].pos.x<0 || p[i].pos.y>height || p[i].pos.y<0)
        {
            p.splice(i,1);  //When moved out of canvas, the proton is deleted
            curMov = -1;
            break;
        }
    }
}

function protonSource()
{
    var pos = createVector(width*(9/10), height*(1/10));

    if(dist(mouseX,mouseY,pos.x,pos.y)<d/2)
    {
        overP = true;
        image(img4,pos.x, pos.y);
    }
    else
    {
        overP = false;
        image(img3,pos.x,pos.y);
    }
}

function mousePressed()
{
    if(overP == true)
        p.push(new Proton(mouseX, mouseY)); // New proton created

    for(var i=0;i<p.length;i++)
        if(p[i].mouseIsOver())
        {
            p[i].moving = true; //To move the proton if mouse is over it and pressed, moving is set to true, curMov set to i to keep track which proton to stop moving when mouse Released
            curMov = i;
        }
}

function mouseReleased()
{
    if(curMov>=0)
        p[curMov].moving = false; // To stop the movement of the proton
}

function arrowLine(x1,y1,x2,y2)
{
    var v = createVector(x2,y2)
    v.mult(5);
    v.limit(150);
    var tw =v.mag()/14;
    if(tw>8)
        tw=8;
    stroke(255);
    strokeWeight(3);
    line(x1,y1,v.x,v.y);
    stroke(255);
    var angle = atan2(y2-y1,x2-x1);

    rectMode(CENTER);
    push();
    translate(v.x,v.y);
    rotate(angle);
    strokeWeight(4);
    triangle(1.5*tw,0,0,tw,0,-tw);
    pop();
}