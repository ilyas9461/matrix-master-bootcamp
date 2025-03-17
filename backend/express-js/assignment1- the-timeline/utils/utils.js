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

const getDaySuffix = (n) => {
    if (n > 3 && n < 21) return "th"; // 11th, 12th, 13th...
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}
// Month names array
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const formatDateWithSuffix = (dateStr) => {
    // Split "DD-MM-YYYY" and rearrange to "YYYY-MM-DD"
    let [day, month, year] = dateStr.split("-").map(Number);
    let date = new Date(year, month - 1, day); // Month is 0-based in JS

    // Format: "Month DDth YYYY"
    return `${months[date.getMonth()]} ${day}${getDaySuffix(day)} ${year}`;
}

// sortByCreatedAtWithFor(posts, false).forEach(el => console.log(el.createdAt))

module.exports = {
    sortByCreatedAtWithFor,
    sortByCreatedAtWithArrMethod,
    formatDateWithSuffix
}

