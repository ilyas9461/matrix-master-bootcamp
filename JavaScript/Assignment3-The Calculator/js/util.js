// Util functions for calculator

const dispData = {
    text: '',                   // display text
    clckOperator: '',           // control value about operator (+,-,x,/,=). If click operator we change this value and
                                // we know in calculation which operator we can use. After calculation we can reset 
                                // this value and start another operation.
    calculated: false,          // we check calculation whatever done or not.
    clkAnotherOperator:false,   // we check if another operator button was clicked.
}

const resetDispData = () => {
    dispData.text = ''
    dispData.clckOperator = ''
    dispData.calculated = false
    dispData.clkAnotherOperator = false
}

const holdOperator = (btnClassName, textContent, dispObj) => {
    if (dispObj.text === '0') {
        dispObj.text = ''
        return
    }
    if (btnClassName.includes('operator')) {

        console.log(dispObj);

        if (dispObj.clckOperator  === '') {
            dispObj.clckOperator = textContent
            dispObj.text += textContent

            if(dispObj.text.length==1) {
                dispObj.text= dispObj.clckOperator=''
            }
        }      
    }
}

const calculateWithOperand = (op1, op2, operator) => {
    if (operator === '+') return (parseFloat(op1) + parseFloat(op2))
    if (operator === '-') return (parseFloat(op1) - parseFloat(op2))
    if (operator === 'x') return (parseFloat(op1) * parseFloat(op2))
    if (operator === '÷') return ((parseFloat(op1) / parseFloat(op2))).toFixed(3)
}

// export functions
export {
    dispData, 
    resetDispData,
    holdOperator,
    calculateWithOperand 
}