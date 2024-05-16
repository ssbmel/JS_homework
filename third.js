let count = 0;

const intervalId = setInterval(() => {
  document.querySelector("#counter").textContent = count++;

  if(count === 5) {
    console.log("종료");
    clearInterval(intervalId);
  }
},1000);

// 0에서 시작해서 5초 카운트하면 브라우저에는 4로 끝나는데 이게 맞는지 모르겠습니당ㅎㅎ 