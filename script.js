const container = document.querySelector("#container");
const box = document.getElementsByClassName("box");

container.addEventListener("click", (e) => {
  if(e.target.className === "box") {
    e.target.classList.add("clicked")
  }
})

//----------------------------------------------------

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
