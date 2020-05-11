const calculatorBody = document.querySelector(".calculator-body");

calculatorBody.addEventListener("click", e => {
    alert(e.target.textContent);
});