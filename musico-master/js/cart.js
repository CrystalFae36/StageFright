// Set a cookie with a specific name, value, and expiration in days
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }
  
  // Retrieve a cookie by name
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
  
  // Delete a cookie by setting its expiration date to the past
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  // Function to add an item to the cart
function addToCart() {
    // Retrieve current cart from cookie or initialize an empty array
    const cartItems = JSON.parse(getCookie("cartItems") || "[]");
  
    // Create a new item to add to the cart
    const newItem = { id: cartItems.length + 1, name: "Product " + (cartItems.length + 1), quantity: 1 };
    cartItems.push(newItem);
  
    // Save the updated cart back to the cookie
    setCookie("cartItems", JSON.stringify(cartItems), 7);
    alert("Item added to cart!");
  }
  
  // Function to view cart items
  function viewCart() {
    // Retrieve cart items from cookie
    const cartItems = JSON.parse(getCookie("cartItems") || "[]");
  
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
    } else {
      let cartContent = "Cart items:\n";
      cartItems.forEach((item, index) => {
        cartContent += `${index + 1}. ${item.name} (Quantity: ${item.quantity})\n`;
      });
      alert(cartContent);
    }
  }
  
  // Function to clear the cart by deleting the cookie
  function clearCart() {
    deleteCookie("cartItems");
    alert("Cart cleared!");
  }
  