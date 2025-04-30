
```
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;
    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i); // for question 1 
    console.log(discountedPrice); // for question 2 (comment others when doing a certain question)
    console.log(finalPrice); // for question 3

    return discounted; // for question 4
}

discountPrices([100, 200, 300], 0.5);
```
1. What will happen and why? If the code causes an error, explain why.  
Result: 3  
The loop runs 3 times (i = 0, 1, 2). Due to being var, i is accessible and equals 3 as thats the final result of i when the for loop ends. 
2. What will happen and why? If the code causes an error, explain why.  
Result: 150  
discountedPrice is declared with var. The last value after the loop is 150.
3. What will happen and why? If the code causes an error, explain why.  
Result: 150  
finalPrice is updated each loop. The last value is 150 and is retained after the loop.
4. What will this function return and why? Give a brief explanation. If the code causes an error, explain why.  
Result: [50, 100, 150]  
The array contains the rounded discounted prices.

```
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i); // for question 5
    console.log(discountedPrice); // for question 6
    console.log(finalPrice); // for question 7

    return discounted; // for question 8
}

discountPrices([100, 200, 300], 0.5);

// The difference is the var changed into let
```
5. What will happen and why? If the code causes an error, explain why.  
Result: ERROR.   
i is not defined as it is let, which is confined into the for loop. 
6. What will happen and why? If the code causes an error, explain why.  
Result: ERROR.  
discountedPrice is not defined as it is let, which is confined into the for loop. 
7. What will happen and why? If the code causes an error, explain why.  
Result: 150  
finalPrice is declared with let in the function but not inside the for loop. The last value, 150, is still accessible.
8. What will this function return and why? Give a brief explanation. If the code causes an error, explain why.  
Result: [50, 100, 150]  
The array contains the discounted prices.

```
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }
    console.log(i); // for question 9
    console.log(length); // for question 10

    return discounted; // for question 11
}

discountPrices([100, 200, 300], 0.5);

// The difference is const, the variable length, etc. 
```
9. What will happen and why? If the code causes an error, explain why.  
Result: ERROR.  
i is not defined as it is let, which is confined into the for loop.
10. What will happen and why? If the code causes an error, explain why.  
Result: 3  
length is initialized within the scope of the console log print.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
Result: [50, 100, 150]  
The array contains the discounted prices.


```
let student = {
    name: 'Sarah',
    major: 'Computer Science', 'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    }
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
```
12. Given the above Object, write the notation for:  

A. Accessing the value of the name property in the student object  

student.name  

B. Accessing the value of the Grad Year property in the student object  

student['Grad Year'] 

C. Calling the function for the greeting property in the student object   

student.greeting()  

D. Accessing the name property of the object in the Favorite Teacher property in student  

student['Favorite Teacher'].name

E. Access index zero in the array of the courseLoad property of the student object  

student.courseLoad[0]  


13. For each of the following questions, note down the output as well as a brief explanation why that output was given.  
```
'3' + 2
'3' - 2
3 + null
'3' + null
true + 3
false + null
'3' + undefined
'3' - undefined

// For JS 
console.log('3' + 2);
console.log('3' - 2);
console.log(3 + null);
console.log('3' + null);
console.log(true + 3);
console.log(false + null);
console.log('3' + undefined);
console.log('3' - undefined);
```
- 32  
Concatenation
- 1  
Subtraction
- 3  
null is treated as 0.
- 3null  
Concatenation
- 4  
true is treated as 1.  
- 0  
false and null are treated as 0.
- 3undefined  
Concatenation
- NaN  
Undefined turned into NaN.
14. For each of the following questions, note down the output as well as a brief explanation why that output was given.  
```
'2' > 1
'2' < '12'
2 == '2'
2 === '2'
true == 2
true === Boolean(2)

// For JS
console.log('2' > 1);
console.log('2' < '12');
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 2);
console.log(true === Boolean(2));
```
- true  
2 is greater than 1. 2 turned into a number. 
- false  
Comparing the strings '2' and '12'.
- true  
When converted to same data types, they are equal.
- false  
These do not get converted to the same data types due to ===, making them not equal in data types.
- false  
true is counted as 1, and so 1 does not equal 2.
- true  
Strict === makes it true.

15.  Explain the difference between the == and === operators.  
== converts the values into the same data type if it can before checking if it equals each other.   
=== does not convert the values into the same data type. It compares the values and data types if it equals each other.   
```
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
```
16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)  
[Solution](part2question16.js) 

```
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i ++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

modifyArray([1,2,3], doSomething);
```
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.  

Result: [2, 4, 6]  
Each element in the array is sent to doSomething which is treated as the callback parameter in modifyArray, which then inside the doSomething function the values inside of the array is multiplied by 2 when the callback value/parameter was called inside the modifyArray function.   

```
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
```
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  
[Solution](part2question18.js)  
```
function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}
printNums();

```
19. What is the output of the above code?  
1
4
3
2

