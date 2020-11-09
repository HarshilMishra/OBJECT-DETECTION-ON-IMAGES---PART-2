function next_page1()
{
    window.location("index_1.html");
}
function next_page2()
{
    window.location("index_2.html");
}
function next_page3()
{ 
    window.location("index_3.html");
}
function next_page4()
{
    window.location("index_4.html");
}
function next_page5()
{
    window.location("index_5.html");
}
function back()
{
    window.location("index.html");
}
img="";
img_1 = "";
img_2 = "";
img_3 = "";
img_4 = "";
status = "";

function preload()
{
  img=loadImage("bedroom_image.jpg");

  img_1=loadImage("t.v._ac_image.jpg");

  img_2=loadImage("desk_image.jpg");

  img_3=loadImage("bottle_image.jpg");

  img_4=loadImage("fruit_basket_image.jpg");

}
function setup()
{
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw()
{
  image(img,0,0,640,420);
  fill("#FF0000");
  text("Lamp",45,75);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Bedroom",70,155);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  //Code for drawing the rectangles on the second image

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Television",45,75);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Air Conditioner",70,155);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  //Code for drawing the rectangles on the third image

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Lamp",45,75);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Books",70,155);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  //Code for drawing the rectangles on the fourth image

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Bottle",45,75);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Bottle",70,155);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  //Code for drawing the rectangles on the fifth image

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Bowl",45,75);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);

  image(img,0,0,640,420);
  fill("#FF0000");
  text("Banana",70,155);
  noFill();
  stroke("#FF0000");
  rect(30,60,450,350);
}
function modelLoaded()
{
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(video,gotResult);
}
function gotResult(error,results)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    objects = results;
  }
}
