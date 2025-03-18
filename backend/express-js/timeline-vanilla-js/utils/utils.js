// const { posts } = require('../models/data.js')

const swapElementsArr = (arr, a, b) => {
    //a and b are indexes
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const sortByCreatedAtWithFor = (arr, ascOrDesc) => {

    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            // Convert '12-05-2018' to a sortable format because date format in the array is different 
            // new Date() date format 2018-05-12 that way reverse method.
            let dateA = new Date(arr[j - 1].createdAt.split("-").reverse().join("-"));
            let dateB = new Date(arr[j].createdAt.split("-").reverse().join("-"))

            if (ascOrDesc) {
                if (dateA > dateB) swapElementsArr(arr, j - 1, j)
            } else if (dateA < dateB) swapElementsArr(arr, j - 1, j)
        }
    }
    return arr
}

const sortByCreatedAtWithArrMethod = (arr, ascOrDesc) => {
    arr.sort((a, b) => {
        const dateA = new Date(a.createdAt.split("-").reverse().join("-"))
        const dateB = new Date(b.createdAt.split("-").reverse().join("-"))
        if (ascOrDesc) return dateA - dateB; // Ascending order (oldest to newest)
        else return dateB - dateA
    })
}

// sortByCreatedAtWithFor(posts, false).forEach(el => console.log(el.createdAt))

module.exports = {
    sortByCreatedAtWithFor,
    sortByCreatedAtWithArrMethod,
}

