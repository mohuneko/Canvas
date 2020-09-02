
//canvas
'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    // ctx.fillStyle = 'pink';
    // ctx.strokeStyle = '#f00';
    //ctx.lineWidth = 8; //線を太くする
    //ctx.lineJoin = 'round'; //角を丸くする
    //ctx.lineJoin = 'bevel';
    // ctx.fillRect(50, 50, 50, 50);
    // ctx.strokeRect(50, 50, 50, 50);

    // ctx.fillStyle = 'skyblue';
    // ctx.strokeStyle = '#00b';

    // ctx.fillRect(70, 70, 50, 50);
    // ctx.strokeRect(70, 70, 50, 50);

    // ctx.createLinearGradient(x0, y0, x1, y1);
    // const g = ctx.createLinearGradient(0, 0, canvas.width, 0);

    // const g = ctx.createRadialGradient(
    //   x0, y0, r0,
    //   x1, y1, r1
    // );
    const g = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 50, 
      canvas.width / 2 + 100, canvas.height /2 + 200, 500
    );

    g.addColorStop(0, '#f00');
    g.addColorStop(0.1, '#0f0');
    g.addColorStop(1, '#00f');

    ctx.fillStyle = g;
    // ctx.fillRect(0, 0, 600, 240);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  }

  draw();
}