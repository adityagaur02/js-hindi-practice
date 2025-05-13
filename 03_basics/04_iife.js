// Immediately Invoked Function Expressions (IIFE)
// why we use IIFE?   sometimes global variables cause problem / issue that's why we use IIFE          BASIC SYNTAX:- (func.)()

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                                               // if we remove semi-colon (;) then it will show error for 2nd func.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('aditya')