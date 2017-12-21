var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var obs1;
var obs2;
var obs3;
var fDist; //Distance between the fringes, i.e the centre obstacle's height
var fWid; //Fringe width
var obsHgt; //Height of the obstacles on the both sides
var gun;
var bullet;
var vel;
var pos;
var temp;
var bulls = [];
var defaultCategory;
var xoff = 0.0;
var t = 0;
var gra = [];
var n = 50;
var fireRate = 3;

function setup()
{
    createCanvas(640, 360);

    engine = Engine.create();

    engine.world.gravity.y = 0;

    fDist = height/5;
    fWid = height/20;
    obsHgt = (height - (fDist + 2*fWid))/2;

    obs1p = {
        x : width/2,
        y : height/2,
        w : width/40,
        h : fDist
    }

    obs2p = {
        x : width/2,
        y : obsHgt/2,
        w : width/40,
        h : obsHgt
    }

    obs3p = {
        x : width/2,
        y : obsHgt + 2*fWid + fDist + obsHgt/2,
        w : width/40,
        h : obsHgt
    }

    gun = {
        pivX : width/4,
        pivY : height/2,
        w : width/15,
        h : height/30,
        angle : 0
    }

    bullet = {
        x : gun.pivX,
        y : gun.pivY,
        r : width/150
    }

    obs1 = Bodies.rectangle(obs1p.x, obs1p.y, obs1p.w, obs1p.h, { isStatic: true, collisionFilter : { category : 0x0002 }});
    obs1.restitution = 1;
    obs2 = Bodies.rectangle(obs2p.x, obs2p.y, obs2p.w, obs2p.h, { isStatic: true, collisionFilter : { category : 0x0002 }});
    obs3 = Bodies.rectangle(obs3p.x, obs3p.y, obs3p.w, obs3p.h, { isStatic: true, collisionFilter : { category : 0x0002 }});

    World.add(engine.world, [obs1, obs2, obs3]);

    Engine.run(engine);

    for(var i=0;i<n;i++)
        gra[i] = 0;
    
    
}


function draw()
{
    noStroke();
    background(0);
    fill(255);
    rectMode(CENTER);
    fill(230,180,50);
    rect(obs1p.x, obs1p.y, obs1p.w, obs1p.h);  
    rect(obs2p.x, obs2p.y, obs2p.w, obs2p.h);
    rect(obs3p.x, obs3p.y, obs3p.w, obs3p.h);

    for(var i=0;i<bulls.length;i++)
    {
        bulls[i].show();
        if(bulls[i].dead == true)
            bulls.splice(i,1)
    }
   
    if(t%fireRate==0)
    {
        bulls.push(new bullets());    
        bulls[bulls.length-1].fire();
    } 

    push();
    translate(gun.pivX, gun.pivY);
    //gun.angle = atan2(mouseY-gun.pivY,mouseX-gun.pivX);

    xoff = xoff + .05;
    var n = noise(xoff) * PI;
    
    gun.angle = n;
    rotate(gun.angle+PI/2);
    fill(150,230,150);
    rect(0,0, gun.w, gun.h);
    stroke(255);
    strokeWeight(5);
    pop();
    t++;   
    graph();
}

function graph()
{
    for(var i=0;i<gra.length;i++)
    {
        strokeWeight(3);
        stroke(255);
        rectMode(CORNER);
        rect(width*3/4,i*(height/n),gra[i],(height/n));
        rectMode(CENTER);
    }
}

function bullets()
{
    this.bull = Bodies.circle(bullet.x, bullet.y, bullet.r, { restitution : 1, frictionAir : 0, staticFriction:0, intertia:Infinity, collisionFilter: {mask : 0x0002}} );
    this.dead = false;
    this.marked = false;

    vel = Matter.Vector.create(3,3);
    pos = Matter.Vector.create(gun.pivX,gun.pivY);
    World.add(engine.world, this.bull);


    this.show = function()
    {
        fill(80,150,240);
        ellipse(this.bull.position.x,this.bull.position.y,bullet.r*2,bullet.r*2);
        if(this.bull.position.x>width || this.bull.position.x<0 || this.bull.position.y<0 || this.bull.position.y>height)
            this.dead = true;
        if(this.bull.position.x>=width*3/4 && (this.bull.position.y>0 && this.bull.position.y<height))
        {
            if(this.marked == false)
            {
                print("bingo");
                print(floor(this.bull.position.y));
                this.marked = true;
                gra[floor(this.bull.position.y/(height/n))]+=3;
            }
        }
    }
    this.fire = function()
    {
        //temp = Matter.Vector.create(mouseX-gun.pivX,mouseY-gun.pivY);
        //temp = Matter.Vector.normalise(temp);
        //temp = Matter.Vector.mult(temp,8);

        temp = Matter.Vector.create(cos(gun.angle-PI/2),sin(gun.angle-PI/2));
        temp = Matter.Vector.normalise(temp);
        temp = Matter.Vector.mult(temp, 8);

        //temp = Matter.Vector.normalise(temp);
        //temp = Matter.Vector.mult(temp,8);

        Matter.Body.setVelocity(this.bull, temp);
        Matter.Body.setPosition(this.bull,pos);
    }    
}