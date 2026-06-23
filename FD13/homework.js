let student={
name:"Utkarsh",
age:21,
letcourse:"Btech CSE",
city:"Lucknow",

}
console.log(student);

// question 2

//update
student.city="Delhi"
student.age=22

console.log(student);
//question 3
//add
student.email="pandeyutkarsh092@gmail.com"
student.mobile=9839370266
console.log(student);
// question 4
// delete
delete student.mobile;
console.log(student);
//question 5
let employee ={
    id:202634,
    name:"Ramander",
    department:"account",
    salary:20000,

}
console.log(employee);
// question 6
let product={
    productname:"notebook",
    price:100,
    category:"stationary",
    stock:500,
}
console.log(product);
product.stock=1000
console.log(product);
// question 8
for(let key in product){
    console.log(key+"-"+product[key]);
}
//question 9
console.log(Object.values(product));
// question 7
let bankemploy ={
    name:"Utkarsh",
    age:21,
    address:{
        city:"lucknow",
        state:"uttar pradesh",
    }
}
console.log(bankemploy.address);