var num = Math.floor(Math.random()*11);
var i=5;

function docount(){
  i--;
  if(i==0){
    document.getElementById("demo").innerHTML = " NOOOO CHANCES!";
  } 
  else{
    checknum();
  }
}
  
function checknum(){
  var nums = document.getElementById("myForm").elements[0].value;
  if(nums-num==0){
    document.write('<img src="boom.png">');
  }
  else if(nums-num>0){
    document.getElementById("demo").innerHTML = "You still have " + i +" chances, a little bit small!";
  }
  else {
    document.getElementById("demo").innerHTML = "You still have " + i +" chances, a little bit big!";
  } 
}







