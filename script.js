function operate(num1,num2,symbol) {
    const num1 = num1
    const num2 = num2
    const operator = symbol
    if (operator === "+"){
        add(num1,num2)
    }
    else if (operator === "-"){
        subtract(num1,num2)
    }
    else if (operator === "*"){
        multiply(num1,num2)
    }
    else if (operator === "/"){
        divide(num1,num2)
    }



}

function add(num1,num2) {
    return num1 + num2
}

function subtract(num1,num2) {
    return num1 - num2
}

function multiply(num1,num2) {
    return num1 * num2
}

function divide(num1,num2) {
    return num1 / num2
}