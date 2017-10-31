var score = 0, but;

function setup()
{
    createCanvas(640, 360);
    createP('');
    but = createButton('tap');
    but.mousePressed(increment);


    var config = {
        apiKey: "AIzaSyCgqTlXL9s0kj52WcMKMjUgeIZt-RwW6sE",
        authDomain: "doodlechatapp.firebaseapp.com",
        databaseURL: "https://doodlechatapp.firebaseio.com",
        projectId: "doodlechatapp",
        storageBucket: "",
        messagingSenderId: "878865870327"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
      var ref = database.ref('scores');

      var data = {
          name:"Jithin",
          score:50
      }
      ref.push(data);
}

function increment()
{
    score++;
}

function draw()
{
    background(0);
    translate(width/2, height/2);
    textAlign(CENTER);
    textSize(width/8);
    fill(255);
    text(score,0,0);
}