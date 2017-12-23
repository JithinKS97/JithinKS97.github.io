var img1, img2, d = 40, p, moving = false;

function setup()
{
    createCanvas(640, 360);
    img1 = loadImage("Images/proton.png");
    img2 = loadImage("Images/protonBright.png")
    p = new Proton(width/2, height/2);
}

function draw()
{
    background(0);
    p.display();
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
        imageMode(CENTER);
        if(this.mouseIsOver())
            image(img2, this.pos.x, this.pos.y, d ,d);
        else
            image(img1, this.pos.x, this.pos.y, d ,d);  // To brighten if mouse is over the proton

        if(this.moving == true)
        {
            this.pos.x = mouseX;
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

function mousePressed()
{
    if(p.mouseIsOver())
        p.moving = true;

}

function mouseReleased()
{
    p.moving = false;
}