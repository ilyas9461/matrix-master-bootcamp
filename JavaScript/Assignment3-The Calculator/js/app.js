
import {
    dispData,
    resetDispData,
    holdOperator,
    calculateWithOperand
} from './util.js'

const allBtnHTML = document.getElementsByTagName('button')
const buttonsArray = [...allBtnHTML];
const operators = document.getElementsByClassName('operator')
const display = document.querySelector('.display')
const board = document.getElementsByTagName('textarea')[0]

console.log(dispData);

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let className = e.target.className
        let textContent = e.target.textContent

        if (dispData.calculated || textContent === 'C' || textContent === 'CE') {
            resetDispData()
            dispData.text = '0'
        }
        if (className === 'num-key') {
            if (dispData.text === '0') dispData.text = ''
            if (dispData.clkAnotherOperator) {
                dispData.clkAnotherOperator = false
                resetDispData()
            }
            dispData.text += textContent
        }
        if (textContent === '⌫') {
            if (dispData.text.length > 0)
                dispData.text = dispData.text.slice(0, -1)
            if (!isNaN(dispData.text)) dispData.clckOperator = ''

        }
        if (textContent === '1/x' && parseFloat(dispData.text) > 0) {
            dispData.text = (1 / (parseFloat(dispData.text))).toFixed(3)
            dispData.clkAnotherOperator = true
        }
        if (textContent === 'x²' && parseFloat(dispData.text) > 0) {
            dispData.text = (parseFloat(dispData.text) * parseFloat(dispData.text)).toFixed(3)
            dispData.clkAnotherOperator = true
        }
        if (textContent === '²√x' && parseFloat(dispData.text) > 0) {
            dispData.text =  Math.sqrt(parseFloat(dispData.text)).toFixed(3)
            dispData.clkAnotherOperator = true
        }


        holdOperator(className, textContent, dispData)

        // console.log(dispData);

        if (className.includes('equal') && !dispData.calculated) {
            // debugger
            if (dispData.clckOperand !== '' && dispData.text.length > 2) {

                let boardText = board.value + dispData.text
                let operands = dispData.text.split(dispData.clckOperator)
                dispData.text = calculateWithOperand(operands[0], operands[1], dispData.clckOperator)
                boardText += ' = ' + dispData.text + '\n'
                board.value = boardText
                dispData.calculated = true
            }
            else {
                resetDispData()
            }
        }

        display.value = dispData.text
        // console.log(dispData)
    })
})


