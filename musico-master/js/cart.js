// Function to add an item to the cart with a dynamic name
function addToCart(itemName) {
  // Retrieve existing cart items or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  // Define a new item with the passed item name
  const newItem = { id: cartItems.length + 1, name: itemName, quantity: 1 };
  cartItems.push(newItem);

  // Save updated cart items back to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
  // Confirm the item was added
  alert(`Item added to cart: ${newItem.name}`);
}

// Function to display cart items in the modal
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = ""; // Clear previous content

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

// Function to open and display the cart modal
function openCartModal() {
  displayCartItems();
  document.getElementById("cartModal").style.display = "block";
}

// Function to close the cart modal
function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cartItems");
  alert("Cart cleared!");
  closeCartModal();
}
