var canvas, backgroundImage;
var question, questions, contestant, quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}

function draw(){
  background("pink");

}
