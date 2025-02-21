const dispData = {
    text: '',
    clckOperator: '',
    calculated: false,
    clkAnotherOperator:false,
}

const resetDispData = () => {
    dispData.text = ''
    dispData.clckOperator = ''
    dispData.calculated = false
    dispData.clkAnotherOperator = false
}

const holdOperator = (btnClassName, textContent, dispObj) => {
    if (btnClassName.includes('operator')) {
        // let { clckOperator, text } = dispObj
        console.log(dispObj);
        if (dispObj.clckOperator  === '') {
            dispObj.clckOperator = textContent
            dispObj.text += textContent
        }
    }
}

const calculateWithOperand = (op1, op2, operator) => {
    if (operator === '+') return (parseFloat(op1) + parseFloat(op2))
    if (operator === '-') return (parseFloat(op1) - parseFloat(op2))
    if (operator === 'x') return (parseFloat(op1) * parseFloat(op2))
    if (operator === '÷') return ((parseFloat(op1) / parseFloat(op2))).toFixed(3)
}


export {
    dispData, 
    resetDispData,
    holdOperator,
    calculateWithOperand 
}