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


// Load checkout items and display them on page load
document.addEventListener("DOMContentLoaded", () => {
  displayCheckoutItems();

  // Attach event listener to the Continue button after the page loads
  document.addEventListener("DOMContentLoaded", () => {
    const continueButton = document.getElementById("continueButton");

    if (continueButton) {
      continueButton.addEventListener("click", completePurchase);
    }
  });

  // Function to complete the purchase and clear the cart
  function completePurchase(event) {
    event.preventDefault(); // Prevent form submission if it's in a form

    // Confirm with the user before clearing the cart
    const isConfirmed = confirm("Are you sure you want to complete the purchase?");

    if (isConfirmed) {
      // Clear the cart items from localStorage
      localStorage.removeItem("cartItems");
      alert("Thank you for your purchase! Your cart has been cleared.");

      // Redirect to a thank-you page or reset UI elements
      window.location.href = "thankyou.html"; // Adjust this to your thank-you page URL
    }
  }

});
