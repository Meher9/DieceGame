var rnum1=Math.floor(Math.random()*6+1);
var random="images/dice"+rnum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",random);
var rnum2=Math.floor(Math.random()*6+1);
var random2="images/dice"+rnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random2);
if(rnum1>rnum2){
  document.querySelector("h1").innerHTML="Player1 Wins!🚩";
}
else if(rnum2>rnum1){
  document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="BOTH";
}