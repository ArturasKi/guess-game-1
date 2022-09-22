const window = document.querySelector("body");
const rectEl = document.querySelectorAll(".rect-element");
const correct = document.querySelector(".correct-guess");
const lose = document.querySelector(".lose");
const round = document.querySelector(".round");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const topScore = document.querySelector(".top");
const btnNext = document.querySelector(".btn-next");
const btnPlay = document.querySelector(".btn-play");
const newEl = document.createElement("div");

let win = false;
const winPoints = 3;
let guessTimes = 4;
let points = 0;
let roundNum = 1;
let maxPoints = 0;

newEl.classList.add("rect-answer");
newEl.textContent = "^_^";
correct.classList.add("hidden");
lose.classList.add("hidden");

const makeVisible = function () {
  rectEl.forEach((item) => (item.style.pointerEvents = "visible"));
};

const makeHidden = function () {
  rectEl.forEach((item) => (item.style.pointerEvents = "none"));
};

btnNext.addEventListener("click", function () {
  makeVisible();
  if (win === true) {
    rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);
    win = false;
    maxPoints = points > maxPoints ? points : maxPoints;
    guess.innerHTML;
    score.textContent = points;
    roundNum++;
    for (let i = 0; i < rectEl.length; i++) {
      rectEl[i].classList.remove("rect-element-selected");
    }
    topScore.innerHTML = `${maxPoints}`;
    window.style.backgroundColor = "burlywood";
    round.classList.remove('hidden');
    round.textContent = `ROUND ${roundNum}`;
    correct.classList.add("hidden");
    btnNext.classList.add("hidden");
  }
});

btnPlay.addEventListener("click", function () {
  makeVisible();
  rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);
  win = false;
  maxPoints = points > maxPoints ? points : maxPoints;
  guess.innerHTML = guessTimes;
  score.textContent = 0;
  points = 0;
  roundNum = 1;
  for (let i = 0; i < rectEl.length; i++) {
    rectEl[i].classList.remove("rect-element-selected");
  }
  topScore.innerHTML = `${maxPoints}`;
  window.style.backgroundColor = "burlywood";
  round.classList.remove('hidden');
  round.textContent = `ROUND 1`;
  lose.classList.add("hidden");
  correct.classList.add("hidden");
  btnPlay.classList.add("hidden");
  btnNext.classList.add("hidden");
});

function showHidden() {
  rectEl.forEach((item) =>
    item.addEventListener("click", (e) => {
      newEl.classList.remove("rect-answer-hidden");
      guess.innerHTML -= 1;
      e.target.classList.add("rect-element-selected");
      e.target.style.pointerEvents = "none";
      if (
        guess.innerHTML === "0" &&
        e.target.innerHTML !== '<div class="rect-answer">^_^</div>'
      ) {
        makeHidden();
        maxPoints = points > maxPoints ? points : maxPoints;
        topScore.innerHTML = `${maxPoints}`;
        window.style.backgroundColor = "lightcoral";
        window.style.pointerEvents = "none";
        lose.classList.remove("hidden");
        round.classList.add('hidden');
        btnPlay.style.pointerEvents = "visible";
        btnPlay.classList.remove("hidden");
        btnNext.classList.add("hidden");
      } else if (
        e.target.innerHTML === '<div class="rect-answer">^_^</div>' &&
        guess.innerHTML >= "0"
      ) {
        makeHidden();
        maxPoints = points > maxPoints ? points : maxPoints;
        topScore.innerHTML = `${maxPoints}`;
        btnNext.classList.remove("hidden");
        btnNext.style.pointerEvents = "visible";
        correct.classList.remove("hidden");
        round.classList.add('hidden');
        window.style.backgroundColor = "palegreen";
        window.style.pointerEvents = "none";
        score.textContent = points;
        win = true;
        points += winPoints;
        guess.innerHTML = +guess.innerHTML + guessTimes;
      }
    })
  );
}
showHidden();
