var mouseEvent="empty";
var  position_x , position_y;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=340;
ctx.moveTo(position_x,position_y);
ctx.lineTo(currentx,currenty);
ctx.stroke();

}
position_x=currentx
position_y=currenty
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}