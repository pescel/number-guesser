function getRandom(min, max) {
  return Math.random() * (max-min) + min;
}

var userNumber = document.querySelector("[name='userNumber']").value;

document.querySelector(".pink-number").innerText = userNumber;

var randomNum = getRandom(0,100);
if(userNumber < randomNum) {
document.querySelector(".high-low").innerText = "That is too low"
} else if(userNumber > randomNum) {
  document.querySelector(".high-low").innerText = "That is too high"
}
