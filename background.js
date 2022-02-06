class BackGround{
  constructor(){
  this.size = 100;
  this.x = -width;
  this.y = height - this.size;
  }

  move(){
    this.x = this.x + 1;
  }
  
  show(){
      image(bgImage, this.x, this.y, width, this.size);
   }
}