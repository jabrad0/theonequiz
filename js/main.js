var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


/*7) Using vanilla JavaScript, update the HTML of the element with the id of vanilla_output with the following text: "This content generated with vanilla JavaScript"*/
 document.querySelector('#vanilla_output').textContent = "This content generated with vanilla JavaScript."; /*I had to look up the exact syntax from previous class exercises*/

 // 8)Using jQuery, update the HTML of the element with the id of jquery_output with the following text: "This content generated with jQuery".

$("#jquery_output").append("This content generated with jQuery.")
/*Again, I had to look up the exact syntax from previous class exercises.*/

// ----------------------------------------------------------------
// FUNCTIONS
// 1)
var modulus = function(arg1, arg2){
  return (arg1 % arg2);
};
console.log(modulus(10, 3));

// 2)
var doMath = function(int1, int2, function_ref){
  return function_ref(int1, int2);
};

var add = function(int1, int2){
  return (int1 + int2);
};

var subtract = function(int1, int2){
  return (int1 - int2);
};

console.log(doMath(2, 3, add));
console.log(doMath(2, 3, subtract));


// ----------------------------------------------------------------
// ARRAYS
// 1) Write a function named sortedPlanets that returns an array of the planet names sorted alphabetically.
var sortedPlanets = function(someArray){
  sortedPlanets_Array = someArray.sort();
  return sortedPlanets_Array;
};
console.log(sortedPlanets(Planets));

// 2) Write a function named reversedPlanets that returns an array of planet names that are reversed (i.e. "htraE").

var reversedPlanets = function(someArray){
  var backwardPlanets = [];
  for (i=0; i<someArray.length; i++){
    var valueReversed = someArray[i].split('').reverse().join('');
    backwardPlanets.push(valueReversed);
  }
  return backwardPlanets;
};
console.log(reversedPlanets(Planets));

// OR using .forEach for my own practice (had to read about it again though):
function reversedPlanets2(someArray){
  var backwardPlanets2 = [];
  someArray.forEach(function(item){
    var valueReversed = item.split('').reverse().join('');
    backwardPlanets2.push(valueReversed);
  })
  return backwardPlanets2;
};
console.log(reversedPlanets2(Planets));

// 3) Write a function named longPlanets that returns an array containing only the planet names that are 7 characters long, or longer.

var longPlanets = function(someArray){
  var longPlanets = [];
  for (i=0; i<someArray.length; i++){
    if (someArray[i].length >= 7){
        longPlanets.push(someArray[i]);
    }
  }
  return longPlanets
};
console.log(longPlanets(Planets));

// OR using .forEach for my own practice:
function longPlanets2(someArray){
  var longPlanets2 = [];
  someArray.forEach(function(item){
    if (item.length >= 7){
        longPlanets2.push(item);
    }
  })
  return longPlanets2
};
console.log(longPlanets2(Planets));
