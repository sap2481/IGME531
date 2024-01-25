//NOTE: Fill will NOT work on the physical machine, ONLY stroke
export const rect = (x, y, width, height, transform, fill) => {
    let html = `<rect x="${x}" y="${y}" width="${width}" height="${height}" transform="${transform}" fill="${fill}"/>`;
    return html;
}
export const circle = (x, y, radius, transform, fill) => {
    let html = `<circle cx="${x}" cy="${y}" r="${radius}" transform="${transform}" fill="${fill}"/>`;
    return html;
}
export const ellipse = (x, y, rx, ry, transform, fill) => {
    let html = `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="${transform}" fill="${fill}"/>`;
    return html;
}
export const polygon = (pointArray, transform, fill) => {
    let html = `<polygon points="`;
    for (let p of pointArray){
        html += `${p} `;
    }
    html += `" transform="${transform}" fill="${fill}"/>`;
    return html;
}
export const line = (x1, y1, x2, y2, stroke) => {
    let html = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}"/>`;
    return html;
}