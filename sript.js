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
        if(firstNumber){
            secondNumber = number.textContent;
        }if(secondNumber){
            secondNumber += number.textContent;
        }
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



// allButtons.forEach(button => {
//     button.addEventListener("click", function(){
//         operators.forEach(operator => {
//             // if(getCurrentOperator())
//             if(button.textContent == operator.textContent){
//                 setCurrentOperator(operator.textContent);
//                 console.log(getCurrentOperator());
//             }
//         });
//         console.log(typeinScreen.textContent);


//         if(button.textContent !== "←"){
//             if(typeinScreen.textContent == 0){
//                 typeinScreen.textContent = button.textContent;
//             }
//             else{
//                 typeinScreen.textContent += button.textContent;
//             }
//             console.log(getCurrentOperator());
//         }
//     })
// })

function operate(firstNum, operator, secondNum){
    if(operator == "+"){

    }
    else if(operator == "-"){

    }
    else if(operator == "×"){

    }else{
        
    }
}
function setCurrentOperator(operator){
    currentOperator = operator;
}
function getCurrentOperator() {
    return currentOperator;
}



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