document.addEventListener("DOMContentLoaded", () => {
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
  if (typeof sessionStorage === "undefined") {
    alert(
      "Sorry, your browser does not support Web storage. Try again with a better one."
    );
  } else {
    createStore(availableItems);
    displayCart();
  }
});

function getCartFromStorage() {
  const cart = sessionStorage.getItem("cart");
  return cart ? JSON.parse(cart) : {};
}

function addItemToCart(item) {
  const cart = getCartFromStorage();
  cart[item] = (cart[item] || 0) + 1;
  sessionStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItemFromCart(item) {
  const cart = getCartFromStorage();
  delete cart[item];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  sessionStorage.clear();
  displayCart();
}

function createStore(items) {
  const storeContainer = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = "Available products:";
  storeContainer.appendChild(heading);
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => addItemToCart(item);
    ul.appendChild(li);
  });
  storeContainer.appendChild(ul);
  document.body.appendChild(storeContainer);
}

function displayCart() {
  let cartContainer = document.getElementById("cartContainer");
  if (!cartContainer) {
    cartContainer = document.createElement("div");
    cartContainer.id = "cartContainer";
    document.body.appendChild(cartContainer);
  }
  cartContainer.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "Your cart:";
  cartContainer.appendChild(heading);
  updateCart();
}

function updateCart() {
  const cart = getCartFromStorage();
  const cartContainer = document.getElementById("cartContainer");
  const ul = document.createElement("ul");
  if (Object.keys(cart).length === 0) {
    ul.appendChild(createCartItem("Your cart is empty", false));
  } else {
    for (const [item, quantity] of Object.entries(cart)) {
      ul.appendChild(
        createCartItem(`${item} x ${quantity}`, true, () =>
          removeItemFromCart(item)
        )
      );
    }
    ul.appendChild(createCartItem("Clear my cart", true, clearCart));
  }
  cartContainer.appendChild(ul);
}

function createCartItem(text, isClickable, onClick) {
  const li = document.createElement("li");
  li.textContent = text;
  if (isClickable) {
    li.style.cursor = "pointer";
    li.onclick = onClick;
  }
  return li;
}
