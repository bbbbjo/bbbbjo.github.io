
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

function puzzle1(){
  var response = prompt("Enter your answer");
  if(response==="30"){
   alert("Congratulations, that's right!");
 }
  else {alert("The answer is wrong!\nPlease try again, or try another puzzle.\nHint:Note the end of each line.");
  }
}
puzzle1();

function puzzle2(){
  var response = prompt("Enter your answer");
  if(response==="1"){
   alert("Congratulations, that's right!");
 }
  else {alert("The answer is wrong!\nPlease try again, or try another puzzle.\nHint:This puzzle needs no calculation.");
  }
}
puzzle2();
