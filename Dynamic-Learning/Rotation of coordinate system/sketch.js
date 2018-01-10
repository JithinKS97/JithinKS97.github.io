var v;
var s;zz

function setup()
{
    createCanvas(640,360);
    v = createVector(150,200);
    s = createSlider(0,100,0);
}

function draw()
{
    background(0);
    graph();
}

function graph()
{
    push();

    translate(width/4, height*3/4);

    stroke(60,80,250);
    strokeWeight(4);

    arrowLine(0,0,width/2,0);
    arrowLine(0,0,0,-2*height/3);

    stroke(80,240, 150);


    arrowLine(0,0,v.x,-v.y);

    stroke(60,80,250);

    dottedline(v.x,-v.y,v.x,0)
    dottedline(v.x,-v.y,0,-v.y);
    dottedline(0,0,0,-v.y);
    dottedline(0,0,v.x,0);

    push();

    angle = map(s.value(),0,100,0,PI);

    rotate(-angle);

    stroke(240,80,150);

    arrowLine(0,0,width/2,0);
    arrowLine(0,0,0,-2*height/3);


    dottedline(v.x*cos(angle)+v.y*sin(angle),0,v.x*cos(angle)+v.y*sin(angle),-(-v.x*sin(angle)+v.y*cos(angle)));
    dottedline(0,-(-v.x*sin(angle)+v.y*cos(angle)),v.x*cos(angle)+v.y*sin(angle),-(-v.x*sin(angle)+v.y*cos(angle)));
    dottedline(0,0,0,-(-v.x*sin(angle)+v.y*cos(angle)));
    dottedline(0,0,v.x*cos(angle)+v.y*sin(angle),0);
    
    pop();
    pop();
    
    if(mouseIsPressed && mouseX<width && mouseX>0 && mouseY>0 && mouseY<height)
    {
        v.x = mouseX - width/4;
        v.y = -(mouseY-height*3/4);
    }
}

function dottedline(x1,y1,x2,y2)
{
    for (var i = 0; i <= 20; i++) {
      var x = lerp(x1, x2, i/20);
      var y = lerp(y1, y2, i/20);
      point(x, y);
    }  
}

function arrowLine(x1,y1,x2,y2)
{
    var tw =8;
    line(x1,y1,x2,y2);

    var angle = atan2(y2-y1,x2-x1);

    rectMode(CENTER);
    push();
    translate(x2,y2);
    rotate(angle);
    strokeWeight(4);
    triangle(1.5*tw,0,0,tw,0,-tw);
    pop();
}