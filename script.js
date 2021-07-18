renderBoard();
var gCurrentNum = 1;
var gTimer = 0;
var gInterval;
function iniateInterval() {
  gInterval = setInterval(timer, 10);
}
function timer() {
  var elTimer = document.querySelector(".timer");
  elTimer.innerText = gTimer.toFixed(3);
  gTimer = gTimer + 0.01;
}
function renderBoard() {
  var strHTML = "";
  var uniqueArr = rand2dArr(16);
  for (var i = 0; i < uniqueArr.length; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < uniqueArr[0].length; j++) {
      strHTML += `<td onclick="cellClicked(this)">${uniqueArr[i][j]}</td>`;
    }
    strHTML += "</tr>";
  }
  var elBoard = document.querySelector(".board");
  elBoard.innerHTML = strHTML;
  console.log(uniqueArr);
}
function rand2dArr(range) {
  var arr = randomUniqueArray(range);
  var squareArr = [],
    chunk = Math.sqrt(range);
  while (arr.length > 0) {
    squareArr.push(arr.splice(0, chunk));
  }
  return squareArr;
}
function randomUniqueArray(range) {
  var arr = [];
  while (arr.length < range) {
    var res = Math.floor(Math.random() * range) + 1;
    if (arr.indexOf(res) === -1) arr.push(res);
  }
  return arr;
}
function cellClicked(element) {
  if (+element.innerText === 1) iniateInterval();
  if (+element.innerText === gCurrentNum) {
    element.classList.add("selected");
    gCurrentNum++;
  }
  if (+element.innerText === 16 && gCurrentNum === 17) clearInterval(gInterval);
}
