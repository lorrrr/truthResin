var myp5 = new p5(sketch);

var sketch = function(p) {

  p.setup = function() {
  p.createCanvas(p.windowWidth,p.windowHeight);
  p.img = p.loadImage("https://files.cargocollective.com/c282395/title.png");
  p.video = p.createVideo("https://files.cargocollective.com/c282395/countdown.mp4");
  p.font = p.loadFont("https://files.cargocollective.com/c282395/InputMono-Light.ttf");
  p.video.play();
  p.video.hide();
  p.imageMode(p.CENTER);
  p.count=0;
  p.noStroke();
  p.textAlign(CENTER);
  p.textFont(font);

p.sum=0

}


  p.draw = function() {

  if (p.frameCount<=600){
  p.image(p.video,p.windowWidth/2,p.windowHeight/2,p.windowWidth,p.windowHeight );
  } else if (p.frameCount ==601){

      p.count =-200;
  } else

  if (p.frameCount<=800){
    p.clear();
    p.translate(p.windowWidth/2,p.windowHeight/2);
      p.image(p.img,0,-100,2097/4,245/4);

    p.sum = p.count+200;
    for (var i =0; i<p.sum; i++){

    p.fill(110+86/p.sum*i,142+81/p.sum*i,200-37/p.sum*i);
    p.polygon(i-200, 0, 30, 6);
    }

    p.count+=2;
    p.textSize(20);
    p.text(Math.floor(p.sum/4)+1+"%",0,100);

  } else if (p.frameCount>=840)
  {p.remove()};

}

p.polygon = function (x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  p.beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
   var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    p.vertex(sx, sy);
  }
  p.endShape(CLOSE);
}
}
