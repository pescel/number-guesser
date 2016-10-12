function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// set default values
var min = 0;
var max = 100;
// set the variable randomNum to the result of running the function getRandom
var randomNum = getRandom(0,100);

// select DOM elements and set to variables
var guessButton = document.querySelector("[name='guess']");
var clearButton = document.querySelector("[name='clear']");
var resetButton = document.querySelector("[name='reset']");
var userInput = document.querySelector("[name='userNumber']");
var minInput = document.querySelector("[name='min']");
var maxInput = document.querySelector("[name='max']");

// take the minInput field and wait for the user to change what's in the box
minInput.addEventListener('input', function() {
  // when the user changes whats in the box, run this function
  min = minInput.value
  // min now equals the user's inputted min value
  min = parseInt(min)
  // have to change the input to an integer because its stupid and comes to us as a string
  randomNum = getRandom(min,max)
  // then we reassign the randomNum by running the function getRandom with the new min integer
});

// same thing but with max
maxInput.addEventListener('input', function() {
  max = maxInput.value
  max = parseInt(max)
  randomNum = getRandom(min,max)
});

guessButton.addEventListener('click', function() {
  //when guess button is clicked (triggers 'click' event) runs everything in between {}.
  var userNumber = userInput.value;

  userNumber = parseInt(userNumber);
  //finds input field with attribute name='userNumber' and grabs the value (number). ParseInt changes strings to intergers.
  if(isNaN(userNumber)) {
    return alert("This is not a number!");
  }

  if(userNumber > 100 || userNumber < 0) {
    alert("This number is outside the range of possible answers!")
  }

  document.querySelector(".pink-number").innerText = userNumber;
  //takes userNumber value and displays it as big pink numbers.

  if(userNumber < randomNum) {
    document.querySelector(".high-low").innerText = "That is too low"
  } else if(userNumber > randomNum) {
    document.querySelector(".high-low").innerText = "That is too high"
  } else {
    document.querySelector(".high-low").innerText = "YAYAAYAYAY!"
  }
});

//this disables the clear button once it's clicked.
clearButton.addEventListener('click', function() {
  userInput.value = null;
  clearButton.disabled = true;
})

//this is using the reset button to clear text box, come up with new random number, clear the pink number, and get rid of the high-low statement.
resetButton.addEventListener('click', function() {
   userInput.value = null;
   // we have to change the input of the min/max box (element) to the value of 0/100 when the reset button is clicked
   minInput.value = 0;
   maxInput.value = 100;
   randomNum = getRandom(0,100);
   document.querySelector(".pink-number").innerText = null;
   document.querySelector(".high-low").innerText = null;
 })

//
userInput.addEventListener('input', function() {
  if(userInput.value !== "") {
    clearButton.disabled = false;
  } else {
    clearButton.disabled = true;
  } })
