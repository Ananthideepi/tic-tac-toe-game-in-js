const boxes = document.querySelectorAll(".box");
const statu = document.querySelector(".status");
const button = document.getElementById("resart");
let x = "<img src='./a.jpg'>";
// let o="<img src='./2.jpg'>";
let o = "o";
const win = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]
];
const options = ["", "", "", "", "", "", "", "", "", "", "",];
let player = "x";
let currentplayer = x;
let running = false;

start();

function start() {
  boxes.forEach((box) => box.addEventListener("click", () => {
    let index = box.dataset.index;
    if (options[index] != "" || !running) {
      return;
    }
    updatebox(box, index);
    winner();
  }))
  button.addEventListener("click", restart)
  statu.innerText = `${player} your turn`;
  running = true;
}

function updatebox(box, index) {
  options[index] = player;
  box.innerHTML = currentplayer;
}
function playerchange() {
  player = (player == "x") ? "o" : "x";
  currentplayer = (currentplayer == x ? o : x);
  statu.innerText = `${player} your turn`;
}
function winner() {
  let iswin = false;
  for (let i = 0; i <=win.length-1; i++) {
    const condition = win[i];
    const box1 = options[condition[0]];
    const box2 = options[condition[1]];
    const box3 = options[condition[2]];
    // console.log(box1, box2, box3)
    if (box1 == "" || box2 == "" || box3 == "") {
      continue;
    } else if(box1 == box2 && box2 == box3) {
      iswin = true;
    }
  }

  if (iswin==true) {
    statu.innerText = `${player} won...`;
    running = false;
  }
  else if (!options.includes("")) {
    statu.innerText = "Draw the match....";
    running = false;
  } else {
    playerchange();
  }
}
function restart() {
  const options = ["", "", "", "", "", "", "", "", "", "", "",];
  player = "x";
  currentplayer = x;
  running = true;
 let  iswin=false;
  statu.innerText = `${player} your turn`;
  boxes.forEach((box)=>{box.innerHTML=""});

} 