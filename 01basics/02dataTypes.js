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
console.log(typeof 21)
console.log(typeof "ankit")
console.log(typeof isloggedIn)
console.log(typeof state)
console.log(typeof area)

