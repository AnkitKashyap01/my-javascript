//Data Types    -->




/*Javascript --> older version(8-10 years ago) does't support class, modules, and arrows 
  so we "use strict" to treat all JS code as newer version.*/
  
  "use strict"; // treat all JS code as newer version.

  //alert(3+3) --> can't run in nodejs in this format.**we are using nodejs, not browser.

  /*Javascript documentation --> 1.MDN by mozilla is prefered.
                                 2.ECMA script by TC39 -> original documentation.*/

let name = "ankit" //string type
let age = 21  //number type
let isloggedIn = false //boolean type

/*Primitive data types -->

1. number --> range upto 2 to power 53.
2. bigint --> when range of number exceed 2 to power 53.
3. string --> written in " ".
4. boolean --> true/false
5. null --> standalone value, eg- let state = null.
6. undefined --> when value is not assigned, eg- let state.
7. symbol --> unique
*/

let state = null
let area 
//object --> will study in later

//Typeof --> tells the type of variable.

// console.log(typeof 21)
// console.log(typeof "ankit")
// console.log(typeof isloggedIn)
// console.log(typeof state)
// console.log(typeof area)




//Datatype Conversion Confusion --->




// let score = 33
// console.log(typeof(score)); --> will give number.

let score="33"
console.log(typeof(score)); //--> will give a string value.

let valueInNumber = Number(score) //--> Number() is used to convert a variable in any type into number type. 
console.log(typeof valueInNumber);  //--> will give a number value.

let score1="33abc";
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);//--> will give number.
console.log(valueInNumber1);//--> will give NaN (Not a Number).


let score2=null
console.log(typeof(score2)); //will give an object.

let valueInNumber2 = Number(score2) 
console.log(typeof valueInNumber2); //will give a number.
console.log(valueInNumber2); // will give 0.



let score3=undefined
console.log(typeof(score3)); //--> will give a undefined value.

let valueInNumber3 = Number(score3) //--> Number() is used to convert a variable in any type into number type. 
console.log(typeof valueInNumber3);// will give a number value.
console.log(valueInNumber3);//will give NaN.


let score4=true
console.log(typeof(score4)); //--> will give a boolean value.

let valueInNumber4 = Number(score4) //--> Number() is used to convert a variable in any type into number type. 
console.log(typeof valueInNumber4);//will give a Number.
console.log(valueInNumber4);

/*Note---> "33"->33
            "33abc"->NaN
            true->1, false->0.*/
            
let islogged = 1;
let booleanIsLogged = Boolean(islogged);
console.log(booleanIsLogged);//true


let islogged1 = "";
let booleanIsLogged1 = Boolean(islogged1);
console.log(booleanIsLogged1);//false

let islogged2 = "ankit";
let booleanIsLogged2 = Boolean(islogged2);
console.log(booleanIsLogged2);//true

let someNumber = 33
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
