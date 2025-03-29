import loadCSS from '../load-css.js'
import sendRequest from '../../front-utils/fetchdata.js'
import { closeModal } from '../modal/modal.js'
import {updateContent, disabledMessageArea } from '../../front-utils/front-utils.js'

loadCSS('./component/register/register.css')

const LoginForm = () => {
    return `
         <div class="container">
                <form id="loginForm">
                    <input type="email" id="loginEmail" placeholder="Email" required>
                    <input type="password" id="loginPassword" placeholder="Password" required>
                    <button type="submit" id="login-btn">Login</button>
                </form>
        </div>
    `
}
const loginUser = async () => {
    const form = document.getElementById('loginForm')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const userData = {
            email: form.loginEmail.value,
            password: form.loginPassword.value
        }
        console.log(userData);
        try {
            const result = await sendRequest('/get-user', 'POST', userData)        
            if (result) {
                // console.log('Result of login:', result)
                window.isUser=result
                const logoutBtn = document.querySelector('.logout')
                logoutBtn.textContent=result.first_name+'-Logout'
                closeModal()
                disabledMessageArea(false)

                sendRequest('/data', 'GET', '').then(data => {
                    if (data.message) {
                        console.log(data.message)
                        return
                    }
                    console.log('Result of get user data:', data)
                    updateContent(data)
                }).catch(err => console.log(err))

                return result
            } else (
                console.log('User : No data in DB...!')
            )
        } catch (error) {
            console.log('error:', error);
        }
        
    })
}
export {
    LoginForm, 
    loginUser
}