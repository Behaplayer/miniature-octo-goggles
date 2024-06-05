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
const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const inputCountry = document.getElementById("inputCountry");
let i = localStorage.length;
let inputLength = inputName.value.length;
let itemsObject = [{}];

inputName.addEventListener("input", () => {
  inputLength = inputName.value.length;
});

if (i > 0) {
  itemsObject["0"][`itemName${i - 1}`] = localStorage[`anItem${i - 1}`];
  for (let k = 0; k < i; k++) {
    console.log(k, i);
    document.getElementById(`test${k}`).innerHTML = itemsObject
      .map(
        (user) =>
          `
        <h1 class="cardMainTitle">Name: ${user[`itemName${k}`]}</h1>
        `
      )
      .join("");
  }
  itemsObject["0"][`itemName${i - 1}`] = localStorage[`anItem${i - 1}`];
}

inputBtn.addEventListener("click", () => {
  localStorage.setItem(`anItem${i}`, `${inputName.value}`);
  if (
    localStorage.getItem(`anItem${i}`) !=
      localStorage.getItem(`anItem${i - 1}`) &&
    inputName.value.length != 0
  ) {
    itemsObject["0"][`itemName${i}`] = localStorage[`anItem${i}`];
    document.getElementById(`test${i}`).innerHTML = itemsObject
      .map(
        (user) =>
          `
      <h1 class="cardMainTitle">Name: ${user[`itemName${i}`]}</h1>
      `
      )
      .join("");
    console.log("200");
    i++;
  } else {
    localStorage.removeItem(`anItem${i}`);
    console.log("500");
  }
  console.log(itemsObject);
});

let cardMainTitles = document.getElementsByClassName("cardMainTitle");

// inputBtn.addEventListener("click", () => {
//   console.log(cardMainTitles[i - 1].innerHTML);
// });

if (i > 1) {
  cardMainTitles[i - 1].innerHTML = itemsObject["0"][`itemName${i - 1}`];
}

// localStorage.clear();
