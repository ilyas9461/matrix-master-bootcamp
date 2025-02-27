const form = document.createElement('form')
document.body.appendChild(form)

const input = document.createElement('input')
input.placeholder = 'TO DO'
form.appendChild(input)

const button = document.createElement('button')
button.innerText = 'ADD'
button.role = 'submit'

form.appendChild(button)

const ul = document.createElement('ul')
document.body.appendChild(ul)

const removeElement = el => {
    el.remove()
}



form.onsubmit = (e) => {
    e.preventDefault()    
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = input.value + ' ❌'
    input.value=''
    li.classList.add('dynamic-class')
    // li.onclick = removeElement.bind(null, li) // OR
    li.onclick = ()=>removeElement(li)
}

document.body.style.padding='20px'
// document.body.setAttribute('class', 'blue')
// const stylesheet = document.styleSheets

const styles = {
    color: "black",
    backgroundColor: "coral",
    fontSize: "20px",
    padding: "10px",
    border: "2px solid black",
    width:"450px",
    margin:'20px'
  };  
  // Apply styles
  Object.assign(form.style, styles);  //inline style

  /////////////

  function createCSSClass(className, styles) {
    const styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
  
    let cssText = `.${className} { `;
    for (let key in styles) {
      cssText += `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${styles[key]}; `;
    }
    cssText += `}`;
  
    styleSheet.sheet.insertRule(cssText, 0);
  }
  
  // Define styles
  const newClassStyles = {
    color: "black",
    backgroundColor: "smoke",
    fontSize: "22px",
    padding: "15px",
    borderRadius: "5px",
    marginLeft:'10px'
  };
  
  // Create and apply the class
  createCSSClass("dynamic-class", newClassStyles);
  button.classList.add("dynamic-class");
  input.classList.add("dynamic-class");
  
  
