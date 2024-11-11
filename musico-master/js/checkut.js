// Reuse calculateTotal function to sum up all items
function calculateTotal() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  // Adapted displayCartItems function for checkout page
  function displayCheckoutItems() {
    const checkoutItemsContainer = document.getElementById("checkoutItemsContainer");
    checkoutItemsContainer.innerHTML = ""; // Clear previous content
  
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    if (cartItems.length === 0) {
      checkoutItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartItems.forEach((item) => {
        const itemElement = document.createElement("p");
        const itemTotalPrice = (item.price * item.quantity).toFixed(2);
        itemElement.textContent = `${item.name} - ${item.quantity}  $${itemTotalPrice}`;
        checkoutItemsContainer.appendChild(itemElement);
      });
      updateTotalPrice(); // Update total display
    }
  }
  
  // Function to update the total price on the checkout page
  function updateTotalPrice() {
    const totalPriceElement = document.getElementById("totalPrice");
    const totalPrice = calculateTotal().toFixed(2);
    totalPriceElement.textContent = totalPrice;
  }
  
  // Function to handle "Finish Purchase" button click
  function finishPurchase() {
    alert("Thank you for your purchase!");
    // Implement checkout functionality or redirect here
  }
  
  // Load checkout items and display them on page load
  document.addEventListener("DOMContentLoaded", () => {
    displayCheckoutItems();
  });
  