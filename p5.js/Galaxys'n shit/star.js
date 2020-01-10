class Star {

    constructor(){
      this.pos = createVector(random(0, width), random(0, height));
      this.vel = createVector();
      this.acc = createVector();
      this.size = random(1, 4)
    }
    
    render(){
      stroke(255);
      strokeWeight(this.size);
      point(this.pos.x, this.pos.y);
    }
    
  }