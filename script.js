class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear()   {
     this.currentOperand = ''
     this.previousOperand = ''
     this.operation = undefined
    }
    delete()   {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number)  {
        if (number === '.' && this.currentOperand.includes('.')) return
     this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation)  {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '')  {
            this.compute()
        }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
    }

    compute()  {
     let computation
     const prev = parseFloat(this.previousOperand)
     const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
            case '+':
            computation = prev + current
            case '*':
            computation = prev * current
            case '/':
            computation = prev / current
            case '-':
            computation = prev - current
            default:
                return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
     }
    
     getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDislay
        if (isNaN(integerDigits)) {
            integerDislay = ''
        }   else {
            integerDislay = integerDigits.toLocaleString('en', {
                maximumFractionDigits:0 })
        }
     if (decimalDigits != null) {
        return `${integerDislay}.${decimalDigits}`
     }  else {
        return integerDislay
     }
     }

    updateDisplay()    {
    this.currentOperandTextElement.innerText = this.getDisplayNumber
    this.currentOperand
    if (this.operation != null) {
    this.previousOperandTextElement.innerText = 
       
     `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      }
      else   {
        this.previousOperandTextElement.innerText = ''

      }
    }
  }




const numberButtons = document.querySelectorAll('data-number')
const operationButtons = document.querySelectorAll('data-operation')
const equalsButtons = document.querySelectorAll('data-equals')
const deleteButtons = document.querySelectorAll('data-delete')
const allclearButtons = document.querySelectorAll('data-all-clear')
const previousOperandTextElement = document.querySelectorAll('data-previous-operand')
const currentOperandTextElement= document.querySelectorAll('data-current-operand')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButtons.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allclearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButtons.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})




























































































