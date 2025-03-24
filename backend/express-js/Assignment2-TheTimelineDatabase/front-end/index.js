import sendRequest from "./front-utils/fetchdata.js"
import { submitPost,updateContent } from './front-utils/front-utils.js'

const postBtn = document.getElementById('post')
const content = document.querySelector('.content')
window.frontData = []

postBtn.onclick = ('submit', async (e) => {
    e.preventDefault()
    const data = await submitPost()
    updateContent(data)
})

sendRequest('/data', 'GET', '').then(data => {
    // console.log('data:',data)
    if (data.message) {
        console.log(data.message);
        return;
    }
    updateContent(data)
}).catch(err => console.log(err));
