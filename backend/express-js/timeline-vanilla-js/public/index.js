// Purpose: Fetch data from the server and display it on the page
const getData = async () => {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();  // convert to json
        return data;
    } catch (err) {
        console.log(err);  // catch errors
    }
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

const content = document.querySelector('.content');

getData().then(data => {
    console.log("data:",data);
    
    data.forEach((post, index) => {
        content.innerHTML += `
            <h3> ${index}- ${post.name}  ${formatDateWithSuffix(post.createdAt)}</h3>
            <p>${post.message}</p>
        `;
    });
});

//getData().then(data => console.log(data));