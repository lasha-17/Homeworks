//problem/1

let y = 5;
console.log(5+2);
console.log(7-6);
console.log(1*30);
console.log(30/2);
console.log(15%5);
console.log(0**3);

//problem/2

let x = 5;
console.log(x);

x += 2;
x -= 7;
x *= 30;
x /= 2;
x %= 5;
x **= 3;
console.log(x);

//problem/3


let a = 0.1 + 0.2;
console.log(a);
let b = 0.3;
console.log(a === b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


//problems/4



let age = 18; 
let firstName = "James";
let price = 35;

if (age >17) { 
    price =0;
    console.log("priceBeFree");
}  
if (age ==25 && firstName === "James") {
    price =28
    console.log("discount20procents");
} else (age <18)
 {  price =35;
    console.log("anyOtherCasePriceShouldStayTheSame");
} 