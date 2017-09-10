var img;

function setup()
{
  createCanvas(1000,500);
  img = loadImage("hello.svg");
}

function draw()
{
  image(img,0,0);
}
