
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
    // const g = ctx.createRadialGradient(
    //   canvas.width / 2, canvas.height / 2, 50, 
    //   canvas.width / 2 + 100, canvas.height /2 + 200, 500
    // );

    // g.addColorStop(0, '#f00');
    // g.addColorStop(0.1, '#0f0');
    // g.addColorStop(1, '#00f');

    // ctx.fillStyle = g;
    // ctx.fillRect(0, 0, 600, 240);
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    //影の表現
    // ctx.shadowOffsetX = 4;
    // ctx.shadowOffsetY = 4;
    // ctx.shadowBlur = 4;
    // ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    // ctx.fillRect(50, 50, 50, 50);

    //線を描画する
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(100, 50);
    // ctx.lineTo(100, 100);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fill();

    //線のスタイル
    // ctx.beginPath();
    // ctx.moveTo(100, 50);
    // ctx.lineTo(200, 50);
    // ctx.setLineDash([5, 10]); //点線
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(200, 100);
    // ctx.setLineDash([]); //実線
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(100, 150);
    // ctx.lineTo(200, 150);
    // ctx.lineWidth = 16; //太い線
    // ctx.lineCap = 'round'; //終端が丸くなる
    // ctx.stroke();

    //円弧
    // ctx.beginPath();
    // //ctx.arc(x, y, start, end);
    // ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    // ctx.stroke();

    // ctx.beginPath();
    // //ctx.arc(x, y, start, end);
    // // ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
    // // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI);
    // ctx.moveTo(100, 100);
    // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true);
    // // ctx.stroke();
    // ctx.fill();

    //楕円
    //ctx.ellipse(x, y, rx, ry, rotation, start, end);
    // ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
    // ctx.rect(50, 50, 50, 50);
    // ctx.stroke();

    //テキストを描画する

    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(canvas.width, 100);
    // ctx.moveTo(100, 0);
    // ctx.lineTo(100, canvas.height);
    // ctx.stroke();

    // ctx.font = 'bold 64px Verdana';
    // ctx.textAlign = 'right';
    // ctx.textBaseline = 'top';

    // // ctx.fillText('Tokyo', 100, 100);
    // // ctx.fillText('Tokyo', 100, 100, 100);
    // ctx.strokeText('Tokyo', 100, 100, 100);

    //画像を描画する
    // const img = document.createElement('img');
    // // img.src = 'img/logo.png';
    // img.src = 'img/sprite.png';

    // img.addEventListener('load', () => {
      // ctx.drawImage(img, 0, 0);
      // ctx.drawImage(img, 0, 0, 40, 40);
      // // const pattern = ctx.createPattern(img, 'repeat');
      // // repeat-x, repeat-y, no-repeat
      // const pattern = ctx.createPattern(img, 'repeat-x');
      // ctx.fillStyle = pattern;
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ctx.drawImage(img, 0, 0);
    //   ctx.drawImage(
    //     img,
    //     // sx, sy, sw, sh,
    //     70 * 2, 70, 70, 70,
    //     // dx, dy, dw, ds
    //     0, 0, 35, 35
    //   );
    // });

    //キャラクタを描いてみよう

    ctx.beginPath();
    ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'skyblue';
    ctx.fill();

    ctx.scale(0.5, 0.5);

    ctx.beginPath();
    ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'skyblue';
    ctx.fill();

  }

  draw();
}