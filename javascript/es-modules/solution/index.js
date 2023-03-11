import {
    create,
    createReportList
} from "./canvas"

import {
    draw,
    reportArea,
    reportPerimeter
} from "./square"

import randomSquare from "./square";

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

let square2 = randomSquare(myCanvas.ctx);