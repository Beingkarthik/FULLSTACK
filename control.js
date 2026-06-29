//contorl the flow of excution
var age = 18
if(age>=18){
    console.log("come "+ age)
}
else{
    console.log("getlost"+ age)
}
//loops
for (var i=0;i<=5;i++){
    console.log(i)
}
var m = 21
while(m>20){
    console.log("gm"+m)
    m--;
}
do{
    console.log(m)
}while(m>30)
   const arr=[20,30,40] 
  for(let value in arr){
    console.log(value)  // index
  } 
   for(let val of arr){
    console.log(val) // values
   } 
 for (let i=1;i<100;i++){
    if ((1&i)==0){ // even logic 
        console.log(i)
    }
 }  