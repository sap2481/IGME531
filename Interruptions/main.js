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
const line = (x1, y1, x2, y2, stroke="") => {
    let html = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}"/>`;
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
const translate = (x, y=0) => {
    return `translate(${x} ${y})`;
}
const rotate = (a, x="", y="") => {
    return `rotate(${a} ${x} ${y})`;
}
const scale = (x, y=x) => {
    return `scale(${x} ${y})`;
}

//==== FIELDS FOR RECREATION ====
let startX = getRandom(0, 4), startY = getRandom(0, 2); //Square Generation Coordinates (to be used to determine locations of groups)
let recreation = document.querySelector("#recreation");
let factor = 5;

//==== RECREATE INTERRUPTIONS ====
recreation.innerHTML += group(0, "none", "black", "0.2"); //Create Group
for (let i = 0; i < 30; i++){ //ROWS
    startX = getRandom(0, 4);
    for (let i = 0; i < 60; i++){ //COLUMNS
        document.querySelector("#group0").innerHTML += line(startX, startY, startX + getRandom(-factor, factor), startY + getRandom(-factor, factor));
        startX += getRandom(0, 3);
    }
    startY += getRandom(2, 4);
}

//==== FIELDS FOR VARIATION ====
let variation = document.querySelector("#variation");
variation.innerHTML += group(1, "none", "black", "0.2"); //Create Group
startX = getRandom(0, 4), startY = getRandom(0, 2) + 50; //Square Generation Coordinates
factor = 5;
let randNum;

//==== VARIATION OF INTERRUPTIONS ====
variation.innerHTML += group(1, "none", "black", "0.2");
for (let i = 0; i < 25; i++){ //ROWS
    startX = getRandom(0, 4);
    for (let i = 0; i < 35; i++){ //COLUMNS
        randNum = getRandom(0, 3); //Get random number for shape generation
        console.log(randNum);
        if (randNum >= 0 && randNum < 1){ //Rects
            document.querySelector("#group1").innerHTML += rect(startX, startY, getRandom(0, factor), getRandom(0, factor), rotate(getRandom(0, 60), startX, startY));
        }
        else if (randNum >= 1 && randNum < 2){ //Ellipses
            document.querySelector("#group1").innerHTML += ellipse(startX, startY, getRandom(0, factor), getRandom(0, factor), rotate(getRandom(0, 60), startX, startY));
        }
        else if (randNum >= 2 && randNum < 3){ //Lines
            document.querySelector("#group1").innerHTML += line(startX, startY, startX + getRandom(-factor, factor), startY + getRandom(-factor, factor));
        }
        startX += getRandom(2, 4);
    }
    startY += getRandom (2, 4);
}