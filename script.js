document.querySelector('.btn').addEventListener("click", () => {
  document.querySelector('.title').textContent = "제목아닙니다."
})

//--------------------------------------------------------------

function sum(num1, num2) {
  answer = num1 + num2;
  return answer;  
}
console.log(sum(3,4));

//----------------------------------------------------

function isEvenOrOdd(num) {
  if(num % 2 === 0) {
    console.log("짝수입니다.");
  }else{
    console.log("홀수입니다.");
  }
  
}
isEvenOrOdd(12);

//-------------------------------------------------------------

const name = "샛별";
const age = "7";

console.log("이름:" + name);
console.log("나이:" + age);