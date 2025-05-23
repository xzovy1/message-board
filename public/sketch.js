function setup(){
   let canvas = createCanvas(windowWidth, windowHeight);
       canvas.position(0,0);
    fill(0,0,0,255)
    stroke(random(0,255),random(0,255),random(0,255))
    drawingContext.shadowOffsetX = 2
    drawingContext.shadowOffsetY = -2
    drawingContext.shadowBlur = 2;
    drawingContext.shadowColor = 'grey'
    fill(random(0,255),random(0,255),random(0,255))
}

function draw(){
    if(mouseX > windowWidth / 3 && mouseY > windowHeight / 3){
        ellipse(mouseY - 200 , mouseX - 200, 30, 30);
        rect(mouseX , mouseY , 30, 30);
    }else{
        ellipse(mouseY , mouseX , 30, 30);
        rect(mouseX , mouseY , 30, 30);
    }
    console.log(mouseX, mouseY)
}

function mouseClicked(){
    stroke(random(0,255),random(0,255),random(0,255))
    fill(random(0,255),random(0,255),random(0,255))
}

function doubleClicked(){
    clear();
}