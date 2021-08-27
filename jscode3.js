//js tutorial day 3 continues...
// == vs === ---> the purpose is to validate lhs is equal to rhs
console.log(2==3); // false
console.log(0== false);  // true because js considers 0 as a falsey value
console.log(0===false);


// LESSER THAN GREATER THAN
console.log(2<3);
console.log(3>1);
console.log(4<=2+2);
console.log(5>=2.5+2.5);

//AND or  OR operator
console.log(10 && 9);   // if first  one is truty value, return the 2nd one
console.log(0 && true);   //if the first one is the falsdy value, return first one.


//   OR oprator
//when one of the condition satisfies then the output will be true.

console.log(10 || 9);  //10
console.log(0 || true);  // true
console.log(9+7 || 19+9);  //16 ----> it dont check for other side take the first value only


//number
 //to extract no from a string

 console.log(Number("111")); // EXTRACT 111
 console.log(Number.parseInt(123.123));
 console.log(Number("ab111"));
 
 console.log(Number("111")); // EXTRACT 111
 console.log(Number.parseInt(123.123));  //123
 console.log(Number("ab111"));   //NaN
 console.log(isNaN("ab111"));  //truw

 //STRING
 console.log('hii' ==="hii");

 //string length

 var str = "i am awesome";
 console.log(str.length);  // length  is 12 no of characters
 console.log(str.charAt(0)); //it will return a character present in 0th index
 console.log(str.indexOf("a"));   //it will return index of the character in the string

 //slice, substring

 var str1 = "i am a good programmer";
 console.log(str1.slice(1));
 console.log(str1);
 console.log(str1.slice(-4));
 console.log(str1.substr(1,5));

 // uppercase and lowercasre conversion
 var str3 = "ABC"
 console.log(str3.toLowerCase());
 console.log("good".toUpperCase());

 // objects
 var obj1= {};  //object literals
 var capitals= {"andhra":"amravati", "stateOfTelangana": "hyderabad"}; //json object

 // there are basically two ways to access javascript object properties
 // 1) by using . operator
 // 2) by using [] operator

 console.log(capitals.andhra);
 console.log(capitals["stateOfTelangana"]);












