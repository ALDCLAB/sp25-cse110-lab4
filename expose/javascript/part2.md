
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
The array contains the rounded discounted prices.

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
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
Result: [50, 100, 150]

```
let student = {
    name: 'Sarah',
    major: 'Computer Science', 'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110
    }
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
```
12. Given the above Object, write the notation for:  
A. Accessing the value of the name property in the student object  
B. Accessing the value of the Grad Year property in the student object  
C. Calling the function for the greeting property in the student object  
D. Accessing the name property of the object in the Favorite Teacher property in student  
E. Access index zero in the array of the courseLoad property of the student object  

13. For each of the following questions, note down the output as well as a brief explanation why that output was given.  
```
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
1
3
3null
4
0
3undefined
14. For each of the following questions, note down the output as well as a brief explanation why that output was given.  
```
console.log('2' > 1);
console.log('2' < '12');
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 2);
console.log(true === Boolean(2));
```
- true
- false
- true
- false
- false
- true

15.  Explain the difference between the == and === operators.  
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

```
let d = new Date();
let time = d.toLocaleTimeSTring();
console.log(time);
```
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.

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

