let student = { name: "akhi",age : 18,roll : 157 , enemy : 159 , }
console.log(student.name +"" +student.roll)
//task create student obbj wit name , grade and subjects 
student={
    name : "akhi",grade : "o++", subjects : ["maths" ,"science" ]
}
console.log(student.name+" "+ student.grade+" "+ student.subjects)
//write a function inside and outside  the obbject
let good = { name : "akhi",roll :155, 

    greet(a,b){
        return  a+b
    }

}
console.log(good.greet(10,20))
function hello(name){
   
    console.log("name:"+" "+ name)
}
hello("akhi")

