// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find(item => item.name === itemName);
  if (existingItem) {   
    existingItem.quantity += 1;       
  } else {
    const newItem = { id: Date.now(), name: itemName, price: itemPrice, quantity: 1 };
    cartItems.push(newItem);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${itemName} added to cart!`);
}

// Function to calculate and display the total cost of the cart
function calculateTotal() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to display cart items in the modal
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = ""; // Clear previous content

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach((item) => {
      const itemElement = document.createElement("p");
      const itemTotalPrice = (item.price * item.quantity).toFixed(2);
      itemElement.textContent = `${item.name} -${item.quantity} , $${itemTotalPrice}`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove One";
      removeButton.style.marginLeft = "10px";
      removeButton.style.fontSize = "12px"; // Make font smaller
      removeButton.style.padding = "5px 10px"; // Reduce padding for smaller button
      removeButton.style.borderRadius = "5px"; // Optional: rounded corners for a nicer look
      removeButton.style.cursor = "pointer"; // Makes the button clickable
      removeButton.onclick = () => removeOneFromCart(item.name);

      itemElement.appendChild(removeButton);
      cartItemsContainer.appendChild(itemElement);
    });
    const totalElement = document.createElement("p");
    totalElement.style.fontWeight = "bold";
    totalElement.textContent = `Total: $${calculateTotal().toFixed(2)}`;
    cartItemsContainer.appendChild(totalElement);

    // Finish Purchase Button
    const finishPurchaseButton = document.createElement("button");
    finishPurchaseButton.textContent = "Finish Purchase";
    finishPurchaseButton.style.marginTop = "20px";
    finishPurchaseButton.onclick = finishPurchase;
    cartItemsContainer.appendChild(finishPurchaseButton);
  }
}

// Function to remove one instance of an item from the cart by name
function removeOneFromCart(itemName) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const itemIndex = cartItems.findIndex(item => item.name === itemName);

  if (itemIndex !== -1) {
    const item = cartItems[itemIndex];
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cartItems.splice(itemIndex, 1);
    }
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCartItems();
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
  localStorage.removeItem("cartItems");
  alert("Cart cleared!");
  displayCartItems();
}

// Function to handle "Finish Purchase" button click
function finishPurchase() {
  closeCartModal();
  window.location.href = "merchbuy.html"; // Redirect to checkout page
}
