var canvas = document.querySelector('canvas')
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

var c = canvas.getContext('2d')

// creating a line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 200);
c.lineTo(300, 400);
c.strokeStyle = 'blue';
c.stroke();

// creating a circle

c.beginPath();
c.arc(200, 200, 50, 0, Math.PI*2, false);
c.strokeStyle = 'red';
c.stroke();

// lot of canvas via loop

for(let i = 0; i < 30; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2);
    c.strokeStyle = 'blue';
    c.stroke()
}