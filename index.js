var canvas,
    context,
    dragging = false,
    dragStartLocation,
    snapshot;


function getCanvasCoordinates(event){
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY -canvas.getBoundingClientRect().top;

        return {x : x, y : y};
}

function takeSnapshot(){
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot(){
    context.putImageData(snapshot, 0, 0);
}

function drawLine(position){
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function drawCircle(position){
    var radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2));
    context.beginPath();
    context.arc(dragStartLocation.x, dragStartLocation.y, radius, 0, 2 * Math.PI, false);
}

function drawPolygon(position, sides, angle) {
    var coordinates = [],
        radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2)),
        index = 0;

    for (index = 0; index < sides; index++) {
        coordinates.push({x: position.x + radius * Math.cos(angle), y: position.y - radius * Math.sin(angle)});
        angle += (2 * Math.PI) / sides;
    }

    context.beginPath();
    context.moveTo(coordinates[0].x, coordinates[0].y);
    for (index = 1; index < sides; index++) {
        context.lineTo(coordinates[index].x, coordinates[index].y);
    }

    context.closePath();
    
}

/*function drawImage(position) {
    var imgElement = document.getElementById("try1");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x, position.y);
    eraserStroke = true;
}*/


//variable
let painting = false;
let eraser = "#ffffff";
let dColor = "#000000";
let lineWid = "3";
let eraserStroke = false;
let restoreArray = [];
let index = -1;

function drawFree(e){
    if(!painting) return;

            context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            if(!eraserStroke){
                context.strokeStyle = dColor;
                context.lineWidth = lineWid;
                context.stroke();
            }
            eraserStroke = false;
            
            
}
function erase(e){
    if(!painting) return;

            context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            context.strokeStyle = eraser;
            context.lineWidth = lineWid;
            context.stroke();
            eraserStroke = true;
            
}
function draw(position) {

    var fillBox = document.getElementById("fillBox"),
        shape = document.querySelector('input[type="radio"][name="shape"]:checked').value,
        polygonSides = document.getElementById("polygonSides").value,
        polygonAngle = document.getElementById("polygonAngle").value,
        lineCap = document.querySelector('input[type="radio"][name="lineCap"]:checked').value;
        context.lineCap = lineCap;
        
    if(shape === "circle") {
        drawCircle(position);
        painting = false;
        if(fillBox.checked) {
            context.fill();
        } else {
            context.stroke();
        }
    }
    if(shape === "line") {
        drawLine(position);
        painting = false;
    }
    if(shape === "polygon") {
        drawPolygon(position, polygonSides, polygonAngle * (Math.PI) / 180);
        painting = false;
        if(fillBox.checked) {
            context.fill();
        } else {
            context.stroke();
        }
    }
    if(shape === "free") {
        drawFree(position);
    }
    if(shape === "eraser") {
        erase(position);
    }
    if(shape === "ruler") {
        drawRuler(position);
    }
    if(shape === "ruler1") {
        drawRuler1(position);
    }
    if(shape === "formula"){
        drawImage(position);
    }
    if(shape === "formula2"){
        drawImage2(position);
    }
    if(shape === "3d"){
        drawImage3(position);
    }
    if(shape === "cpgl"){
        drawImage4(position);
    }
    if(shape === "nl"){
        drawImage5(position);
    }
    if(shape === "pc30"){
        drawImage6(position);
    }
    if(shape === "Deri"){
        drawImage7(position);
    }
    if(shape === "sincos"){
        drawImage8(position);
    }
    if(shape === "DI"){
        drawImage9(position);
    }
    if(shape === "IE"){
        drawImage10(position);
    }
    if(shape === "TIC"){
        drawImage11(position);
    }
    /*if(fillBox.checked) {
        context.fill();
    } else {
        context.stroke();
    }*/
}

function dragStart(event){
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
    takeSnapshot();
}
function drag(event){
   var position;
   if(dragging === true){
       restoreSnapshot();
       position = getCanvasCoordinates(event);
       //drawCircle(position);
       //drawLine(position);
       //drawPolygon(position, 4, Math.PI / 4);
       draw(position);
   }

}
function dragStop(event){
    dragging = false;
    restoreSnapshot();
    var position = getCanvasCoordinates(event);
    //drawCircle(position);
    //drawLine(position);
    //drawPolygon(position, 4, Math.PI / 4);
    draw(position);

    if ( event.type != 'mousemove') {
        restoreArray.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

function startPosition(e){
    painting = true;
    drawFree(e);
}
function finishedPosition(){
    painting = false;
    context.beginPath();
}

function changeLineWidth() {
    context.lineWidth = this.value;
    event.stopPropagation();
}
function changeFillStyle() {
    context.fillStyle = this.value;
    event.stopPropagation();
}
function changeStrokeStyle() {
    context.strokeStyle = this.value;
    event.stopPropagation();
}
function eraseCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    restoreArray = [];
    index =-1;
}
function undoSnapshot(){
    if(index <= 0){
        eraseCanvas();
    } else {
        index -= 1;
        restoreArray.pop();
        context.putImageData(restoreArray[index], 0, 0);
    }
}
function save() {
    let link = document.createElement("a");
    link.download = "QuBE_Board.jpg";
    link.href = canvas.toDataURL();
    link.click();
}


function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    var lineWidth = document.getElementById("lineWidth"),
        fillColor = document.getElementById("fillColor"),
        strokeColor = document.getElementById("strokeColor"),
        clearCanvas = document.getElementById("clearCanvas"),
        undo = document.getElementById("undo");

    context.strokeStyle = strokeColor.value;
    //var imgElement = document.getElementById("try1");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat")
    //context.lineCap = 'round';
    context.fillStyle = fillColor.value;
    context.lineWidth = lineWidth.value;

    document.querySelector("#save").addEventListener("click", save);

    fillBox = document.getElementById("fillBox");

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
    lineWidth.addEventListener("input", changeLineWidth, false);
    fillColor.addEventListener("input", changeFillStyle, false);
    strokeColor.addEventListener("input", changeStrokeStyle, false);
    clearCanvas.addEventListener("click", eraseCanvas, false);
    undo.addEventListener("click", undoSnapshot, false);
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', drawFree);
}

window.addEventListener('load', init, false);

function drawRuler(position) {
    var imgElement = document.getElementById("ruler");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 420, position.y - 50);
    eraserStroke = true;
}
function drawRuler1(position) {
    var imgElement = document.getElementById("ruler1");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 30, position.y - 420);
    eraserStroke = true;
}

function drawImage2(position) {
    var imgElement = document.getElementById("try2");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage3(position) {
    var imgElement = document.getElementById("try3");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage4(position) {
    var imgElement = document.getElementById("try4");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage5(position) {
    var imgElement = document.getElementById("try5");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 333, position.y - 10);
    eraserStroke = true;
}
function drawImage6(position) {
    var imgElement = document.getElementById("try6");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage7(position) {
    var imgElement = document.getElementById("try7");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage8(position) {
    var imgElement = document.getElementById("try8");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage9(position) {
    var imgElement = document.getElementById("try9");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}
function drawImage10(position) {
    var imgElement = document.getElementById("try10");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 333, position.y - 10);
    eraserStroke = true;
}
function drawImage11(position) {
    var imgElement = document.getElementById("try11");
    //context.fillStyle = context.createPattern(imgElement, "no-repeat");
    //context.fillRect(0, 0, 300, 385);
    context.drawImage(imgElement, position.x - 250, position.y - 235);
    eraserStroke = true;
}

