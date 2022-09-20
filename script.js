const window = document.querySelector('body');
const rectEl = document.querySelectorAll(".rect-element");
const correct = document.querySelector(".correct-guess");
const lose = document.querySelector(".lose");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const btnNext = document.querySelector(".btn-next");
const btnPlay = document.querySelector(".btn-play");

console.log(screen)

let win = false;
const winPoints = 3;
let guessTimes = 4;
let points = 0;

const newEl = document.createElement("div");
newEl.classList.add("rect-answer");
newEl.textContent = "^_^";

correct.classList.add("hidden");
lose.classList.add("hidden");

rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);

btnNext.addEventListener("click", function () {
  if (win === true) {
    rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);
    win = false;
    guess.innerHTML;
    score.textContent = points;
    for (let i = 0; i < rectEl.length; i++) {
      rectEl[i].classList.remove("rect-element-selected");
    }
    window.style.backgroundColor = 'lavender';
    correct.classList.add("hidden");
    btnNext.classList.add("hidden");
  }
});

btnPlay.addEventListener("click", function () {
  rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);
  win = false;
  guess.innerHTML = guessTimes;
  score.textContent = 0;
  points = 0;
  for (let i = 0; i < rectEl.length; i++) {
    rectEl[i].classList.remove("rect-element-selected");
  }
  window.style.backgroundColor = 'lavender';
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
      if (
        guess.innerHTML === "0" &&
        e.target.innerHTML !== '<div class="rect-answer">^_^</div>'
      ) {
        window.style.backgroundColor = 'lightcoral';
        lose.classList.remove("hidden");
        btnPlay.classList.remove("hidden");
        btnNext.classList.add("hidden");
      } else if (
        e.target.innerHTML === '<div class="rect-answer">^_^</div>' &&
        guess.innerHTML >= "0"
      ) {
        btnNext.classList.remove("hidden");
        correct.classList.remove("hidden");
        window.style.backgroundColor = 'palegreen';
        score.textContent = points;
        win = true;
        points += winPoints;
        guess.innerHTML = +guess.innerHTML + guessTimes;
      }
    })
  );
}
showHidden();
