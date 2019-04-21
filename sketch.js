var video;
var img;
var font;
var fc=0;
function setup() {
  createCanvas(windowWidth,windowHeight);
   img = loadImage("title.png");
   gif1 = createImg("folder.gif")
   font = loadFont("InputMono-Light.ttf");
  video = createVideo("countdown.mp4");
 background(0);
 imageMode(CENTER);
  var count;
  noStroke();
  textAlign(CENTER);
  textFont(font);
  noLoop();
  gif1.size(windowWidth,windowHeight);
  gif1.position(0,0);
 var sum;
   video.hide();
 

}


function draw(){

  if (fc<=600){
  image(video,windowWidth/2,windowHeight/2,windowWidth,windowHeight );
  } else if (fc ==601){
    video.remove();
      count =-200;
  } else

  if (fc<=800){
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

  } else if (fc>=840)
  {console.log(sum);remove()};
fc++;
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

function mouseClicked() { 
  clear();
  gif1.remove();
  getAudioContext().resume();
  video.play();

  loop();
}
