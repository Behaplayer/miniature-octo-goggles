// const alls = document.getElementById("all");
// const lions = document.getElementById("lion");
// const turtles = document.getElementById("turtle");
// const ilyoses = document.getElementById("ilyos");
// const cardAlls = document.querySelectorAll(".card");
// const cardLions = document.querySelectorAll(".card1");
// const cardTurtles = document.querySelectorAll(".card2");
// const cardIlyoses = document.querySelectorAll(".card3");

// alls.addEventListener("click", () => {
//   for (let i = 0; i < cardAlls.length; i++) {
//     cardAlls[i].style.display = "block";
//     setTimeout(() => {
//       cardAlls[i].style.opacity = "1";
//     }, 0);
//   }
// });

// lions.addEventListener("click", () => {
//   for (let i = 0; i < cardLions.length; i++) {
//     cardLions[i].style.display = "block";
//     cardLions[i].style.opacity = "1";
//     cardTurtles[i].style.opacity = "0";
//     cardIlyoses[i].style.opacity = "0";
//     setTimeout(() => {
//       cardTurtles[i].style.display = "none";
//       cardIlyoses[i].style.display = "none";
//     }, 400);
//   }
// });

// turtles.addEventListener("click", () => {
//   for (let i = 0; i < cardLions.length; i++) {
//     cardTurtles[i].style.display = "block";
//     cardTurtles[i].style.opacity = "1";
//     cardLions[i].style.opacity = "0";
//     cardIlyoses[i].style.opacity = "0";
//     setTimeout(() => {
//       cardLions[i].style.display = "none";
//       cardIlyoses[i].style.display = "none";
//     }, 400);
//   }
// });

// ilyoses.addEventListener("click", () => {
//   for (let i = 0; i < cardLions.length; i++) {
//     cardIlyoses[i].style.display = "block";
//     cardIlyoses[i].style.opacity = "1";
//     cardTurtles[i].style.opacity = "0";
//     cardLions[i].style.opacity = "0";
//     setTimeout(() => {
//       cardTurtles[i].style.display = "none";
//       cardLions[i].style.display = "none";
//     }, 400);
//   }
// });

// const addCard = [];
const inputBtn = document.getElementById("theInputBtn");
const input = document.getElementById("input");
let i = localStorage.length;
let inputLength = input.value.length;
let objLS = [localStorage];

console.log(JSON.stringify());

input.addEventListener("input", () => {
  inputLength = input.value.length;
});

inputBtn.addEventListener("click", () => {
  localStorage.setItem(`anItem${i}`, `${input.value}`);
  if (
    localStorage.getItem(`anItem${i}`) !=
      localStorage.getItem(`anItem${i - 1}`) &&
    input.value.length != 0
  ) {
    let aCard = [localStorage].map(({ key, value }) => ({ [key]: value }));
    console.log("200");
    i++;
  } else {
    localStorage.removeItem(`anItem${i}`);
    console.log("500");
  }
});

// localStorage.clear();
