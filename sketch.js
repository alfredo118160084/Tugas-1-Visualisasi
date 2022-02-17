function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0

}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(2)
  line(200,0,200,200);

  //Gambar Kiri
  //Badan
  strokeWeight(3)
  ellipse(100,100,125,125);
  
  //Mata
  ellipse(75,75,20,20);
  ellipse(125,75,20,20);
  
  //Hidung
  strokeWeight(8)
  point(100,100);
  
  //Mulut
  strokeWeight(4)
  line(75,125,125,125)

  //Gambar Kanan
  //Badan
  var s = 125 + 5*Math.sin(PI*j/20)
  j+=1
  strokeWeight(3)
  ellipse(300,100,s,s);
  //Mata
  var r = 20 + 5*Math.cos(PI*j/20)
  ellipse(275,75,r,r);
  ellipse(325,75,r,r);
  //Hidung
  strokeWeight(8)
  point(300,s-25);
  //Mulut
 
  strokeWeight(3)
  var s = 10 + 5*Math.cos(PI*j/20)
  rect(275,125,50,s);

  //Warna
  fill(255,255,0)
}