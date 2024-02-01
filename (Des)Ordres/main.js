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

//==== NEW ====
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

//==== FIELDS FOR RECREATION ====
let groupNum = 1; //Group Counter
let startX = 0, startY = 0; //Square Generation Coordinates (to be used to determine locations of groups)
let groupX = 0, groupY = 0; //Square Generation Coordinates (to be used within groups)
let width = 10, height = 10; //Width & Height of Each Square

let recreation = document.querySelector("#recreation");

//==== RECREATE (DES)ORDRES ====
for (let i = 0; i < 4; i++){ //ROWS
    
    startX = 1;
    
    for (let i = 0; i < 18; i++){ //COLUMNS
        
        recreation.innerHTML += group(groupNum, "white", "black", "0.2"); //Create Group
        
        for (let i = 0; i < getRandom(4,6); i++){ //INNER RECTS
            
            document.querySelector(`#group${groupNum}`).innerHTML += rect(groupX, groupY, width, height); //Create Rect
            groupX += getRandom(0.5, 1), groupY += getRandom(0.5, 1); //Change groupX & groupY by a random decimal between 0.5 and 1
            width -= getRandom(1, 2), height -= getRandom(1, 2); //Change width & height by a random number between 1 and 2

        }

        groupNum++; //Don't add to the same group
        width = getRandom(9, 10), height = getRandom(9, 10); //Reset Width & Height to random number between 9 and 10.
        groupX = startX, groupY = startY; //Reset values
        startX += 10;

    }

    startY += 10;
}

//==== FIELDS FOR VARIANT ====
let variation = document.querySelector("#variation");
startX = 10, startY = 40; //Square Generation Coordinates (to be used to determine locations of groups)
groupX = 10, groupY = 40; //Square Generation Coordinates (to be used within groups)
let scaleNum = 5;

//variation.innerHTML += polyline(["60,60", "70,70", "60,80", "50,70"], "", "black");

//==== VARIANT OF (DES)ORDRES ====
for (let i = 0; i < 4; i++){ //ROWS

    startX = 0;
    for (let i = 0; i < 18; i++){ //COLUMNS

        variation.innerHTML += group(groupNum, "none", "black", "0.2"); //Create Group
        
        for (let i = 0; i < getRandom(2,4); i++){ //INNER SHAPES

            //Create Polyline Diamond (this works, but you can fuck with the randomness a lil for added flavor later)
            document.querySelector(`#group${groupNum}`).innerHTML += polyline([`${groupX},${groupY}`, `${groupX + scaleNum},${groupY + scaleNum}`, `${groupX},${groupY + (scaleNum * 2)}`, `${groupX - scaleNum},${groupY + scaleNum}`, `${groupX},${groupY}`]);
            scaleNum--;
        }

        groupNum++; //Don't add to the same group
        groupX = startX, groupY = startY; //Reset values
        startX += 10;
        scaleNum = 5;
    }

    startY += 10;
}