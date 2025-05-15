
function setup(){
    createCanvas(windowWidth, windowHeight).position(0,0)
    a=1000
    stroke(random(0,255),random(0,255),random(0,255))
}
function draw(){
    fill(0,0,0,0)
    ellipse(windowWidth/2,windowHeight/2, a,a);
    a=mouseX
}

function mouseClicked(){
    clear()
    stroke(random(0,255),random(0,255),random(0,255))
}
