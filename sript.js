const calculatorBody = document.querySelector(".calculator-body");
const resultScreen = document.querySelector(".result-screen");
const typeinScreen = document.querySelector(".typein-screen");

const allButtons = [...calculatorBody.querySelectorAll(".button")];
const allNumbers = [...calculatorBody.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operator")];

const resultButton = calculatorBody.querySelector(".enter");
const backButton = document.querySelector(".back-button");
const clearButton = document.querySelector(".clear-button");
let firstNumber = null;
let currentOperator = null;
let secondNumber = null;




allNumbers.forEach(number => {
    number.addEventListener("click", () => {
        if(typeinScreen.textContent == 0){
            typeinScreen.textContent = number.textContent;
        }
        else{
            typeinScreen.textContent += number.textContent;
        }
    })
});


operators.forEach(operator =>{
    operator.addEventListener("click", () => {
        if(typeinScreen.textContent.includes("+") || typeinScreen.textContent.includes("÷") || typeinScreen.textContent.includes("-") || typeinScreen.textContent.includes("×")){
            enter();
        }
        currentOperator = operator.textContent;
        firstNumber = Number(typeinScreen.textContent);
        if(typeinScreen.textContent == 0){
            return;
        }
        else{
            typeinScreen.textContent += operator.textContent;
        }
    })
})




function operate(firstNum, operator, secondNum){
    if(operator == "+"){
        return firstNumber + secondNumber;
    }
    else if(operator == "-"){
        return firstNumber - secondNumber;
    }
    else if(operator == "×"){
        return firstNumber * secondNumber;

    }
    else{
        return firstNumber / secondNumber;
    }
}
function setCurrentOperator(operator){
    currentOperator = operator;
}
function getCurrentOperator() {
    return currentOperator;
}

/*****Enter*****/
function enter(){
    if(typeinScreen.textContent.includes("=")){
        console.log(typeinScreen.textContent);
        typeinScreen.textContent += "=";
        typeinScreen.textContent = typeinScreen.textContent.replace(typeinScreen.textContent.slice(0, typeinScreen.textContent.indexOf("=") + 1), "");
        firstNumber = Number(typeinScreen.textContent.slice(0, typeinScreen.textContent.indexOf(getCurrentOperator())));
        secondNumber = Number(typeinScreen.textContent.slice(typeinScreen.textContent.indexOf(getCurrentOperator()) + 1, typeinScreen.textContent.indexOf("=")));
        resultScreen.textContent = operate(firstNumber, getCurrentOperator(), secondNumber);
        typeinScreen.textContent += resultScreen.textContent;
        return;
    }
    if(typeinScreen.textContent == 0){
        return;
    }
    else{
        typeinScreen.textContent += "=";
        secondNumber = Number(typeinScreen.textContent.slice(typeinScreen.textContent.indexOf(getCurrentOperator()) + 1, typeinScreen.textContent.indexOf("=")));
        resultScreen.textContent = operate(firstNumber, getCurrentOperator(), secondNumber);
        typeinScreen.textContent += resultScreen.textContent;
    }
}

resultButton.addEventListener("click", enter);



/******Clear Screen****/
function clear(){
    resultScreen.textContent = 0;
    typeinScreen.textContent = 0;
}

clearButton.addEventListener("click", clear);


/*******Back Button******/
function back(){
    if(typeinScreen.textContent.length == 1){
        typeinScreen.textContent = 0;
        return;
    }
    typeinScreen.textContent = typeinScreen.textContent.slice(0, typeinScreen.textContent.length - 1);
}

backButton.addEventListener("click", back)