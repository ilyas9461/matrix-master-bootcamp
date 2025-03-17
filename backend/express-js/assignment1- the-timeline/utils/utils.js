const swapElementsArr = (arr, a, b) => {
    //a and b are indexes
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const sortByCreatedAtWithFor = (arr, ascOrDesc) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Convert '12-05-2018' to a sortable format because date format in the array is different 
            // new Date() date format 2018-05-12 that way reverse method.
            let dateA = new Date(arr[j].createdAt.split("-").reverse().join("-"));
            let dateB = new Date(arr[j + 1].createdAt.split("-").reverse().join("-"))

            if (ascOrDesc && dateA > dateB) {
                swapElementsArr(arr, arr[j], arr[j + 1])
            } else {
                if (dateA < dateB) {
                    swapElementsArr(arr, arr[j], arr[j + 1])
                }
            }

        }
    }
}

const sortByCreatedAtWithArrMethod = (arr, ascOrDesc) => {
    arr.sort((a, b) => {
        const dateA = new Date(a.createdAt.split("-").reverse().join("-"))
        const dateB = new Date(b.createdAt.split("-").reverse().join("-"))
        if (ascOrDesc) return dateA - dateB; // Ascending order (oldest to newest)
        else return dateB - dateA
    })
}

// Get ordinal suffix (st, nd, rd, th)
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
    return `${months[date.getMonth()]} ${day}${getDaySuffix (day)} ${year}`;
}

module.exports = {
    sortByCreatedAtWithFor,
    sortByCreatedAtWithArrMethod,
    formatDateWithSuffix
}

