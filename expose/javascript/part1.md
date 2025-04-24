
```
function sumValues(num1, num2, add) {
    
    if (add) {
        
        var result = 0;
        
        result = num1 + num2
        
        console.log('values added: ', result);
        
    } else return
    
    console.log('final result: ', result);
}

sumValues(10, 10, true);
```

1. values added:  20  
2. final result:  20  
3. We should not use var as it has no scope compared to let, as var stays within the function or global when it is implemented outside a function. The var is also recognized at the start of the script or function no matter where they are, which can be dangerous and very hard to track, leading to unresulted changes and hard to debug.  


```
function sumValues(num1, num2, add) {
    
    if (add) {
        
        let result = 0;
        
        result = num1 + num2
        
        console.log('values added: ', result);
        
    } else return
    
    console.log('final result: ', result);
}

sumValues(10, 10, true);
```
4. values added:  20
5. ERROR.  
The change was let compared to var. When using let, the variable is confined to its block scope such as a if statement. We cannot access it outside, for example, outside the if statement.
With var, the variable remains accessible outside the block due to its function/global scope, even if declared conditionally.

```
function sumValues(num1, num2, add) {
    
    if (add) {
        
        const result = 0;
        
        result = num1 + num2
        
        console.log('values added: ', result);
        
    } else return
    
    console.log('final result: ', result);
}

sumValues(10, 10, true);
```
6. ERROR. The function tries to assign another value to the constant result, leading to the error.
7. ERROR. The function tries to assign another value to the constant result if the previous code is kept. Another thing is the call is outside of result, as const has the same scope as let, which makes result unaccessible.