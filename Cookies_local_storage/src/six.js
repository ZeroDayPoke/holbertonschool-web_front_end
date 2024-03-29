if (typeof Storage === "undefined") {
  alert(
    "Sorry, your browser does not support Web storage. Try again with a better one."
  );
} else {
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
  createStore(availableItems);
  displayCart();
}

function addItemToCart(item) {
  sessionStorage.setItem(item, true);
}

function createStore(items) {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => addItemToCart(item);
    ul.appendChild(li);
  });
}

function displayCart() {
  const itemsInCart = Object.keys(sessionStorage);
  if (itemsInCart.length > 0) {
    const message = `You previously had ${itemsInCart.length} items in your cart`;
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  }
}
