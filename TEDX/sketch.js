let b = [], t = 0, touch = false, d, co, c = [[78, 150], [93, 150], [107, 150], [123, 150], [100, 163], [100, 178], [100, 193], [100, 209], [188, 150], [174, 150], [160, 150], [146, 150], [146, 164], [146, 178], [146, 193], [146, 207], [160, 207], [174, 207], [188, 207], [160, 178], [174, 178], [188, 178], [216, 150], [232, 150], [247, 153], [258, 165], [263, 180], [257, 194], [246, 205], [232, 207], [216, 207], [216, 164], [216, 178], [216, 193], [284, 128], [292, 135], [298, 142], [307, 147], [314, 154], [314, 129], [306, 136], [291, 148], [284, 154], [384, 158], [378, 150], [368, 146], [356, 146], [344, 150], [336, 159], [332, 169], [332, 180], [333, 190], [338, 200], [347, 207], [356, 209], [367, 209], [377, 205], [384, 198], [385, 189], [385, 179], [375, 179], [366, 179], [448, 146], [438, 146], [429, 146], [419, 146], [410, 147], [410, 157], [410, 168], [410, 177], [410, 188], [410, 198], [410, 209], [419, 208], [429, 208], [440, 208], [450, 209], [421, 177], [432, 177], [443, 177], [514, 159], [508, 150], [498, 145], [488, 145], [478, 150], [471, 159], [467, 168], [467, 179], [468, 189], [472, 197], [478, 205], [488, 209], [498, 209], [508, 204], [514, 195], [528, 145], [539, 144], [549, 144], [558, 144], [569, 144], [549, 155], [549, 167], [549, 178], [549, 189], [549, 199], [549, 209]];

function setup() {
    let a = createCanvas(640, 360, WEBGL);
    for (let i = 0; i < c.length; i++) {
        d = 15 + abs(6 * cos(t));

        let darkRed =  color(255 - random(0,20), random(0,20), 0 + random(0,20));
        let lightRed = color(255 - random(0,20), 20 - random(0,20), 20 + random(0,20))

        if (i < 8)
            co = darkRed;
        else if(i<22)
            co = lightRed
        else if(i<34)
            co = darkRed;
        else if(i<43)
            co = lightRed;
        else if(i<62)
            co = color(255);
        else if(i<80)
            co = color(230)
        else if(i<95)
            co = color(255);
        else if(i<108)
            co = color(230);
        
        if(i<34)
            d = 9 + abs(4 * cos(t));
        else
            d = 6 + abs(3 * cos(t));

        if(i<43)
            b[i] = new ball(c[i][0] - width / 3.5, c[i][1] - height / 1.5, d, co);
        else
            b[i] = new ball(c[i][0] - width / 1.4, c[i][1] - height / 2.5, d, co); 
        b[i].vel.set(20*sin(t), 20*cos(t), 20*cos(t-1));
        t += 0.2;
    }
}

function draw() {
    background(0);

    for (let i = 0; i < b.length; i++)
    {
        b[i].display();
        b[i].update();
        let springForce = createVector(b[i].pos.x, b[i].pos.y, b[i].pos.z);
        springForce.sub(b[i].initPos.x, b[i].initPos.y, b[i].initPos.z);
        springForce.mult(-0.05);
        b[i].applyForce(springForce);
        let velNew = createVector(b[i].initPos.x, b[i].initPos.y);
        let mouse = createVector(mouseX - width / 2, mouseY - height / 2);
        velNew.sub(mouse);
        velNew.normalize();
        b[i].trigger(velNew.x, velNew.y);
    }
}

class ball {
    constructor(x, y, d, c) {
        this.initPos = createVector(x, y, 0);
        this.pos = createVector(x, y, 0);
        this.vel = createVector();
        this.acc = createVector();
        this.d = d;
        this.c = c;
    }

    display() {
        noStroke();
        push();
        fill(this.c);
        translate(this.pos.x, this.pos.y, this.pos.z);
        rect(0, 0, this.d, this.d);
        pop();
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(0.97);
        this.acc.mult(0);
        this.vel.limit(10);
    }

    isHovering() {
        if (dist(mouseX - width / 2, mouseY - height / 2, this.pos.x, this.pos.y) < this.d * 10)
            return true;
        else
            return false;
    }

    trigger(x, y) {

        if(window.innerWidth<600)
        {
            if (this.isHovering() == true && touch == true)
                this.vel.set(x * 3, y * 3, 10);
        }
        else
        {
            if (this.isHovering() == true)
            this.vel.set(x * 3, y * 3, 10);
        }
    }

    applyForce(f) {
        this.acc = f;
    }
}

function touchStarted()
{
    touch = true;
}

function touchEnded()
{
    touch = false;
}
