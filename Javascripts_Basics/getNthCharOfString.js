// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function myFunction(a, n) {
   
    return a[n-1];
 }
 let op = myFunction('abcde', 2);
 console.log(op);