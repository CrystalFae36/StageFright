const btn = document.getElementsByClassName("genric-btn success circle")
const myText = document.getElementById("textField")
btn.addEventListener("click", function(){
    const myInsertText = "thanks for your purchace";
    myText.innerHTML = myInsertText;
});