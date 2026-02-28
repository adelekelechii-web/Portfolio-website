console.log("JavaScript is connected!");
document.addEventListener("DOMContentLoaded",  function() {
    const button = document.getElementById("changeTextBtn");
    const aboutText = document.getElementById("aboutText"); 
    let isChanged = false;
    button.addEventListener("click", function() {
        if (!isChanged) {
            aboutText.textContent = "I just added JavaScript to my Website!";
            aboutText.style.backgroundColor = "#ffefc2"
            aboutText.style.color = "#333"
            button.textContent = "Change Back";
            isChanged = true;
        } else {
            aboutText.textContent = "I'm learning full Stack Development step by step and building my first projects.";
            aboutText.style.backgroundColor = "";
            aboutText.style.color = "";
            button.textContent = "Click Me";
            isChanged = false
        }
    });
 });