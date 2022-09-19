const screen = document.querySelector(".play-container");
const rectEl = document.querySelectorAll(".rect-element");
const correct = document.querySelector(".correct-guess");
const score = document.querySelector('.score');
const btnAgain = document.querySelector('.btn-again');

console.log(btnAgain);

const winPoints = 3;
let points = 0;

const newEl = document.createElement("div");
newEl.classList.add("rect-answer");
newEl.textContent = "^_^";

correct.classList.add("hidden");

rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);

btnAgain.addEventListener('click', function () {
    rectEl[Math.floor(Math.random() * rectEl.length)].appendChild(newEl);
    score.textContent = points;
    for(let i = 0; i < rectEl.length; i++) {
        rectEl[i].classList.remove('rect-element-selected');
    }
    screen.style.backgroundColor = "lightcoral";
    correct.classList.add("hidden");
})

function showHidden() {
  rectEl.forEach((item) =>
    item.addEventListener("click", (e) => {
      newEl.classList.remove("rect-answer-hidden");
      
      e.target.classList.add("rect-element-selected");
      if (e.target.innerHTML === '<div class="rect-answer">^_^</div>') {
        correct.classList.remove("hidden");
        screen.style.backgroundColor = "lawngreen";
        score.textContent = points;
        points += winPoints;
      }
    })
  );
}
showHidden();

