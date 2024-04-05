"use strict";
// const funBtn = document.querySelector("button.btn");
// window.addEventListener("load", function (e) {
//   console.log("Страница загрузилась");
// });
// funBtn.addEventListener("click", function (e) {
//   console.log("Событие onclick");
// });
// const buttonContainer = document.querySelector("div.container");
// const btn1 = document.createElement("button");
// btn1.innerHTML = "1";
// const btn2 = document.createElement("button");
// btn2.innerHTML = "2";
// const btn3 = document.createElement("button");
// btn3.innerHTML = "3";
// const btn4 = document.createElement("button");
// btn4.innerHTML = "4";
// const btn5 = document.createElement("button");
// btn5.innerHTML = "5";
// buttonContainer.appendChild(btn1);
// buttonContainer.appendChild(btn2);
// buttonContainer.appendChild(btn3);
// buttonContainer.appendChild(btn4);
// buttonContainer.appendChild(btn5);
// const clickBtn = function (e) {
//   console.log(e.target.innerHTML);
// };
// btn1.addEventListener("click", clickBtn);
// btn2.addEventListener("click", clickBtn);
// btn3.addEventListener("click", clickBtn);
// let count = 0;
// btn4.addEventListener("click", function (e) {
//   count++;
//   console.log(`Кнопку 4 нажали ${count}`);
// });
// btn5.addEventListener("click", function (e) {
//   e.target.innerHTML = "Вы нажали на эту кнопку";
// });
// const buttonContainer = document.querySelector("div.container");
// const btn = document.createElement("button");
// btn.innerHTML = "button";
// buttonContainer.appendChild(btn);
// btn.addEventListener("click", function (e) {
//   const h1 = document.createElement("h1");
//   h1.innerHTML = "Новый заголовок";
//   buttonContainer.appendChild(h1);
// });
// const btn2 = document.createElement("button");
// btn2.innerHTML = "button2";
// buttonContainer.appendChild(btn2);
// btn2.addEventListener("click", function (e) {
//   const findH1 = document.querySelectorAll("h1");
//   findH1.forEach((el) => {
//     el.remove();
//   });
// });
// const btn3 = document.createElement("button");
// btn3.innerHTML = "button3";
// buttonContainer.appendChild(btn3);
// btn3.addEventListener("mouseover", function (e) {
//   console.log("Вы навели на данную кнопку");
// });
// btn3.addEventListener("mouseleave", function (e) {
//   console.log("Наведения на кнопку больше нет");
// });
const buttonContainer = document.querySelector("div.container");
const btn = document.createElement("button");
btn.innerHTML = "создать еще элемент";
buttonContainer.appendChild(btn);

const ulEl = buttonContainer.querySelector("ul");
btn.addEventListener("click", function (e) {
  const el = document.createElement("li");
  el.innerHTML = "новый элемент списка" + Math.trunc(Math.random() * 10);
  ulEl.appendChild(el);
});
const btn2 = document.createElement("button");
btn2.innerHTML = "Удалить элемент";
buttonContainer.appendChild(btn2);
btn2.addEventListener("click", function (e) {
  const liArray = ulEl.querySelectorAll("li");
  if (liArray.length > 0) {
    liArray[0].remove();
  }
});
const btn3 = document.createElement("button");
btn3.innerHTML = "Добавить класс";
buttonContainer.appendChild(btn3);
btn3.addEventListener("click", function (e) {
  e.target.setAttribute("class", "click");
});
