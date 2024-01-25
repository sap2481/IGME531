//Helper Functions (Taken from 330)
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};
const getRandomColor = () => {
    const floor = 35; // so that colors are not too bright or too dark 
    const getByte = () => getRandom(floor,255-floor);
    return `rgba(${getByte()},${getByte()},${getByte()},1)`;
};

//Loop function to repeat drawing
let num = 0;
function loop() {
    num++;
    if (num < 10000){
        setTimeout(loop, 1000/100);
        draw();
    }
    else{
        return;
    }
}

//Initiate Canvas & Button
const init = () => {
    let canvasElement = document.querySelector("canvas");
    drawInit(canvasElement);
    document.querySelector("#activate").addEventListener("click", loop);
}

let ctx,canvasWidth,canvasHeight;
const drawInit = (canvasElement) => {
    //Set Variables
    ctx = canvasElement.getContext("2d");
    canvasWidth = canvasElement.width;
    canvasHeight = canvasElement.height;
    
    //Draw Background
    ctx.save();
    ctx.fillStyle = "white";
    ctx.globalAlpha = 1;
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    ctx.restore();
}

const draw = () => {
    //Draw Shapes!
    ctx.save();
    ctx.globalAlpha = getRandom(0, 1);
    ctx.fillStyle = getRandomColor();
    ctx.beginPath();
    if (num % 2 == 0){ //Rectangle
        ctx.fillRect(getRandom(0, canvasWidth), getRandom(0, canvasHeight), getRandom(0, canvasWidth), getRandom(0, canvasHeight));
    }
    else{ //Circle
        ctx.arc(getRandom(0, canvasWidth), getRandom(0, canvasHeight), getRandom(1, 250), 0, 2 * Math.PI, false);
        ctx.fill();
    }
    ctx.closePath();
    ctx.restore();
    console.log("Shape Drawn");
}

init();