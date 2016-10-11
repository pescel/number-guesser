function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNum = getRandom(0,100);
var guessButton = document.querySelector("[name='guess']")
guessButton.addEventListener('click', function() {
  //when guess button is clicked (triggers 'click' event) runs everything in between {}.
  var userNumber = document.querySelector("[name='userNumber']").value;
  userNumber = parseInt(userNumber);
  //finds input field with attribute name='userNumber' and grabs the value (number). ParseInt changes strings to intergers.
  if(isNaN(userNumber)) {
    alert("This is not a number!");
  }

  if(userNumber > 100 || userNumber < 0) {
    alert("This number is outside the range of possible answers!")
  }

  if(userNumber)

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

var clearButton = document.querySelector("[name='clear']");
clearButton.addEventListener('click', function() {
  document.querySelector("[name='userNumber']").value = null;
})

 var resetButton = document.querySelector("[name='reset']");
 resetButton.addEventListener('click', function() {
   document.querySelector("[name='userNumber']").value = null;
   randomNum = getRandom(0,100);
   document.querySelector(".pink-number").innerText = null;
   document.querySelector(".high-low").innerText = null;
 })
