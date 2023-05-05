let numberOfCards = document.querySelectorAll(".cards").length;
let score = 0;
let array1 = [];
let cardsFlipped = 0;
let checkArray = [];
let fails = 0;

document.querySelector(".score").innerHTML = "Score: " + score;
document.querySelector(".fails").innerHTML = "Fails: " + fails;

for (let i = 1; i < 31; i++) {
  array1.push(i);
}
function changeBack() {
  let card1 = document.getElementsByClassName("cat" + checkArray[0]).classList;
  let card2 = document.getElementsByClassName("cat" + checkArray[1]).classList;
  card1.add("box");
  card2.add("box");
  card1.remove("cat" + checkArray([0]));
  card2.remove("cat" + checkArray([1]));
}

let shuffledArray = array1.sort(() => Math.random() - 0.5);
console.log(shuffledArray);

for (let i = 0; i < numberOfCards; i++) {
  document.querySelectorAll(".cards")[i].addEventListener("click", function () {
    if (checkArray.length < 2) {
      let chosenCardClass = this.classList;
      if (chosenCardClass.contains("box")) {
        chosenCardClass.remove("box");
        if (array1[i] <= 15) {
          chosenCardClass.add("cat" + array1[i]);
          checkArray.push(array1[i]);
        } else {
          chosenCardClass.add("cat" + (array1[i] - 15));
          checkArray.push(array1[i] - 15);
        }
      }
      if (checkArray.length >= 2) {
        if (checkArray[0] == checkArray[1]) {
          score++;
          checkArray = [];
          console.log("match");
          console.log(score);
          document.querySelector(".score").innerHTML = "Score: " + score;
          document.querySelector(".fails").innerHTML = "Fails: " + fails;
          if (score == 15) {
            document.querySelector("h1").innerHTML = "YOU WIN!";
            document.querySelector("h1").classList.add('win');
            document.querySelector("h2").innerHTML = "Play again?";
            checkArray = [1,2];
            document.querySelector("h2").addEventListener('click', function(){
                window.location.reload();
            })
          }
        } else {
          setTimeout(() => {
            fails++;
            document.querySelector(".score").innerHTML = "Score: " + score;
            document.querySelector(".fails").innerHTML = "Fails: " + fails;
            let card1 = document.querySelector(".cat" + checkArray[0]);
            let card2 = document.querySelector(".cat" + checkArray[1]);
            card1.classList.add("box");
            card2.classList.add("box");
            card1.classList.remove("cat" + checkArray[0]);
            card2.classList.remove("cat" + checkArray[1]);
            checkArray = [];
          }, 1000);
        }
      }
    }
  });
}
