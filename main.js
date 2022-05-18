function setup() {
canvas= createCanvas(500,500);
canvas.position(520,150);
video= createCapture(VIDEO);
video.size(500,500);
video.hide();
posenet= ml5.poseNet(video, modelLoaded);
posenet.on("pose" , gotResults);
}

function draw() {
image(video, 0, 0, 500, 500);
image(clown_nose, 30, 40, 40, 30);
}

function modelLoaded() {
console.log("Model is Initialized");
}

function gotResults(results) {
console.log(results);
}
function preload() {
clown_nose= loadImage("https://i.postimg.cc/025Lqqgc/Clown-Nose.webp");
}