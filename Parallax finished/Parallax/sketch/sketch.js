var img = [];
var x = [];
var v = [];
var acc = [];
var a = [];
var dPos, dVel, aAcc;
var c1,c2,c3,c4;
var cx1,cx2,cx3,cx4;
var cv1,cv2,cv3,cv4;
var offx = [];
var offy = [];
var busv=0, busp=0, busa =0;
var click = false;

function preload()
{
	for(var i=1;i<=14;i++)
	{
		x[i] = 0;
		v[i] = 0;
		a[i] = 0;
	    img[i] = loadImage("Cropped/"+i+".svg");
	}
	c1 = loadImage("Cropped/c1.svg")
	c2 = loadImage("Cropped/c2.svg")
	c3 = loadImage("Cropped/c3.svg")
	c4 = loadImage("Cropped/c4.svg")
}

function setup()
{
	createCanvas(1280,720);
	press = createVector(width/2, height/2);
	dPos = createVector(width/2,height/2);
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

	offx[1]=-width/1.9309;
	offy[1]=-height/2.10;

	offx[2]=-width/1.9934;
	offy[2]=height/2.0250;

	offx[3]=width/19.1045;
	offy[3]=height/2.43312;

	offx[4]=width/5.7;
	offy[4]=height/3.0132;

	offx[5]=width/2.29;
	offy[5]=height/1.9176;

	offx[6]=width/7.1468;
	offy[6]=height/3.5651;

	offx[7]=-width/1.8903;
	offy[7]=height/1.5135;

	offx[8]=width/2.4042;
	offy[8]=height/2.1557;

	offx[9]=width/2.4353;
	offy[9]=height/1.8105;

	offx[10]=width/15.0588;
	offy[10]=height/1.9863;

	offx[11]=width/1.3689;
	offy[11]=height/1.6354;


	offx[12]=-width/4.5342;
	offy[12]=height/1.4434;

	offx[13]=-width/2.2149;
	offy[13]=height/1.3284;

	offx[14]=width/1.5946;
	offy[14]=height/2.6913;

}

function draw()
{
	image(img[1],offx[1],offy[1]);
	image(c1,cx1,width/30);
	image(c2,cx2,4*width/30);
	image(c3,cx3,3*width/30);
	image(c4,cx4,2*width/30);

	cx1+=cv1;
	cx2+=cv2;
	cx3+=cv3;
	cx4+=cv4;

	if(cx1-c1.width>width)
	  cx1 = -c1.width;
	if(cx1<-c1.width)
	  cx1 = width+c1.width;

	if(cx2-c2.width>width)
		cx2 = -c2.width;
	if(cx2<-c2.width)
		cx2 = width+c2.width;

	if(cx3-c3.width>width)
		cx3 = -c3.width;
	if(cx3<-c3.width)
		cx3 = width+c3.width;

	if(cx4-c4.width>width)
		cx4 = -c4.width;
	if(cx4<-c4.width)
		cx4 = width+c4.width;


	for(var i=2;i<=14;i++)
	{
		imageMode(CORNER);
		if(i<=13 && i!=11)
		{
	    image(img[i],x[i]+offx[i],offy[i]);
		}
		else if(i==14)
		{
			push();
			imageMode(CENTER);
			dVel.limit(5);
			translate(dPos.x, dPos.y);
			rotate(dVel.x/10);
		    image(img[i],0,0);
			pop();
			dVel.mult(0.97);
			imageMode(CORNER);
		}
		else if(i==11)
		{
			image(img[i],x[i]+offx[11]+busp,offy[11]);
		}
		var mouseFromCenter = mouseX-width/2;

		var mobile = false;

        if(!mobile)
		{
	         var target;
		     target = map(mouseFromCenter,-width/2,width/2,-width/2.5,width/2.5);
		     acc[i] = (target - x[i]*(15-i))/(40*pow(15-i,2));
		     v[i]+=acc[i];
		     x[i]+=v[i];
		     v[i]*=0.4;
		}

		if(mobile)
		{
			var rot = map(rotationY,-180,180,-15,15);
			x[i] = map(rot, -15, 15, -width/2.5, width/2.5)*10/pow((15-i),2);
			
		    busv += busa;
		    busp += busv;
			busa = map(rot,-15,15,-0.05,0.05);
			busv*=0.99;
			if(x[11]+offx[11]+busp>width-img[11].width)
			{
				 busv*=-1;
				busp = width-img[11].width-(x[11]+offx[11]);
			}
			if(x[11]+offx[11]+busp<-img[11].width+img[11].width)
			{
				busv*=-1;
				busp = - (x[11]+offx[11]);
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
}