During your debugging process, include the following screenshots:

When the debugger is triggered, set a breakpoint at the initialization of the local variable result in calculateSum(). Take a screenshot of the list of breakpoints containing the breakpoint you just added. Name it result-calculateSum.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.
Add watch expressions to find the value of num1 and num2, and the data type of result. Take a screenshot of the watch expressions list. Name it result-dataType.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.

Answer the following questions:

What was the bug?  

The bug was that first number and the second number were inputted as strings. Adding them together resulted in the wrong format, as it used string concatenation instead of number addition.  

How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.  
One of the ways to fix it is to change the strings into integers.

