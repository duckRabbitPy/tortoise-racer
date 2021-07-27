// const tortoiseOne = document.querySelector(".tortoise-one");
// const tortoiseTwo = document.querySelector(".tortoise-two");
const message = document.querySelector(".message");
const goButton = document.querySelector(".race-go");
const replayButton = document.querySelector(".replay");
const addButton = document.querySelector(".add-racer");

const raceArea = document.querySelector(".race-area");

let move;
let raceOver = false;
let raceArr = [];
let currNum = 2;

goButton.addEventListener("click", () => {
  raceArr = [];
  const racers = document.querySelectorAll(".tortoise");
  racers.forEach((racer) => {
    let distance = 0;
    raceArr.push([racer, distance]);
  });

  if (!raceOver) {
    move = setInterval(moveTortoise, 500);
  }
});

function moveTortoise() {
  const racers = document.querySelectorAll(".tortoise");

  racers.forEach((tortoise, index) => {
    let newDistance = raceArr[index][1] + getRandomInt(10);
    raceArr[index][1] = newDistance;
    tortoise.style.transform = `translateX(${newDistance}vw)`;
    if (newDistance > 70) {
      clearInterval(move);

      sorted = raceArr.sort(compare);
      winner = sorted[0][0];
      winner.id = "winner";
      alert(`game over!`);
    }
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

replayButton.addEventListener("click", () => {
  raceOver = false;
  clearInterval(move);
  const racers = document.querySelectorAll(".tortoise");
  racers.forEach((tortoise) => {
    tortoise.id = "";
    tortoise.style.transform = `translateX(${0}vw)`;
  });

  message.innerHTML = "Let's go!";
});

addButton.addEventListener("click", () => {
  currNum += 1;
  //create new div
  const newContent = document.createElement("div");
  //add the tortoise class
  newContent.classList.add("tortoise");
  //add the tortoise number
  newContent.innerText = currNum;
  //append div child to raceArea parent
  raceArea.appendChild(newContent);
});

function compare(a, b) {
  if (b[1] < a[1]) {
    return -1;
  }
  if (b[1] > a[1]) {
    return 1;
  }
  return 0;
}
