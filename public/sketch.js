let xStart = 0
let x;
let y ;
let xspeed = 3;
let yspeed = 2;
rSize = 3;
let r = 3;
function setup(){
   let canvas = createCanvas(windowWidth, windowHeight);
       canvas.position(0,0);
    fill(0,0,0,255)
    stroke(random(0,255),random(0,255),random(0,255),200);
    drawingContext.shadowOffsetX = 2
    drawingContext.shadowOffsetY = -2
    drawingContext.shadowBlur = 2;
    drawingContext.shadowColor = 'grey'
    fill(random(0,255),random(0,255),random(0,255),40)
    toggle = false;
    frameRate(60);
    x = random(0, windowWidth);
    y = 0;
}

function draw(){
    ellipse(x, y, r , r);
    x= x + xspeed * noise(random(1,4));
    y= y + yspeed * noise(2);


    if(x >= windowWidth || x <= 0){ 
        xspeed = -xspeed; 
        randomize();
    }
    if(y >= windowHeight || y <= 0){
        r= r + rSize;
        yspeed = -yspeed;
        randomize();
    }
    yspeed++;
    r++;
    if(r > windowWidth + windowHeight){
        r = 1;
        x = random(0, windowWidth);
        y = 0;
        xspeed = -3;
        yspeed = -2;
    }
}

function randomize(){
    stroke(random(0,255),random(0,255),random(0,255));
    fill(random(0,255),random(0,255),random(0,255),40);

}
let clicked = false
function mouseClicked(){
    x=mouseX;
    y=mouseY;
    yspeed = 3;
    xspeed =2;
    r = 2;

}


function doubleClicked(){
    noLoop();
}