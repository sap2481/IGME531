//Fields
let recreation = document.querySelector("#recreation");
let variation = document.querySelector("#variation");

//Functions
//NOTE: Fill will NOT work on the machine, ONLY stroke
let rect = (x, y, width, height, transform, fill) => {
    let html = `<rect x="${x}" y="${y}" width="${width}" height="${height}" transform="${transform}" fill="${fill}"/>`;
    return html;
}
let circle = (x, y, radius, transform, fill) => {
    let html = `<circle cx="${x}" cy="${y}" r="${radius}" transform="${transform}" fill="${fill}"/>`;
    return html;
}
let ellipse = (x, y, rx, ry, transform, fill) => {
    let html = `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="${transform}" fill="${fill}"/>`;
    return html;
}
let polygon = (pointArray, transform, fill) => {
    let html = `<polygon points="`;
    for (let p of pointArray){
        html += `${p} `;
    }
    html += `" transform="${transform}" fill="${fill}"/>`;
    return html;
}
let line = (x1, y1, x2, y2, stroke) => {
    let html = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}"/>`;
    return html;
}

//Recreate Sainte-Victoire en Rouge (as best I can)
recreation.innerHTML += rect(10, 50, 30, 30, "rotate(5 25 65)", "hsl(10, 100%, 36%)");
recreation.innerHTML += rect(20, 10, 30, 30, "rotate(65 35 25)", "hsl(10, 100%, 20%)");
recreation.innerHTML += rect(40, 10, 30, 30, "rotate(-5 55 25)", "hsl(10, 100%, 40%)");
recreation.innerHTML += rect(20, 30, 30, 30, "rotate(40 35 45)", "hsl(10, 100%, 50%)");
recreation.innerHTML += rect(60, 60, 30, 30, "rotate(65 75 75)", "hsl(10, 100%, 20%)");
recreation.innerHTML += rect(70, 55, 30, 30, "rotate(10 80 70)", "hsl(10, 100%, 20%)");
recreation.innerHTML += rect(60, 30, 30, 30, "rotate(-10 75 45)", "hsl(10, 100%, 50%)");
recreation.innerHTML += rect(75, 85, 30, 30, "rotate(45 90 100)", "hsl(10, 100%, 35%)");
recreation.innerHTML += rect(88, 88, 30, 30, "rotate(25 105 105)", "hsl(10, 100%, 40%)");

//Variation of Sainte-Victoire en Rouge
variation.innerHTML += circle(20, 200, 15, "", "hsl(235, 100%, 70%)");
variation.innerHTML += circle(25, 150, 16, "", "hsl(235, 100%, 20%)");
variation.innerHTML += circle(50, 155, 17, "", "hsl(235, 100%, 40%)");
variation.innerHTML += circle(30, 175, 18, "", "hsl(235, 100%, 50%)");
variation.innerHTML += circle(70, 175, 19, "", "hsl(235, 100%, 50%)");
variation.innerHTML += circle(65, 200, 18, "", "hsl(235, 100%, 20%)");
variation.innerHTML += circle(85, 190, 17, "", "hsl(235, 100%, 20%)");
variation.innerHTML += circle(90, 215, 16, "", "hsl(235, 100%, 60%)");
variation.innerHTML += circle(105, 220, 15, "", "hsl(235, 100%, 50%)");