// Function to set a cookie with a specific name, value, and expiration in days
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  return null;
}

// Function to delete a cookie by setting its expiration date to the past
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Function to add an item to the cart
function addToCart() {
  const cartItems = JSON.parse(getCookie("cartItems") || "[]");
  const newItem = { id: cartItems.length + 1, name: "Product " + (cartItems.length + 1), quantity: 1 };
  cartItems.push(newItem);
  setCookie("cartItems", JSON.stringify(cartItems), 7);
  alert("Item added to cart!");
}

// Function to display the cart items in the modal
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = ""; // Clear previous content

  const cartItems = JSON.parse(getCookie("cartItems") || "[]");

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach((item, index) => {
      const itemElement = document.createElement("p");
      itemElement.textContent = `${index + 1}. ${item.name} (Quantity: ${item.quantity})`;
      cartItemsContainer.appendChild(itemElement);
    });
  }
}

// Function to open the cart modal
function openCartModal() {
  displayCartItems(); // Load cart items each time the modal is opened
  document.getElementById("cartModal").style.display = "block";
}

// Function to close the cart modal
function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
}

// Function to clear the cart
function clearCart() {
  deleteCookie("cartItems");
  alert("Cart cleared!");
  closeCartModal(); // Close the modal after clearing the cart
}
