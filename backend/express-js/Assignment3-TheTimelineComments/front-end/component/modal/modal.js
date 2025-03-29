import loadCSS from '../load-css.js'
import { RegisterForm } from '../register/register-form.js'
import {LoginForm} from '../login/login.js'

loadCSS('./component/modal/modal.css')  // this path bases to server base Url. Like,  
                                        // http://localhost:3000/component/modal/modal.css

const Modal = (title, content) => {
    return `
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h2>${title}</h2>
                </div>
                <div class="close">&times;</div>
            </div>
            ${content}
        </div>

    </div>
    `
}

const showModalWith = component => {
    const modalContainer = document.querySelector('.modal-container')
    if (modalContainer) {
        modalContainer.innerHTML = ''
    }

    if (component === 'REGISTER') {
        modalContainer.innerHTML = Modal('Register Form', RegisterForm())
    }

    if (component === 'LOGIN') {
        modalContainer.innerHTML = Modal('Login', LoginForm())
    }

    const modal = document.getElementById("myModal")  // * This line have to be here. Modal have to load then btns update.
    if (modal) {
        updateModalBtns();
        modal.style.display = 'block';
    }
}

const closeModal = () => {
    const modal = document.getElementById("myModal")
    if (modal) {
        modal.style.display = "none";
    }
}

const updateModalBtns = () => {
    const closeBtn = document.querySelector('.close')
    const modal = document.getElementById("myModal");

    closeBtn.onclick = (e) => {
        closeModal()
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal()
        }
    }
}

export {
    Modal,
    updateModalBtns,
    showModalWith,
    closeModal
}
