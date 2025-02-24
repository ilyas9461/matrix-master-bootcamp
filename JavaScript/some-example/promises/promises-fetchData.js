function fetchData() {
    return new Promise(function (resolve, reject) {
        fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
            .then(response => response.json())
            .then(data => resolve(JSON.stringify(data.properties.periods[0])))
            .catch((err)=> reject(err))

    })
}

function displayData(weather) {
    console.log(`Weather : ${weather}`)
}

function onError(err) {
    console.log(`ERROR ${err}`)
}

fetchData()
    .then(displayData)
    .catch(onError)

console.log('Data is waiting...');
