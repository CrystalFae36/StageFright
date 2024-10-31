const btn = document.getElementsByClassName("genric-btn success circle")
const myText = document.getElementById("textField")
btn.addEventListener("click", function(){
    const myInsertText = "thanks for your purchace";
    myText.innerHTML = myInsertText;
});



import AOS from 'aos';
import 'aos/dist/aos.css';



document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 1200,   // Set the animation duration in ms
      once: true,       // Whether animation should happen only once
      easing: 'ease-in-out', // Animation easing
    });
  });
  