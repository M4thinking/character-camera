const density = 'Ñ@#W$9876543210?!abc;:+=-,._              ';
const density1 = '         .:-i|=+%O#@';

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(90,120);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
    let asciiImage = '';
  for (let j = 0; j < video.height; j++) {
    let row = '';
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += '&nbsp;'
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}