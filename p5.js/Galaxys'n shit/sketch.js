const galaxy = []

function setup() {
  createCanvas(400, 400);
  for(i = 0; i<=(width*height)/800; i++){
    galaxy.push(new Star());
  }
}

function draw() {
  background(0);
  
  for (star of galaxy){
    star.render()
  }
}