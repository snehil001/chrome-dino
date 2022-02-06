class Train {
  constructor(){
  this.size = 100;
  this.x = width;
  this.y = height - this.size;
  }
  
  move(){
    this.x = this.x - 6;
  }
  
  show(){
      image(trainImage, this.x, this.y, this.size, this.size);
   }
}