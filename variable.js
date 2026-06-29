//there are  3 types of assining variables var,let,const
//if you choose var your are chosingg choas 
var n=5
console.log(n)
var n=6
console.log(n)
// we can change values 
let x=5
console.log(x)
// you cant do let x =6 it gives error we cant directly change 
x=6
console.log(x)
const y=23
// y=27 we cannot change even binding here but addition sutraction 

console.log(y)
const arr =[1,2,3,4]
arr.push(4) // const doesn’t freeze the value. It freezes the reference.
console.log(arr)
const z=23
console.log(z)