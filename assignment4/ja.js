

//获取随机数
function GetRandomNum(Min,Max){ 
var Range = Max - Min; 
var Rand = Math.random(); 
return(Min + Math.round(Rand * Range)); 
} 

function askfornum(){
    var nums= document.getElementById("myform").value;
}

function checknum(){
    var num = GetRandomNum(1,10);
    var i;  
    for(i=1;i<=10;i++){
    if(i==1){
        if(nums=num){
         document.write('<img src="boom.png">');
         }
        if(nums<num){
          document.getElementById("demo").innerHTML = "Still"+10-i+"chances", " a little bit small!";
        }
         else{
           document.getElementById("demo").innerHTML = "Still"+10-i+"chances", " a little bit big!"
         }
    }
    }
    
     if(i>1&i<=10){
        if(nums=num){
         document.write('<img src="boom.png">');
         }
         if(nums<num){
            document.getElementById("demo").innerHTML = "Still"+10-i+"chances", " a little bit small!";
          }
           else{
             document.getElementById("demo").innerHTML = "Still"+10-i+"chances", " a little bit big!"
           }
      }
     
      if(i>10){
        document.getElementById("demo").innerHTML = "NOOO CHANCESS!";
      }
}