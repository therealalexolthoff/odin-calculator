let firstNumber = null
let secondNumber = null
let operator = null

function operate(num1,num2,symbol) {
    const number1 = parseInt(num1)
    const number2 = parseInt(num2)
    const operator = symbol
    if (operator === "+"){
        const sum = number1+number2
        setCalculate(sum)
        saveFirstNum(sum)
    }
    else if (operator === "-"){
        const theDifference = number1-number2
        setCalculate(theDifference)
        saveFirstNum(theDifference)
    }
    else if (operator === "*"){
        const product = number1*number2
        setCalculate(product)
        saveFirstNum(product)
    }
    else if (operator === "/"){
        if (number2 === 0){
            setCalculate('No dividing by 0')
            setTimeout(clearAll,1000)
        }
        else {
            const quotient = number1 / number2
            setCalculate(quotient)
            saveFirstNum(quotient)
        }
        
    }
}

function saveFirstNum(result){
    firstNumber = String(result)
    secondNumber = null
}

function setCalculate(number){
    document.getElementById("calculationDisplay").placeholder = number
}


function respond(number) {
    if (!firstNumber){
        firstNumber = number
        setCalculate(firstNumber)
    }
    else if (!operator){
        firstNumber+= number
        setCalculate(firstNumber)
    }
    else if (!secondNumber){
        secondNumber = number
        setCalculate(`${firstNumber} ${operator} ${secondNumber}`)
    }
    else {
        secondNumber += number
        setCalculate(`${firstNumber} ${operator} ${secondNumber}`)
    }
}

function respondToOperatorInput(operatorInput) {
    if (operator && !secondNumber){
        alert('Please Input A Second Number!')
    }
    else if (operator && secondNumber){
        operate(firstNumber,secondNumber,operator)
        operator = operatorInput
        setCalculate(`${firstNumber} ${operatorInput}`)
    }
    else {
        operator = operatorInput
        setCalculate(`${firstNumber} ${operatorInput}`)
    }
}

function clearAll(){
    firstNumber = null
    secondNumber = null
    operator = null
    setCalculate('')
}

document.getElementById('plus').addEventListener('click',()=> {
    respondToOperatorInput('+')
})
document.getElementById('minus').addEventListener('click',()=> {
    respondToOperatorInput('-')
})
document.getElementById('multiply').addEventListener('click',()=> {
    respondToOperatorInput('*')
})
document.getElementById('divide').addEventListener('click',()=> {
    respondToOperatorInput('/')
})
document.getElementById('equals').addEventListener('click',()=> {
    operate(firstNumber,secondNumber,operator)
})
document.getElementById('clear').addEventListener('click',()=> {
   clearAll()
})

// numbers event listeners
document.getElementById('one').addEventListener('click',()=> {
    respond('1')
})
document.getElementById('two').addEventListener('click',()=> {
    respond('2')
})
document.getElementById('three').addEventListener('click',()=> {
   respond('3')
})
document.getElementById('four').addEventListener('click',()=> {
    respond('4')
})
document.getElementById('five').addEventListener('click',()=> {
    respond('5')
})
document.getElementById('six').addEventListener('click',()=> {
    respond('6')
})
document.getElementById('seven').addEventListener('click',()=> {
    respond('7')
})
document.getElementById('eight').addEventListener('click',()=> {
    respond('8')
})
document.getElementById('nine').addEventListener('click',()=> {
    respond('9')
})
document.getElementById('zero').addEventListener('click',()=> {
    respond('0')
})