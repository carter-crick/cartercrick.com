// --VALUE DECLARATION-- //
    // declaring the variables for the values entered, the operators to perform, and the input
    var values = []
    var operators = []
    var input = ""
//

// --BUTTON PRESS FUNCTION-- //
    // creating the function that adds the number that the user presses to the input variable and displays the new input
    function press(numberClicked) {
    input = input + numberClicked;
    document.getElementById('display').innerText = input
    if(document.getElementById('equationDisplay').innerText = "What should I calculate?") {
        document.getElementById('equationDisplay').innerText = ''
    }
    document.getElementById('equationDisplay').innerText += input
    }
//

// --CLEAR FUNCTION-- //
    // this function displays "0" and resets the variables
    function clr() {
        console.clear();
        document.getElementById('display').innerText = "0";
        document.getElementById('equationDisplay').innerText = "What should I calculate?";
        values = [];
        operators = [];
        input = "";
        operatorBorder('');
    }
//

// --OPERATOR PRESS FUNCTION-- //
    // when an operator is pressed, this function pushes the last entered value to the value array as a number with decimal places, pushes the pressed operator to the operator array, and resets the input value to an empty string
    function setOP(operator) {
        if(input !== "") {
            values.push(parseFloat(input));
            input = "";
            operators.push(operator);
        }
        operatorBorder(operator);
    }
    //Border effect on button for when operator is in use
    function operatorBorder(operator) {
    var operatorButtons = document.querySelectorAll('.operator');
    document.getElementById('equationDisplay').innerText += operator
    operatorButtons.forEach(function(button) {
        button.classList.remove('pressed');
    });

    var buttonID;
    switch(operator) {
        case '+':
            buttonID = 'add';
            break;
        case '-':
            buttonID = 'subtract';
            break;
        case '*':
            buttonID = 'multiply';
            break;
        case '/':
            buttonID = 'divide';
            break;
    }
    if (buttonID) {
        document.getElementById(buttonID).classList.add('pressed');
    }
    }
//

// --CALCULATE FUNCTION-- //
    // when the equals button is pressed, this function pushes the last entered value to the value array as a number with decimal places, executes the multiplication and division expressions, then the addition and subtraction expressions, replaces the used values and removes the used operator after each expression, resets the values array, and resets the input value to an empty string
    function calculate() {
        console.log("calculate function started");
        operatorBorder('');
        if(input !== "") {
            values.push(parseFloat(input));
            input = "";
        }
            while (operators.length > 0) {
                var index = operators.findIndex(operator => operator === "*" || operator === "/");
            
                if (index === -1) {
                    index = 0;
                }

                var result;
                switch(operators[index]) {
                    case "*":
                        result = values[index] * values[index + 1];
                        break;
                    case "/":
                        result = values[index] / values[index + 1];
                        break;
                    case "+":
                        result = values[index] + values[index + 1];
                        break;
                    case "-":
                        result = values[index] - values[index + 1];
                        break;
                }
                values.splice(index, 2, result);
                operators.splice(index, 1);
                }
                
                var calculatedResult = values[0];
                calculatedResult =+ calculatedResult.toFixed(8);
                values = [];
                input = "";
                document.getElementById('display').innerText = calculatedResult;
            }
//







// --ADDITIONAL FUNCTIONALITY-- //

    // BACKSPACE TO REMOVE LAST NUMBER IN DISPLAY
    function backspace() {
        input = input.slice(0, -1);
        document.getElementById('display').innerText = input;
    }

    // KEYBOARD PRESSES TO BUTTON PRESSES + BACKSPACE
    window.addEventListener('keydown', function(e) {
        switch (e.key) {
            case '0':
                press(0);
                break;
            case '1':
                press(1);
                break;
            case '2':
                press(2);
                break;
            case '3':
                press(3);
                break;
            case '4':
                press(4);
                break;
            case '5':
                press(5);
                break;
            case '6':
                press(6);
                break;
            case '7':
                press(7);
                break;
            case '8':
                press(8);
                break;
            case '9':
                press(9);
                break;
            case '.':
                press('.');
                break;
            case '+':
                setOP('+')
                break;
            case '-':
                setOP('-')
                break;
            case '*':
                setOP('*')
                break;
            case '/':
                setOP('/')
                break;
            case '=':
            case 'Enter':
                calculate();
                break;
            case 'Escape':
                clr();
                break;
            case 'Backspace':
                backspace();
                break;
        }
    });