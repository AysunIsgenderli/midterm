import { data } from "./data.js";

const id = document.getElementById("id");
const cards = document.getElementById("cards");
const cartBtn = document.getElementById("cartBtn");
const shoppingCart = document.getElementById("shoppingCart");

fillCards();
function fillCards() {
  data.forEach((data) => {
    const html = ` <div class="card" id="${data.id}" >
              <div class="card-image">
                  <img src="${data.image}" alt="">
              </div>
              <div class="card-content">
                  <h1 class="title" id="title">${data.title}</h1>
                  <p class="content" id="content">${data.content}</p>
                  <span class="price" id="price">${data.price} $</span>
              </div>
              <button id="${data.id}" class="add">Add</button>
             </div>`;
    cards.innerHTML += html;
  });
}

function fillShoppingCartContainer() {
  const html = `
    <div class="product">
    <h1 id="cart-title"></h1>
    <p id="cart-content"></p>
</div>`;
}
function getProduct(event) {
  if (event.target.matches(".add")) {
    event.preventDefault();
    var id = event.target.id;
    cartBtn.textContent++;
  }
}
cards.addEventListener("click", getProduct);
