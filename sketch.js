
function setup() {
  createCanvas(windowWidth,windowHeight);
  img = loadImage("title.png");
  video = createVideo("countdown.mp4",loaded);
  font = loadFont("InputMono-Light.ttf");
  video.play();
  video.hide();
  imageMode(CENTER);
  var count;
  noStroke();
  textAlign(CENTER);
  textFont(font);

 var sum;

}


function draw(){

  if (frameCount<=600){
  image(video,windowWidth/2,windowHeight/2,windowWidth,windowHeight );
  } else if (frameCount ==601){

      count =-200;
  } else

  if (frameCount<=800){
    clear();
    translate(windowWidth/2,windowHeight/2);
      image(img,0,-100,2097/4,245/4);

    sum = count+200;
    for (var i =0; i<sum; i++){

    fill(110+86/sum*i,142+81/sum*i,200-37/sum*i);
    polygon(i-200, 0, 30, 6);
    }

    count+=2;
    textSize(20);
    text(Math.floor(sum/4)+1+"%",0,100);

  } else if (frameCount>=840)
  {console.log(sum);remove()};

}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
   var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
