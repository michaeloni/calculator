const calculator = document.querySelector(".calculator-body");
const resultScreen = document.querySelector(".result-screen");


calculator.addEventListener('click', (e) => {
    if (e.target.classList.contains("button")){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = resultScreen.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        
        if (!action) {
            if (displayedNum === '0' || previousKeyType === "operator") {   
                resultScreen.textContent = keyContent;
            }else{
                resultScreen.textContent = displayedNum + keyContent;
            }
            console.log('number key!');
            calculator.dataset.previousKey = 'number';
        }
        
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            console.log('operator key!');

            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator'
              ) {
                const calcValue = calculate(firstValue, operator, secondValue)
                resultScreen.textContent = calcValue;
                
              // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue
              } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
              }
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
            calculator.dataset.firstValue = displayedNum;
              
        }
        
        // calculator.dataset.firstValue = displayedNum;
        if (action === 'backspace') {
            console.log('backspace key!');
            calculator.dataset.previousKey = 'backspace';
        }

        if (action === 'clear') {
            console.log('clear key!');
            calculator.dataset.previousKey = 'clear';
        }
        
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            console.log('equal key!');

            calculator.dataset.previousKey = 'calculate';
            resultScreen.textContent = calculate(firstValue, operator, secondValue);
        }
    }
});


function calculate(n1, operator, n2) {
    let result = '';
  
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }
    
    return result;
}