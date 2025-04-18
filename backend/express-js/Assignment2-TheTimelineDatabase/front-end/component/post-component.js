import { formatDateWithSuffix, updateContent } from '../front-utils/front-utils.js'
import sendRequest from "../front-utils/fetchdata.js"

const Post = (post, index) => {
    return `
    <div class="posts">
        <div class="post-header">
          <h4>${index + 1} - ${post.name}  ${formatDateWithSuffix(post.createdAt)}</h4>
          <div class="post-btns">
            <button class="del-btn" data-index="${index}">Delete</button>
            <button class="edit-btn" data-index="${index}">Edit</button>
          </div>
        </div>       
        <textarea class="message-area" type="text" name="edit-text" id="edit-text-${index}" 
         value="${post.message}" disabled />${post.message}</textarea>     
    </div>
    `
}

let clickEventTracker = ''  // This variable store which element clicked in the 'Post' component.

const deleteBtnsUpdate = (deleteButtons) => {
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const dataIndex = e.target.getAttribute('data-index');

            console.log(`Delete button clicked for index: ${window.frontData[dataIndex]._id}`, window.frontData);

            const ans=prompt('If you want to delete this post, you must write "Yes" in the promt!')

            if(ans==='Yes'){
                sendRequest('/delete', 'DELETE', window.frontData[dataIndex])
                .then(data => {
                    console.log('Delete:', data)
                    updateContent(data)
                })
            }           
        })
    });
}

const editBtnsUpdate = (editButtons) => {
    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const dataIndex = e.target.getAttribute('data-index')
            const clickedInputId = `edit-text-${dataIndex}`
            const editInput = document.getElementById(clickedInputId)

            console.log(`Edit button clicked for index: ${dataIndex}`)

            // If you click on the 'Edit' button, it will replace the text with 'Save'. 
            // After clicking the button again, the message will be updated and the button will be reset.
            if (clickEventTracker != clickedInputId && clickEventTracker === '') {
                e.target.textContent = 'Save'
                editInput.disabled = false
                clickEventTracker = clickedInputId
            } else if (clickEventTracker === clickedInputId) {
                e.target.textContent = 'Edit'
                editInput.disabled = true
                clickEventTracker = '' // reset variable
                console.log(editInput.value)

                window.frontData[dataIndex].message=editInput.value // it will change global variable data with the new data.

                sendRequest('/update', 'PUT', window.frontData[dataIndex])
                .then(data => {
                    console.log('Update:', data)
                    updateContent(data)
                })
            }
        });
    });
}
const postAreasUpdate = (postAreas) => {
    postAreas.forEach(postArea => {
        postArea.addEventListener('click', (e) => {
            console.log(e.target.classList);

            // const postElement = e.target.closest('.posts');
            // const editInput = postElement.querySelector(`#${clickEventTracker}`);

            // Check textarea or edit button            
            if ((e.target.tagName.toLowerCase() === 'textarea' ) ||
                e.target.classList.contains('edit-btn')) {
                return;
            }

            // If click wherever in the post area the update will cancel.
            if (clickEventTracker !== '') {
                                                                                    // get index from variable
                const clickedEditBtn = document.querySelector(`.edit-btn[data-index="${clickEventTracker.split('-')[2]}"]`);
                clickedEditBtn.textContent = 'Edit';
                const editInput = document.getElementById(clickEventTracker);
                editInput.disabled = true;
                clickEventTracker = '';
            }
        })
    })
}
const updatePostBtns = () => {
    const deleteButtons = document.querySelectorAll('.del-btn');
    const editButtons = document.querySelectorAll('.edit-btn');
    const postAreas = document.querySelectorAll('.posts')

    deleteBtnsUpdate(deleteButtons)
    editBtnsUpdate(editButtons)
    postAreasUpdate(postAreas)
}

export {
    Post,
    updatePostBtns,
}