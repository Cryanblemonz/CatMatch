let numberOfCards = document.querySelectorAll(".cards").length
let score = 0;
let Array1= [];
let cardsFlipped = 0;
let tempArray2 = []

// function checkMatch(){
//     if (cardsFlipped==2){
//         if (tempArray[1]==tempArray[2]){
//             score++;
//             cardsFlipped=0;
//         } else {
//             let firstCard = document.getElementsByClassName("cat"+tempArray[0]);
//             firstCard             
//         }
//     }
// }

// for(let i=0;i<numberOfCards;i++){
// document.querySelectorAll(".cards")[i].addEventListener("click", function () {
//         let randomNumber = Number(Math.floor(Math.random()*numberOfCards/2)+1)
//         if(tempArray2.includes(randomNumber)){


//         } else{
//         let chosenCardClass = this.classList;
//         if(chosenCardClass.contains("box")){
//         chosenCardClass.remove("box");
//         chosenCardClass.add("cat" + randomNumber);
//         tempArray.push(randomNumber);
//         tempArray2.push(randomNumber);
//         console.log(tempArray);
//         console.log(tempArray2);
//         cardsFlipped++;
//         } }
//         })
//     } 





// let randomNumber = Number(Math.floor(Math.random()*numberOfCards/2)+1)
// console.log(randomNumber);
// let chosenCardClass = this.classList;
// if(chosenCardClass.contains("box")){
// chosenCardClass.remove("box");
// chosenCardClass.add("cat1");
// } else if (chosenCardClass.contains("cat1")){
//     chosenCardClass.add("box");
//     chosenCardClass.remove("cat1");
// }
// }