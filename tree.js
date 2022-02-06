class Tree {
  constructor(){
  this.size = 100;
  this.x = width + this.size;
  this.y = height - this.size;
  }

  move(){
    this.x = this.x - 2;
  }
  
  show(){
      image(treeImage, this.x, this.y, 
        this.size, this.size);
   }
}