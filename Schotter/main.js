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

//NEW - I already have transform functionality in most of my function library, so these are pretty simple
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
let startX = 0, startY = 0; //Square Generation Coordinates (to be used to determine locations of groups)
let recreation = document.querySelector("#recreation");
let factor = 0;
let rotationRange = 3;
let translationRange = 0.2;

//==== RECREATE SCHOTTER ====
recreation.innerHTML += group(0, "none", "black", "0.2"); //Create Group
for (let i = 0; i < 24; i++){ //ROWS  
    startX = 0;
    for (let i = 0; i < 12; i++){ //COLUMNS
        document.querySelector("#group0").innerHTML += rect(startX, startY, 5, 5, 
            `${translate(getRandom(-(translationRange * factor), (translationRange * factor)))} 
            ${rotate(getRandom(-(rotationRange * factor), (rotationRange * factor)), startX + 2.5, startY + 2.5)}`, "black");
        startX += 5;
    }
    startY += 5;
    factor++;
}

//==== FIELDS FOR VARIATION ====
let variation = document.querySelector("#variation");
variation.innerHTML += group(1, "none", "black", "0.2"); //Create Group
startX = 2.5, startY = 132.5; //Square Generation Coordinates (to be used to determine locations of groups)
let scaleNum = 1;
factor = 1;

//==== VARIATION OF SCHOTTER ====
for (let i = 0; i < 24; i++){ //ROWS
    startX = 0;
    for (let i = 0; i < 12; i++){ //COLUMNS
        document.querySelector("#group1").innerHTML += circle(startX, startY, getRandom(-(scaleNum * factor) / 2, scaleNum * factor), `${translate(getRandom(-(translationRange + factor), (translationRange + factor)), getRandom(-(translationRange + factor), (translationRange + factor)))}`, "black");
        startX += 5;
    }

    startY += 5;
    factor += 0.25;
}