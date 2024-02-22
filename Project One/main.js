//==== FUNCTIONS ====
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};
const rect = (x, y, width, height, transform="", stroke="") => {
    let html = `<rect x="${x}" y="${y}" width="${width}" height="${height}" transform="${transform}" stroke="${stroke}"/>`;
    return html;
}
const circle = (x, y, radius, transform="", stroke="") => {
    let html = `<circle cx="${x}" cy="${y}" r="${radius}" transform="${transform}" stroke="${stroke}"/>`;
    return html;
}
const ellipse = (x, y, rx, ry, transform="", stroke="") => {
    let html = `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="${transform}" stroke="${stroke}"/>`;
    return html;
}
const polygon = (pointArray, transform="", stroke="") => {
    let html = `<polygon points="`;
    for (let p of pointArray){
        html += `${p} `;
    }
    html += `" transform="${transform}" stroke="${stroke}"/>`;
    return html;
}
const line = (x1, y1, x2, y2, stroke="", strokeWidth="") => {
    let html = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
    return html;
}
const group = (groupNum, fill, stroke, strokeWidth) => {
    let html = `<g id="group${groupNum}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"></g>`;
    return html;
}
const polyline = (pointArray, transform="", stroke="") => {
    let html = `<polyline points="`;
    for (let p of pointArray){
        html += `${p} `;
    }
    html += `" transform="${transform}" stroke="${stroke}"/>`;
    return html;
}
const path = (pointArray, transform="", stroke="") => {
    let html = `<path d="M `;
    for (let p of pointArray){
        html += `${p} L `;
    }
    html += `" transform="${transform}" stroke="${stroke}"/>`;
    return html;
}

//Arc-Pathing Works As Follows: "M startPointX startPointY A radiusX radiusY xRotation largeArcFlag sweepFlag endPointX endPointY"
//NOTE: Endpoint is UNITS FROM THE STARTING POINT, not units on the grid itself
const arcPath = (startPointX, startPointY, radiusX, radiusY, xRotation, largeArcFlag, sweepFlag, endPointX, endPointY, transform="", fill="", stroke="") =>{ //Written for arcing paths so I can draw quarter-arc segments
    let html = `<path d="M `;
    html += `${startPointX},${startPointY} a${radiusX},${radiusY} ${xRotation} ${largeArcFlag} ${sweepFlag} ${endPointX},${endPointY}`;
    html += `" transform="${transform}" fill="${fill}" stroke="${stroke}"/>`;
    return html;
}

const translate = (x, y=0) => {
    return `translate(${x} ${y})`;
}
const rotate = (a, x="", y="") => {
    return `rotate(${a} ${x} ${y})`;
}
const scale = (x, y=x) => {
    return `scale(${x} ${y})`;
}

//==== FIELDS ====
let startX = 0;
let startY = 0;
let penPlot = document.querySelector("#penPlot");
randNum = 1;

//==== CREATE THE PENPLOT ====
for (let i = 0; i < 10; i++){ //ROWS
    startX = 0;
    for (let j = 0; j < 10; j++){ //COLUMNS
        randNum = getRandom(0, 4); //Get Random Number

        if (randNum >= 0 && randNum < 1){ //Right-Facing Road
            penPlot.innerHTML += arcPath(startX + 7, startY, 3, 3, 0, 0, 0, 3, 3); //Top arc
            penPlot.innerHTML += arcPath(startX + 7, startY + 10, 3, 3, 0, 0, 1, 3, -3); //Bottom arc
            penPlot.innerHTML += arcPath(startX, startY + 3, 2, 2, 0, 0, 1, 0, 4); //End arc
            penPlot.innerHTML += line(startX + 3, startY, startX + 3, startY + 10); //Long Vertical Line
            penPlot.innerHTML += line(startX + 5, startY + 1, startX + 5, startY + 3, "yellow", 0.2); //Vertical Street Line 1 (X value could be +5 or +5.5)
            penPlot.innerHTML += line(startX + 5, startY + 7, startX + 5, startY + 9, "yellow", 0.2); //Vertical Street Line 2 (X value could be +5 or +5.5)
            penPlot.innerHTML += line(startX + 7, startY + 5, startX + 9, startY + 5, "yellow", 0.2); //Horizontal Street Line
        }
        else if (randNum >= 1 && randNum < 2){ //Left-Facing
            penPlot.innerHTML += arcPath(startX, startY + 3, 3, 3, 0, 0, 0, 3, -3); //Top arc
            penPlot.innerHTML += arcPath(startX, startY + 7, 3, 3, 0, 0, 1, 3, 3); //Bottom arc
            penPlot.innerHTML += line(startX + 7, startY, startX + 7, startY + 10); //Long Vertical Line
            penPlot.innerHTML += arcPath(startX + 10, startY + 3, 2, 2, 0, 0, 0, 0, 4); //End arc
            penPlot.innerHTML += line(startX + 5, startY + 1, startX + 5, startY + 3, "yellow", 0.2); //Vertical Street Line 1
            penPlot.innerHTML += line(startX + 5, startY + 7, startX + 5, startY + 9, "yellow", 0.2); //Vertical Street Line 2
            penPlot.innerHTML += line(startX + 1, startY + 5, startX + 3, startY + 5, "yellow", 0.2); //Horizontal Street Line
        }
        else if (randNum >= 2 && randNum < 3){ //Down-Facing
            penPlot.innerHTML += line (startX, startY + 3, startX + 10, startY + 3); //Long Horizontal Line
            penPlot.innerHTML += arcPath(startX, startY + 7, 3, 3, 0, 0, 1, 3, 3); //Left arc
            penPlot.innerHTML += arcPath(startX + 7, startY + 10, 3, 3, 0, 0, 1, 3, -3); //Right arc
            penPlot.innerHTML += arcPath(startX + 3, startY, 2, 2, 0, 0, 0, 4, 0); //End arc
            penPlot.innerHTML += line(startX + 1, startY + 5, startX + 3, startY + 5, "yellow", 0.2); //Horizontal Street Line 1
            penPlot.innerHTML += line(startX + 7, startY + 5, startX + 9, startY + 5, "yellow", 0.2); //Horizontal Street Line 2
            penPlot.innerHTML += line(startX + 5, startY + 7, startX + 5, startY + 9, "yellow", 0.2); //Vertical Street Line
        }
        else if (randNum >= 3 && randNum <= 4){ //Up-Facing
            penPlot.innerHTML += arcPath(startX, startY + 3, 3, 3, 0, 0, 0, 3, -3); //Top arc
            penPlot.innerHTML += arcPath(startX + 10, startY + 3, 3, 3, 0, 0, 1, -3, -3); //Bottom arc
            penPlot.innerHTML += line(startX, startY + 7, startX + 10, startY + 7);
            penPlot.innerHTML += arcPath(startX + 3, startY + 10, 2, 2, 0, 0, 1, 4, 0); //End Arc
            penPlot.innerHTML += line(startX + 1, startY + 5, startX + 3, startY + 5, "yellow", 0.2); //Horizontal Street Line 1
            penPlot.innerHTML += line(startX + 7, startY + 5, startX + 9, startY + 5, "yellow", 0.2); //Horizontal Street Line 2
            penPlot.innerHTML += line(startX + 5, startY + 1, startX + 5, startY + 3, "yellow", 0.2); //Vertical Street Line
        }

        startX += 10;
    }
    startY += 10;
}

//==== MORE TECHNO VERSION WITH FILL THAT I CAN'T USE ====
/*
startX = 110;
startY = 0;
for (let i = 0; i < 10; i++){ //ROWS
    startX = 110;
    for (let j = 0; j < 10; j++){ //COLUMNS
        randNum = getRandom(0, 4); //Get Random Number

        if (randNum >= 0 && randNum < 1){ //Right-Facing Road
            penPlot.innerHTML += arcPath(startX + 7, startY, 3, 3, 0, 0, 0, 3, 3, "", "white"); //Top arc
            penPlot.innerHTML += arcPath(startX + 7, startY + 10, 3, 3, 0, 0, 1, 3, -3, "", "white"); //Bottom arc
            penPlot.innerHTML += arcPath(startX, startY + 3, 2, 2, 0, 0, 1, 0, 4, "", "white"); //End arc
            penPlot.innerHTML += line(startX + 3, startY, startX + 3, startY + 10); //A Vertical Line
        }
        else if (randNum >= 1 && randNum < 2){ //Left-Facing
            penPlot.innerHTML += arcPath(startX, startY + 3, 3, 3, 0, 0, 0, 3, -3, "", "white"); //Top arc
            penPlot.innerHTML += arcPath(startX, startY + 7, 3, 3, 0, 0, 1, 3, 3, "", "white"); //Bottom arc
            penPlot.innerHTML += line(startX + 7, startY, startX + 7, startY + 10);
            penPlot.innerHTML += arcPath(startX + 10, startY + 3, 2, 2, 0, 0, 0, 0, 4, "", "white"); //End arc
        }
        else if (randNum >= 2 && randNum < 3){ //Down-Facing
            penPlot.innerHTML += line (startX, startY + 3, startX + 10, startY + 3);
            penPlot.innerHTML += arcPath(startX, startY + 7, 3, 3, 0, 0, 1, 3, 3, "", "white"); //Left arc
            penPlot.innerHTML += arcPath(startX + 7, startY + 10, 3, 3, 0, 0, 1, 3, -3, "", "white"); //Right arc
            penPlot.innerHTML += arcPath(startX + 3, startY, 2, 2, 0, 0, 0, 4, 0, "", "white"); //End arc
        }
        else if (randNum >= 3 && randNum <= 4){ //Up-Facing
            penPlot.innerHTML += arcPath(startX, startY + 3, 3, 3, 0, 0, 0, 3, -3, "", "white"); //Top arc
            penPlot.innerHTML += arcPath(startX + 10, startY + 3, 3, 3, 0, 0, 1, -3, -3, "", "white"); //Bottom arc
            penPlot.innerHTML += line(startX, startY + 7, startX + 10, startY + 7);
            penPlot.innerHTML += arcPath(startX + 3, startY + 10, 2, 2, 0, 0, 1, 4, 0, "", "white"); //End Arc
        }

        startX += 10;
    }
    startY += 10;
}
//NOTE TO FUTURE SAM
//Okay Sam, this looks decent. The prof may think you phoned this in but you know you didn't so go you
//Before class, see if you can fuck with the coloring of it a bit, maybe make each tile a different color
//Could also add some 'perlin' noise to try and get colors to group together a bit. Something to think about.
//ALSO: Show off when you change the fill from "none" to "black". Black looks better, but I can't fuck with fill cuz the penplotter won't do it


/*
penPlot.innerHTML += arcPath("10,0 a10,10 0 0,0 10,10"); //Concave-Up Right-Facing Quarter-Arc
penPlot.innerHTML += arcPath("10,20 a10,10 0 0,1 10,-10"); //Concave-Down Right-Facing Quarter-Arc
penPlot.innerHTML += arcPath("10,0 a10,10 0 0,1 -10,10") //Concave-Up Left-Facing Quarter-Arc
penPlot.innerHTML += arcPath("10,20 a10,10 0 0,0 -10,-10") //Concave-Down Left-Facing Quarter-Arc


//Right-Facing Road
penPlot.innerHTML += arcPath(7,0,3,3, 0, 0, 0, 3,3); //Top arc
penPlot.innerHTML += arcPath(7,10,3,3,0,0,1,3,-3); //Bottom arc
penPlot.innerHTML += arcPath(0, 3, 2.2, 2.2, 0, 0, 1, 0, 4); //End arc
penPlot.innerHTML += line(3, 0, 3, 10); //A Vertical Line

//Down-Facing Road
penPlot.innerHTML += line (10, 3, 20, 3);
penPlot.innerHTML += arcPath(10, 7, 3, 3, 0, 0, 1, 3, 3); //Left arc
penPlot.innerHTML += arcPath(17, 10, 3, 3, 0, 0, 1, 3, -3); //Right arc
penPlot.innerHTML += arcPath(13, 0, 2.2, 2.2, 0, 0, 0, 4, 0); //End arc

//Left-Facing Road
penPlot.innerHTML += arcPath(20, 3, 3, 3, 0, 0, 0, 3, -3); //Top arc
penPlot.innerHTML += arcPath(20, 7, 3, 3, 0, 0, 1, 3, 3); //Bottom arc
penPlot.innerHTML += line(27, 0, 27, 10);
penPlot.innerHTML += arcPath(30, 3, 2.2, 2.2, 0, 0, 0, 0, 4); //End arc

//Upward-Facing Road
penPlot.innerHTML += arcPath(30, 3, 3, 3, 0, 0, 0, 3, -3); //Top arc
penPlot.innerHTML += arcPath(40, 3, 3, 3, 0, 0, 1, -3, -3); //Bottom arc
penPlot.innerHTML += line(30, 7, 40, 7);
penPlot.innerHTML += arcPath(33, 10, 2.2, 2.2, 0, 0, 1, 4, 0); //End Arc
*/