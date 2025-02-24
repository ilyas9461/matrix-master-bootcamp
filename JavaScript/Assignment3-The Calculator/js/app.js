import {
    dispData,
    resetDispData,
    holdOperator,
    calculateWithOperand
} from './util.js'     // import some functions from another file.

const allBtnHTML = document.getElementsByTagName('button')  // select all buttons.
const buttonsArray = [...allBtnHTML];                       // convert HTML collections to array.
const display = document.querySelector('.display')          // select display element.
const board = document.getElementsByTagName('textarea')[0]  // select element in history area.

//Add click event all buttons
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // console.log(e.target);

        // e means event, when event become we can reach event object and find target element.
        // also we can use every properties and methods.

        const  className = e.target.className    // we reach button class name and separate every group of buttons.   
        const textContent = e.target.textContent // we reach button text content, it means the text in button elements.
                                                 // so we can control which button or button groups are clicked using 
                                                 // these two constants.

        if (className === 'history-btn') board.value = ''
                                    //              C: Clear               CE: Clear Entry
        if (dispData.calculated || textContent === 'C' || textContent === 'CE') {  //
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
                dispData.text = dispData.text.slice(0, -1)         // remowe string from right side.

            if (!isNaN(dispData.text)) dispData.clckOperator = ''  // if we erase operator we must reset this key because
                                                                   // if we clicked operator we set this key.
        }

        if (textContent === '1/x' && parseFloat(dispData.text) > 0) {
            dispData.text = (1 / (parseFloat(dispData.text))).toFixed(3) // first string value convert to float number then
                                                                         // only 3 digits after the decimal point were
                                                                         // allowed in the result.
            dispData.clkAnotherOperator = true
        }

        if (textContent === 'x²' && parseFloat(dispData.text) > 0) {
            dispData.text = (parseFloat(dispData.text) * parseFloat(dispData.text)).toFixed(3)
            dispData.clkAnotherOperator = true
        }

        if (textContent === '²√x' && parseFloat(dispData.text) > 0) {
            dispData.text = Math.sqrt(parseFloat(dispData.text)).toFixed(3)
            dispData.clkAnotherOperator = true
        }

        holdOperator(className, textContent, dispData)  // we checked which operators clicked and set object data.

        if (className.includes('equal') && !dispData.calculated) {
            // debugger  // it allows debug operation on the browser and we can see step by step code flow.
            if (dispData.clckOperator !== '' && dispData.text.length > 2) {

                let boardText = board.value + dispData.text
                let operands = dispData.text.split(dispData.clckOperator) // we split the operation text in the display according 
                                                                          // to operator. the result of the split is array.

                dispData.text = calculateWithOperand(operands[0], operands[1], dispData.clckOperator)

                if (dispData.text === undefined)
                    dispData.text = ''
                else {
                    boardText += ' = ' + dispData.text + '\n'
                    board.value = boardText  // update history area.
                }

                dispData.calculated = true
                // console.log('dispData.text:', dispData);
            }
            else {
                resetDispData()
            }
        }

        display.value = dispData.text  // update display after very click event.
    })// btns add listener
})


