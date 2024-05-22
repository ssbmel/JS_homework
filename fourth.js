const cardBox = document.querySelector(".card");
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");

const person = [
  {
    name : "철수",
    age : 19,
    gender : "남"
  },
  {
    name : "짱구",
    age : 20,
    gender : "남"
  },
  {
    name : "유리",
    age : 21,
    gender : "여"
  }
]

console.log(person);

person.forEach((person) => {
  let html = `
    <h1 class="name">이름 : ${person.name}</h1>
    <p class="age">나이 : ${person.age} </p>
    <p class="gender">성별 : ${person.gender} </p> 
    <hr>
  `
  cardBox.innerHTML += html;
})


const female = person.find((person) => {
    return person.gender === "여";
  }) 
console.log(female);


const male = person.filter((person) => {
  return person.gender === "남";
})
console.log(male);


const plusAge = person.map((person) =>{
  return {
    name : person.name,
    age : person.age + 10,
    gender : person.gender
  }
})
console.log(person);
console.log(plusAge);

const sortPerson = [...person];
const sort = sortPerson.sort((a, b) => {
  return b.age - a.age
})
console.log(person);
console.log(sort);


const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}

const {이름, 나이, 주소} = user;
console.log(user);

localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));


const editData = {
  ...user,
  나이 : 30
}
localStorage.setItem("user", JSON.stringify(editData));

localStorage.removeItem("user");
console.log(JSON.parse(localStorage.getItem("user")));