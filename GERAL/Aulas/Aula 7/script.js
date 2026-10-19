let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'Black';
ctx.strokeStyle = 'white';
ctx.fillRect(10, 10, 50, 50);
ctx.strokeRect(10, 10, 50, 50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'Black';
ctx.strokeStyle = 'white';
ctx.moveTo(200, 150);
ctx.lineTo(250, 200);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'Black';
ctx.strokeStyle = 'white';
ctx.arc(400, 100, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
ctx.closePath();