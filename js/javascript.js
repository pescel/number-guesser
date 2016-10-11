function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNum = getRandom(0,100);
var guessButton = document.querySelector("[name='guess']")
var clearButton = document.querySelector("[name='clear']");
var resetButton = document.querySelector("[name='reset']");
var userInput = document.querySelector("[name='userNumber']");


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
  }

 })

 for (i = 0; i < array.length; i++) {
   array[i]
 }
