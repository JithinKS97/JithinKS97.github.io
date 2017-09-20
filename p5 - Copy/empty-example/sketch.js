var img = [];
var x = [];
var v = [];
var acc = [];
var a=0;
var dPos, dVel, aAcc;
var t = 0;
var move = 0;
var c1,c2,c3,c4;
var cx1,cx2,cx3,cx4;
var cv1,cv2,cv3,cv4;

function preload()
{
	for(var i=1;i<=14;i++)
	{
		x[i] = 0;
		v[i] = 0;
		a[i] = 0;
	  img[i] = loadImage("Images/"+i+".svg");
	}
	c1 = loadImage("Images/c1.svg")
	c2 = loadImage("Images/c2.svg")
	c3 = loadImage("Images/c3.svg")
	c4 = loadImage("Images/c4.svg")
}

function setup()
{
	createCanvas(1280,720);
	console.log(a);
	press = createVector(width/2, height/2);
	dPos = createVector(0,0);
	dVel = createVector();
	dAcc = createVector();

	cx1 = width/5;
	cx2 = 2*width/5;
	cx3 = 3*width/5;
	cx4 = 4*width/5;

	cv1 = random(-0.5,0.5);
	cv2 = random(-0.5,0.5);
	cv3 = random(-0.5,0.5);
	cv4 = random(-0.5,0.5);

}

function draw()
{
		image(img[1],x[1]+width/2,height/2);
		image(c1,cx1,width/30);
		image(c2,cx2,4*width/30);
		image(c3,cx3,3*width/30);
		image(c4,cx4,2*width/30);

		cx1+=cv1;
		cx2+=cv2;
		cx3+=cv3;
		cx4+=cv4;

		if(a==0)
			a = rotationX;

	for(var i=2;i<=14;i++)
	{
		imageMode(CENTER);
		if(i<=13)
		{
	    image(img[i],x[i]+width/2,height/2);
		}
		else
		{
			push();
			dVel.limit(2);
			rotate(dVel.x/6);
		  image(img[i],x[i]+width/2+dPos.x,height/2+dPos.y);
			pop();
		}

				var target;
				var mouseFromCenter = mouseX-width/2;
				target = map(mouseFromCenter,-width/2,width/2,-width/3,width/3);
		    acc[i] = (target - x[i]*(15-i))/(40*(15-i));
		    v[i]+=acc[i];
		    x[i]+=v[i];
		    v[i]*=0.4;

		//x[i] = ((a-rotationY)/((i+1)*(i+1)))*30;
	}
	dVel.add(dAcc);
	dPos.add(dVel);
	dAcc.set(map(noise(t),0,1,-0.02,0.02)+map(dPos.x,width/2,-width/2,-0.02,0.02),map(noise(t+1000),0,1,-0.01,0.01)+map(dPos.y,height/2,-height/2,-0.03,0.03));
	t += 0.01;
  pvel = mouseX - pmouseX;
}

function mousePressed()
{
	print(x[15]);
}
