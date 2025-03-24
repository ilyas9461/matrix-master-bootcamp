import sendRequest from "./fetchdata.js"
import { Post, updatePostBtns } from '../component/post-component.js'

const getDaySuffix = (n) => {
    if (n > 3 && n < 21) return "th"; // 11th, 12th, 13th...
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const formatDateWithSuffix = (dateStr) => {
    let date = ''
    let time = ''
    if (dateStr.includes(',')) {
        date = dateStr.split(',')[0]
        time = dateStr.split(',')[1]
    } else date = dateStr

    // Split "DD-MM-YYYY" and rearrange
    let [day, month, year] = date.split("-").map(Number);
    date = new Date(year, month - 1, day); // Month is 0-based in JS

    // Format: "Month DDth YYYY" and time
    return `${months[date.getMonth()]} ${day}${getDaySuffix(day)} ${year} ${time}`;
}

const submitPost = async () => {
    const name = document.getElementById('name');
    const message = document.getElementById('message');
    const createdAt = new Date().toLocaleDateString('en-GB').split("/").join("-") + ',' + new Date().toLocaleTimeString()
    const post = { name: name.value, message: message.value, createdAt };

    if (!name.value || name.value == '' || !message.value || message.value == '') return alert('Please fill in all fields!');
    try {
        const result = await sendRequest('/post', 'POST', post)
        console.log('Result of submit:', result);

        if (result) {
            name.value = message.value = ''
            return result
        } else (
            console.log('No data in DB...!')
        )
    } catch (error) {
        console.log('error:', error);
    }
}

const updateContent = (data) => {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    window.frontData = data // Store data as a global variable.

    if (data && data.length > 0) {
        content.innerHTML = ''
        data.forEach((post, index) => {
            content.innerHTML += Post(post, index)
        })

        updatePostBtns() // update all butons with click event

        // Set all textareas to fit with their content.
        const textareas = document.querySelectorAll('.message-area')
        textareas.forEach(textarea => {
            textarea.style.height = "auto";                         // Reset height to recalculate.
            textarea.style.height = textarea.scrollHeight + "px";   // Set height to match content.
        })

    } else console.log('No data...');

}

export {
    submitPost,
    formatDateWithSuffix,
    updateContent
}