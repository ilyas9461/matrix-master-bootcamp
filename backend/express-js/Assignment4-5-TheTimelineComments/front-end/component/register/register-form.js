import loadCSS from '../load-css.js'
import sendRequest from '../../front-utils/fetchdata.js'
import { closeModal } from '../modal/modal.js'

loadCSS('./component/register/register.css') // this path bases to server base Url. 
                                             // The main directorry of the front-end defines app.js
                                             // This is static files directory. In this projest is 'front-end' directory.

const RegisterForm = () => {
    return `
         <div class="container">
                <form id="registerForm">
                    <input type="text" id="firstname" placeholder="First name" required>
                    <input type="text" id="lastname" placeholder="Last name" required>
                    <input type="email" id="email" placeholder="Email" required>
                    <input type="password" id="password" placeholder="Password" required>
                    <button type="submit">Submit</button>
                </form>
            </div>
    `
}

const submitUser = async () => {
    const form = document.getElementById('registerForm')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const userData = {
            first_name: form.firstname.value,
            last_name: form.lastname.value,
            email: form.email.value,
            password: form.password.value
        }
        console.log(userData)
        if (!userData.first_name || userData.first_name === '' ||
            !userData.last_name || userData.last_name === '' ||
            !userData.email || userData.email === '' ||
            !userData.password || userData.password === ''
        )
            return alert('Please fill in all fields!');

        try {
            const result = await sendRequest('/add-user', 'POST', userData)
            // console.log('Result of submit:', result)
            if (result) {
                alert("User save in the DB...!")
                closeModal()
                return result
            } else (
                console.log('No user data in DB...!')
            )
        } catch (error) {
            console.log('error:', error);
        }
    })
}

export {
    RegisterForm,
    submitUser
} 