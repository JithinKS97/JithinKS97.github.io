let nodes = [], graph, currMov = -1, source, destination, currSel = -1, prevA, a;

function setup()
{
  createCanvas(1500, 620);
  nodes[0] = new Node(width/5,height/4);
  nodes[1] = new Node(2*width/5,height/4);
  nodes[2] = new Node(3*width/5,height/4);
  nodes[3] = new Node(4*width/5,height/4);

  nodes[4] = new Node(width/5,height/2);
  nodes[5] = new Node(2*width/5,height/2);
  nodes[6] = new Node(3*width/5,height/2);
  nodes[7] = new Node(4*width/5,height/2);

  nodes[8] = new Node(width/5,3*height/4);
  nodes[9] = new Node(2*width/5,3*height/4);
  nodes[10] = new Node(3*width/5,3*height/4);
  nodes[11] = new Node(4*width/5,3*height/4);

  graph = new Graph(nodes);
  createP('source');
  source = createInput();
  source.input(inp);
  createP('destination');
  destination = createInput();
  destination.input(des);
}

let m = n =0;

function inp()
{
  m = this.value();
}

function des()
{
  n = this.value();
}

function draw()
{

  background(0);

  let a = djikstras(graph,m,n);
  a = a.map((item) => int(item));

  strokeWeight(8);
  stroke(250,80,90);
  noFill();
  beginShape();
  for(let i=0;i<a.length;i++)
  {
    vertex(nodes[a[i]].pos.x, nodes[a[i]].pos.y);
  }
  endShape();
  graph.display(nodes);
  for(i=0;i<nodes.length;i++)
  {
    nodes[i].display(i);
    nodes[i].isInside();
    nodes[i].moveNode();
  }

  prevA = a;
}

class Node
{
  constructor(x,y)
  {
    this.pos = createVector(x, y);
    this.mouseOver = false;
    this.move = false;
    this.d = 30;
    this.selected = false;
    this.deleted = false;
  }

  display(i)
  {
    fill(200,20,20);
    noStroke();
    if(this.deleted == false)
    {
      if(this.selected == true)
        fill(0,0,255);
      else
        fill(255,0,0);
      ellipse(this.pos.x, this.pos.y, this.d, this.d);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(32);
      fill(0,255,0);
      text(i, this.pos.x, this.pos.y);
    }


  }

  isInside()
  {
      if(dist(mouseX,mouseY,this.pos.x,this.pos.y)<this.d/2)
          this.mouseOver = true;
      else
          this.mouseOver = false;
  }
  moveNode()
  {
      if(this.move == true)
      {
          this.pos.x = mouseX;
          this.pos.y = mouseY;
      }
  }

}

function mousePressed()
{
  for(let i=0;i<nodes.length;i++)
  {
    if(nodes[i].mouseOver == true)
    {
      nodes[i].move = true;
      currMov = i;
      currSel = i;
      nodes[currSel].selected = !nodes[currSel].selected;
    }
  }
}

function mouseReleased()
{
  if(currMov>=0)
      nodes[currMov].move = false;
}

function keyPressed()
{
  if (keyCode == DELETE)
  {
    for(let i=0;i<nodes.length;i++)
    {
      if(nodes[i].selected == true)
      for(let j=0;j<nodes.length;j++)
      {
        graph.matrix[i][j] = Infinity;
        graph.matrix[j][i] = Infinity;
        nodes[i].deleted = true;
      }
    }
  }

}

class Graph
{
  constructor(nodes)
  {
    this.matrix = [[]];
    for(let i=0;i<nodes.length;i++)
    {
      this.matrix[i] = [];
      for(let j=0;j<nodes.length;j++)
        this.matrix[i][j] = Infinity;
    }
    this.matrix[0] = [0,0,Infinity,Infinity,0,Infinity,Infinity,Infinity,Infinity,0,Infinity,Infinity];
    this.matrix[1] = [0,0,0,Infinity,Infinity,Infinity,0,Infinity,Infinity,Infinity,Infinity,Infinity];
    this.matrix[2] = [Infinity,0,0,0,0,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity];
    this.matrix[3] = [Infinity,Infinity,0,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity];
    this.matrix[4] = [0,Infinity,0,Infinity,0,0,Infinity,Infinity,0,Infinity,Infinity,Infinity];
    this.matrix[5] = [Infinity,Infinity,Infinity,Infinity,0,0,0,Infinity,Infinity,Infinity,Infinity,Infinity];
    this.matrix[6] = [Infinity,0,Infinity,Infinity,Infinity,0,0,0,Infinity,Infinity,Infinity,Infinity];
    this.matrix[7] = [Infinity,Infinity,Infinity,0,Infinity,Infinity,0,0,Infinity,0,Infinity,0];
    this.matrix[8] = [Infinity,Infinity,Infinity,Infinity,0,Infinity,Infinity,Infinity,0,0,Infinity,Infinity];
    this.matrix[9] = [0,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,0,0,0,0,Infinity];
    this.matrix[10] = [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,0,0,0];
    this.matrix[11] = [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,0,Infinity,Infinity,0,0];
  }
  display(nodes)
  {
    for(let i=0;i<nodes.length;i++)
    {
      for(let j=0;j<nodes.length;j++)
      {
        if(this.matrix[i][j]!=Infinity)
        {
          stroke(150,150,155,100);
          strokeWeight(5);
          this.matrix[i][j] = dist(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
          line(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
        }
      }
    }
  }
}

/**
 * Basic priority queue implementation. If a better priority queue is wanted/needed,
 * this code works with the implementation in google's closure library (https://code.google.com/p/closure-library/).
 * Use goog.require('goog.structs.PriorityQueue'); and new goog.structs.PriorityQueue()
 */
function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function () {
    return this._nodes.shift().key;
  };
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function () {
    return !this._nodes.length;
  };
}

/**
 * Pathfinding starts here
 */
function Graph1(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    this.vertices[name] = edges;
  };

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        path = [];

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  }
}

var g = new Graph1();

function djikstras(graph,source,dest)
{
  for(let i=0;i<graph.matrix.length;i++)
  {
    let obj = {};

    for(let j=0;j<graph.matrix[i].length;j++)
    {
      if(graph.matrix[i][j]!=0 && graph.matrix[i][j]!= Infinity)
      obj[j] = graph.matrix[i][j];
    }
    g.addVertex(i.toString(),obj);
  }
  return (g.shortestPath(source.toString(), dest.toString()).concat([source.toString()]).reverse());
}
