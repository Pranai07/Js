// Question1: Write a program to add two numbers using arrow functions.

var sum=(x,y)=>{
    return x+y;
}
console.log(sum(10,20));

// Question2:Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”

var greet=(name)=>{
    return `Hello, ${name}!`;
}
console.log(greet("Sai"));

// Question3 Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.

var isEven=(num)=>{
    return num%2==0;
}
console.log(isEven(10));

// Question4: Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.

var isGreaterThanTen=(num)=>{
    return num>10;
}
console.log(isGreaterThanTen(20));

// Question5 :Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”

var compareLength=(str1,str2)=>{
    if(str1.length>str2.length){
        return str1;
    }
    else if(str1.length<str2.length){
        return str2;
    }
    else{
        return "Equal length";
    }
}
console.log(compareLength("Sai","SaiKumar"));