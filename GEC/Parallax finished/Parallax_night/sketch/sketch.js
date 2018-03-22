var img = [];
var x = [];
var v = [];
var acc = [];
var a = [];
var dPos, dVel, aAcc;
var click = false;

var offx = [];
var offy = [];
var busv=0, busp=0, busa =0, timer = 0;

var lantern = [];
var light = [];
var lightUp = [1, 1, 1, 1, 1, 1];
var blight;
var p=0.7;

var mobile = false;


function preload()
{
	for(var i=1;i<=11;i++)
	{
		x[i] = 0;
		v[i] = 0;
		a[i] = 0;
		if(i==4)
			img[4] = loadImage("Cropped/4.png");
		else if(i==1)
		  img[1] = loadImage("Cropped/1.png");
		else if(i==3)
		  img[3] = loadImage("Cropped/3.png");
		else if(i==7)
		  img[7] = loadImage("Cropped/7.png");
		else if(i==5)
		  img[5] = loadImage("Cropped/5.png");
		else
			img[i] = loadImage("Cropped/"+i+".svg");
	}

	for(var i=1;i<=6;i++)
		light[i] = loadImage("window/"+i+".svg")
	
	blight = loadImage("Cropped/blight.svg");

	if( windowWidth < 2 * windowHeight/3 )
		mobile = true;
}

var ws,hs;
function setup()
{
	width = 1280;
	height = 720;
	
	ws = width/1280;
	hs = height/720;
	

	createCanvas(width, height);
	press = createVector(width/2, height/2);
	dPos = createVector(width/2,height/2);
	dVel = createVector();
	dAcc = createVector();


	offx[1]=-width/1.9309;
	offy[1]=-height/2.10;

	offx[2]=-width/1.9934;
	offy[2]=height/2.0250;

	offx[3]=width/19.1045;
	offy[3]=height/2.43312;

	offx[4]=width/5.4;
	offy[4]=height/2.9;

	offx[5]=width/7.1468;
	offy[5]=height/3.5651;

	offx[6]=-width/1.8903;
	offy[6]=height/1.5135;

	offx[7]=width/2.3881;
	offy[7]=height/2.2061;

	offx[8]=width/1.3474;
	offy[8]=height/1.6178;

	offx[9]=-width/4.8;
	offy[9]=height/1.4434;

	offx[10]=-width/2.2149;
	offy[10]=height/1.3284;

	offx[11]=width/1.5946;
	offy[11]=height/2.6913;

	for (var i = 0; i < 80; i++)
		lantern.push(new Lantern());
    for (var i = 0; i < lantern.length; i++)
	{
		lantern[i].img = loadImage("data/" + int(random(4)) + ".png");
		lantern[i].vel.y = -lantern[i].w / 100;
	}

}

function draw()
{

	if( timer%3 == 0)
	  flicker();
	image(img[1],offx[1],offy[1],img[1].width*ws,img[1].height*hs);

	for (var i = 0; i < lantern.length; i++)
	{
		lantern[i].display();
		lantern[i].upperbound();
		lantern[i].update();
	}


	for(var i=2;i<=11;i++)
	{
		imageMode(CORNER);
		if(i<=10 && i!=8 && i!=4)
	    image(img[i],x[i]+offx[i],offy[i],img[i].width*ws,img[i].height*hs);
		else if(i==11)
		{
			push();
			imageMode(CENTER);
			dVel.limit(10);
			translate(dPos.x, dPos.y);
			rotate(dVel.x/15);
			image(img[i],0,0,img[i].width*ws,img[i].height*hs);

			if(timer>=30)
			  fill(255,0,0);
			else
			  fill(0);


			noStroke();
			ellipse(img[i].width*ws/3,-img[i].height*hs/8,3,3);
			ellipse(-img[i].width*ws/3,-img[i].height*hs/8,3,3);
			pop();
			dVel.mult(0.97);
			imageMode(CORNER);
		}
		else if(i==8)
			{
				image(img[i],x[i]+offx[8]+busp,offy[8],img[i].width*ws,img[i].height*hs);
				image(blight,x[i]+offx[8]+busp-img[i].width*ws/2.2,offy[8],blight.width*ws,blight.height*hs);
			}
		else if(i==4)
		{
			image(img[i],x[i]+offx[i],offy[i],img[i].width*ws,img[i].height*hs);
			if(lightUp[0] != 0)
				image(light[1],x[i]+offx[i]+width/5.4065,offy[i]+height/65.5856,light[1].width*ws,light[1].height*hs);
			if(lightUp[1] != 0)
				image(light[2],x[i]+offx[i]+width/4.1605,offy[i]+height/65.5856,light[2].width*ws,light[2].height*hs);
			if(lightUp[2] != 0)
				image(light[3],x[i]+offx[i]+width/3.3750,offy[i]+height/65.5856,light[3].width*ws,light[3].height*hs);
			if(lightUp[3] !=0 )
				image(light[4],x[i]+offx[i]+width/2.8777,offy[i]+height/65.5856,light[4].width*ws,light[4].height*hs);
			if(lightUp[4] != 0)
				image(light[5],x[i]+offx[i]+width/2.4961,offy[i]+height/65.5856,light[5].width*ws,light[5].height*hs);
			if(lightUp[5] != 0)
			  image(light[6],x[i]+offx[i]+width/2.2061,offy[i]+height/65.5856,light[6].width*ws,light[6].height*hs);
			
		}

		var mouseFromCenter = mouseX-width/2;

    if(!mobile)
		{
	       var target;
		     target = map(mouseFromCenter,-width/2,width/2,-width/2.5,width/2.5);
		     acc[i] = (target - x[i]*(12-i))/(40*pow(12-i,2));
		     v[i]+=acc[i];
		     x[i]+=v[i];
		     v[i]*=0.4;
		}

    if(mobile)
		{
			  var rot = map(rotationX,-180,180,-15,15);
				x[i] = map(rot, -15, 15, -width/2.5, width/2.5)*10/pow((12-i),2);
				
    		busv += busa;
	    	busp += busv;
	    	busa = map(rot,-15,15,-0.05,0.05);
	    	busv*=0.99;
	    	if(x[8]+offx[8]+busp>width-img[8].width)
	    	{
	     		busv*=-1;
		    	busp = width-img[8].width-(x[8]+offx[8]);
	    	}
	    if(x[8]+offx[8]+busp<0)
	    {
		    busv*=-1;
		    busp = - (x[8]+offx[8]);
	    }
	 }
	 if(mouseX-pmouseX>0 || mouseY-pmouseY>0)
	   click = true;

  }


	var mouseN = createVector(mouseX, mouseY);
	if(click == false)
		mouseN.set(width/2, height/4);
	var accel = createVector(mouseN.x-dPos.x,mouseN.y-dPos.y);
	accel.mult(0.001);
	dVel.add(dAcc);
	dPos.add(dVel);
	dAcc.set(accel.x,accel.y);
	timer++;
	timer%=60;
}

function Lantern()
{
	this.pos = createVector(random(width), random(height/2));
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.w = random(width/55, width/35);
	this.v = 0;
	this.img;
  
	this.display = function()
	{
	  imageMode(CENTER);
	  image(this.img, this.pos.x, this.pos.y, this.w*ws, this.w*hs);
	  imageMode(CORNER);
	}
  
	this.upperbound = function()
	{
	  if (this.pos.y < -this.w)
		this.pos.y = height/2 + this.w;
	  if (this.pos.x > width + this.w / 2)
		this.pos.x = -this.w / 2
	  if (this.pos.x < -this.w / 2)
		this.pos.x = width + this.w / 2;
	}
  
	this.update = function()
	{
	  this.pos.add(this.vel);
	  this.vel.add(this.acc);
	  if (this.vel.x > 3)
		this.vel.x = 3;
	  if (this.vel.x < -3)
		this.vel.x = -3;
	  this.acc.mult(0);
	  this.vel.x *= 0.9;
	}
	this.applyForce = function(x)
	{
	  this.acc.add(x);
	}  
}

function flicker()
{
	if(p<10)
		p+=0.03;
	for(var i=0;i<=5;i++)
	{
		lightUp[i] = int(random(p));
	}
}
