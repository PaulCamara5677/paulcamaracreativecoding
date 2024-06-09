function setup() {
    createCanvas( 400, 400);
  }
  
  function draw() {
    background(290, 16, 10);
    
    fill (25, 66, 24)
    // rect ( x, y, width, height)
    rect (50, 150 , 150, 50);
    // rect ( x, y, width, height)
    rect (50, 120 , 100, 50);
    // ellipse ( x, y, width, height)
    
    fill ( 29, 16, 10)
    ellipse ( 90, 210, 50 , 50);
    // ellipse ( x, y, width, height)
    ellipse ( 160, 210, 50 , 50);
    fill ( 260, 255, 0)
    //triangle (x1,y1,x2,y2,x3,y3)
    triangle ( 60, 60, 40, 40, 60, 20);
    
    stroke ( 0);
    strokeWeight( 3);
    //Line (x1, y1, x2, y2)
    line ( 60, 20, 80, 170);
  }