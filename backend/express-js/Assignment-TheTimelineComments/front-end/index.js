import sendRequest from "./front-utils/fetchdata.js"
import { submitPost,updateContent,removeContent,disabledMessageArea } from './front-utils/front-utils.js'
import { showModalWith } from "./component/modal/modal.js"
import {submitUser} from './component/register/register-form.js'
import { loginUser } from "./component/login/login.js"

const registerBtn = document.querySelector('.register')
const loginBtn = document.querySelector('.login')
const postBtn = document.getElementById('post') 
const logoutBtn = document.querySelector('.logout')

window.frontData = []       // Global variable for all of js files.
window.isUser=false

disabledMessageArea(true)

logoutBtn.onclick=()=>{
    window.isUser=false
    logoutBtn.textContent='Logout'
    removeContent()
}

registerBtn.onclick=e=>{
    console.log('Register', e.target);
    showModalWith('REGISTER')
    submitUser()
}

loginBtn.onclick=e=>{
    showModalWith('LOGIN')
    loginUser()
}

postBtn.onclick = ('submit', async (e) => {
    e.preventDefault()

    const data = await submitPost()
    updateContent(data)
})

if(window.isUser){
    sendRequest('/data', 'GET', '').then(data => {
        if (data.message) {
            console.log(data.message)
            return;
        }
        updateContent(data)
    }).catch(err => console.log(err));
}

