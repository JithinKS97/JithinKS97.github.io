var p = [];
var d = 30;
var mp;
var create = false;
var col;
var currMov = -1;

function setup()
{
    createCanvas(640, 360);
    mp = createVector(width*(9/10),height*(1/10));
    col = color(360,90,70);
}

function draw()
{
    background(0);
    fill(col);
    noStroke();
    ellipse(mp.x,mp.y,d,d);
    for(var i=0;i<p.length;i++)
    {
        p[i].display();
        if(create == true)
        {
            p[p.length-1].pos.x = mouseX;
            p[p.length-1].pos.y = mouseY; 
        }

        p[i].isInside();

        p[i].moveProton();

        for(var j=0;j<p.length;j++)
        {
            if(i!=j)
            p[i].calcForce(p[j]);
        }
        
        if(currMov>=0)
        {
            if(p[currMov].pos.x>width || p[currMov].pos.x<0 ||p[currMov].pos.y>height || p[currMov].pos.y<0)
            {
                p.splice(currMov,1);
                print(currMov);
                currMov = -1;
                break;
            }
        }


    }
}

function mousePressed()
{
    if(dist(mouseX,mouseY,mp.x,mp.y)<d)
    {
        p.push(new Proton(mouseX, mouseY));
        create = true;
    }
    for(var i=0;i<p.length;i++)
    {
        if(p[i].mouseOver)
        {
            p[i].move = true;
            currMov = i;
        }
    }
}

function mouseReleased()
{
    create = false;
    if(currMov>=0)
        p[currMov].move = false;
}

class Proton
{
    constructor(x, y)
    {
        this.pos = createVector(x,y);
        this.over = color(360,20,20);
        this.mouseOver = false;
        this.move = false;
    }
    display()
    {
        noStroke();
        if(this.mouseOver == true)
             fill(this.over)
        else
            fill(col);
        ellipse(this.pos.x, this.pos.y,d,d);    
    }
    isInside()
    {
        if(dist(mouseX,mouseY,this.pos.x,this.pos.y)<d/2)
            this.mouseOver = true;
        else
            this.mouseOver = false;
    }
    moveProton()
    {
        if(this.move == true)
        {
            this.pos.x = mouseX;
            this.pos.y = mouseY;
        }
    }
    calcForce(other)
    {
        stroke(255);
        strokeWeight(3);
        line(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
    }
}