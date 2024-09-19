// script.js

// This function will run when a button with the class 'btn' is clicked
function showAlert() {
    alert("Button was clicked!");
}

// Add an event listener to all elements with the class 'btn'
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', showAlert);
});