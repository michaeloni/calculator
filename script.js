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
            if (displayedNum === '0' || previousKeyType === "operator" || previousKeyType === 'calculate') {   
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
              
            console.log('operator key!');
            
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (
                firstValue &&
                operator &&
                previousKeyType === 'operator'
              ) {
                console.log(operator)
                const calcValue = calculate(firstValue, operator, secondValue)
                resultScreen.textContent = calcValue;
                
              // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue;
              } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum;
              }
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
              
        }
        
        if (action === 'clear-entry') {
            console.log('CE key!');
            resultScreen.textContent = 0;
            calculator.dataset.previousKey = 'clearEntry';
        }

        if (action === 'clear') {
            console.log('clear key!');
            calculator.dataset.firstValue = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
            resultScreen.textContent = 0;
            calculator.dataset.previousKey = 'clear';
        }
        
        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;
            console.log('equal key!');
            
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                  firstValue = displayedNum;
                  secondValue = calculator.dataset.modValue;
                  
                }
                
                resultScreen.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }
    }
});


function calculate(n1, operator, n2) {
  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);
  if (operator === 'add') return firstNum + secondNum;
  if (operator === 'subtract') return firstNum - secondNum;
  if (operator === 'multiply') return firstNum * secondNum;
  if (operator === 'divide') return firstNum / secondNum;
}