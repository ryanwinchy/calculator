
/*let num1 = 0;
let num2 = 0;
let operator = null;
let result =0;*/

//Basic math operations for calculator.
function add(a,b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}


//Operates based on the input.
function operate(num1, num2, operator) {
   

    if (operator === "+") {
        return add(num1, num2);
    }

    if (operator === "-") {
        return subtract(num1, num2);
    }

    if (operator === "*") {
        return multiply(num1, num2);
    }

    if (operator === "/") {
        return divide(num1, num2);
    }
    
}

let clickedNumbers = "";      //If you declare vars globally, functions can access them and update them globally.
let clickedOperatorCount = 0;
let clickedNumbers2 = "";
let displayNumber = "";
let currentOperator = "";



let inputButtons = document.querySelectorAll('.numButton');  //add click event listener to all num buttons and call show number to store input.
inputButtons.forEach(button => {
  
    button.addEventListener("click", showNumber);
    });


function showNumber() {            //storing user input from buttons into vars, before and after an operator is clicked.
    //document.getElementsByClassName('buttons') = this.value;
    //clickedNumbers.push(this.value);
    if (clickedOperatorCount === 0) {
    clickedNumbers += this.value;
    displayNumber += this.value;
    console.log("First Num Stored:" + clickedNumbers);
    updateScreen(displayNumber);
    }

    else if (clickedOperatorCount === 1) {
        clickedNumbers2 += this.value;
        displayNumber += this.value;
        updateScreen(displayNumber)
        console.log("Second Num Stored:" + clickedNumbers2);
        }

}

function updateScreen(display) {        //when called will update screen with latest display num.
let screen = document.querySelector('.screen');
screen.textContent = display;
}


/*
else if (clickedOperatorCount === 1) {

    let inputButtons = document.querySelectorAll('button');
    inputButtons.forEach(button => {
      
        button.addEventListener("click", showNumber2);
        });
    
    function showNumber2() {
        //document.getElementsByClassName('buttons') = this.value;
        //clickedNumbers.push(this.value);
        clickedNumbers2 += this.value;
        console.log(clickedNumbers2);
    
    }
    }
*/



let operatorButtons = document.querySelectorAll('.operatorButton');     //Add click event listener to all op buttons and increase count when any pressed.
operatorButtons.forEach(button => {
  
    button.addEventListener("click", countOperator);
    });

function countOperator() {             //Count when operator pressed.
    //document.getElementsByClassName('buttons') = this.value;
    //clickedNumbers.push(this.value);
    currentOperator = this.value;
    clickedOperatorCount ++;
    displayNumber = "";
    console.log(clickedOperatorCount);

}



let resetButton = document.querySelector('.resetButton');    //Reset when clear pressed.
resetButton.addEventListener("click", function() {
    resetVariables();

});

function resetVariables() {        //I LEARNED YOU CAN RESET VARS GLOBALLY. JUST DON'T PUT LET AS THEY ARE ALREADY DECLARED!
 clickedNumbers = "";
 clickedOperatorCount = 0;
 clickedNumbers2 = "";
 displayNumber = "";
 currentOperator = "";
 updateScreen(displayNumber);
}



let equalButton = document.querySelector('.equalityButton');    //Calculate on click.
equalButton.addEventListener("click", calculate)

function calculate() {

    if ((currentOperator === "/") && (clickedNumbers2 === 0 || clickedNumbers2 === "0")) {
        updateScreen("NEI!")
    }
    else {
    displayNumber = operate(clickedNumbers, clickedNumbers2, currentOperator);
    updateScreen(displayNumber);
    clickedNumbers = displayNumber;
    clickedOperatorCount = 0;
    clickedNumbers2 = 0;
    console.log(clickedNumbers2);
    }
}









      













