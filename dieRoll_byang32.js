//
// This program is to simulate a dice roll
//



// While loop will continously prompt until valid name is inputed
var fName = prompt("Please enter your first name: ");

while (fName === "") {
   var fName = prompt("Please enter your first name: ");
}

// While condition is true continously prompt user for dice roll
var numDice = parseInt(prompt("How many dice would you like to roll? "));

while (isNaN(numDice) || numDice <= 0){
   var numDice = parseInt(prompt("Reminder: How many dice would you like to roll? Number should be a positive integer. "));
}  


// for loop alerts each number of rolls with total dice roll.
for (var i = 0; i < numDice; i++){
  
  if (numDice > 0){
    var rollTotal = diceRoll();
  alert("Dice roll is: " + rollTotal);
  }
  
}
document.write("You rolled " + numDice + "dice... ");
document.write("Hey " + fName + " you rolled a " + rollTotal);


// function used to generate and add random numbers for die1 and die2
function diceRoll(die1, die2){
  
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  
  return die1 + die2;
}

