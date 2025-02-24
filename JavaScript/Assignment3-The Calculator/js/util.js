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


export {
    dispData, 
    resetDispData,
    holdOperator,
    calculateWithOperand 
}