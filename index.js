var number1=Math.random();
number1=Math.floor(number1*6+1);
var number2=Math.random();
number2=Math.floor(number2*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+number1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+number2+".png");
if(number1>number2){
  document.querySelector("h1").innerHTML="⛳Player1 wins";
}else if (number1<number2) {
    document.querySelector("h1").innerHTML="Player2 wins⛳";
}
else{
    document.querySelector("h1").innerHTML="Its a Draw";
}
