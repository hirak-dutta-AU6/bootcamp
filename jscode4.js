// functions in js

// boilerplate code 
// self documented code

function sum (a,b){    // a,b are parameters
    console.log("inside sum functions....")
    return a+b;        // functions execution stops here and comes out
    console.log("bye");
}

console.log(sum(10,5));   // 10 & 5 are called arguements
console.log(sum(0,-1));


// callbacks
var initialBalance= 100;
var balanceCredit = function(depositAmount , smsFunction){
    smsFunction(initialBalance + depositAmount);

}

function sendSms(newBal){
    console.log("your acount balance is .."+ newBal);
}
balanceCredit(4000,sendSms);

// functions are called as a first class objects in javascript since functions can be passed as arguements and can be declared