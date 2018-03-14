let b = [], gSource;

function setup()
{
    createCanvas(640, 360, WEBGL);
    for(let i=0;i<100;i++)
    {
        b[i] = new ball(i*5,0);
    }
}

function draw()
{
    background(0);

    for(let i=0;i<b.length;i++)
    {
        b[i].display();
        b[i].trigger();
        b[i].update();
        let springForce = createVector(b[i].pos.x, b[i].pos.y, b[i].pos.z);
        springForce.sub(b[i].initPos.x, b[i].initPos.y, b[i].initPos.z);
        springForce.mult(-0.1);
        b[i].applyForce(springForce);
    }        
}

class ball
{
    constructor(x, y)
    {
        this.initPos = createVector(x, y, 0);
        this.pos = createVector(x, y, 0);
        this.vel = createVector();
        this.acc = createVector();
        this.d = width/20;
    }

    display()
    {
        noStroke();
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        ellipse(0, 0, this.d, this.d);
        pop();
    }

    update()
    {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(0.95);
        this.acc.mult(0);
    }

    isHovering()
    {
        if(dist(mouseX-width/2, mouseY-height/2, this.pos.x, this.pos.y)<this.d)
            return true;
        else
            return false;
    }

    trigger()
    {
        if(this.isHovering() == true)
        {
            this.vel.set(this.initPos.x/10, this.initPos.y/10, 20);
        }
    }

    applyForce(f)
    {
        this.acc = f;
    }
}