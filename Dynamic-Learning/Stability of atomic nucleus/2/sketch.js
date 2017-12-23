var img1, img2, d = 40, p = [], overP= false, curMov= -1;

function setup()
{
    createCanvas(640, 360);
    img1 = loadImage("Images/proton.png");
    img2 = loadImage("Images/protonBright.png");
    img3 = loadImage("Images/pSource.png");
    img4 = loadImage("Images/pSourceB.png");
}

function draw()
{
    imageMode(CENTER);
    background(0);
    protonSource();
    protonPop();
    for(var i=0;i<p.length;i++)
        p[i].display();
}

function protonPop()
{
    for(var i=0;i<p.length;i++)
    {
        if(p[i].moving == true && (p[i].pos.x>width) || p[i].pos.x<0 || p[i].pos.y>height || p[i].pos.y<0)
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

class Proton
{
    constructor(x, y)
    {
        this.pos = createVector(x, y);
        this.moving = false;
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

}