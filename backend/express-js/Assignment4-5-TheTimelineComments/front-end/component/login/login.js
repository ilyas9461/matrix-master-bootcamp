import loadCSS from '../load-css.js'
import sendRequest from '../../front-utils/fetchdata.js'
import { closeModal } from '../modal/modal.js'
import {updateContent, disabledMessageArea } from '../../front-utils/front-utils.js'

loadCSS('./component/register/register.css') // this path bases to server base Url. 
                                             // The main directorry of the front-end defines app.js
                                             // This is static files directory. In this projest is 'front-end' directory.

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
            const result = await sendRequest('/login', 'POST', userData)   
            console.log('Result of login:', result)     
            if (result || !result.error ) {
    
                localStorage.setItem('isUser', JSON.stringify(result))// if I want to show result in the local storage clearly.
                // localStorage.setItem('isUser', result)

                const logoutBtn = document.querySelector('.logout')
                logoutBtn.textContent=result.user.first_name+'-Logout'
                closeModal()
                disabledMessageArea(false)

                sendRequest('/data', 'GET', '').then(data => {
                    if (data.message) {
                        console.log(data.message)
                        return
                    }
                    console.log('Result of get all data after login:', data)
                    updateContent(data)
                }).catch(err => console.log(err))

                return result
            } else {
                console.log('User Login: No user data in DB...!')
                return
            }
        } catch (error) {
            console.log('error:', error);
        }
        
    })
}
export {
    LoginForm, 
    loginUser
}