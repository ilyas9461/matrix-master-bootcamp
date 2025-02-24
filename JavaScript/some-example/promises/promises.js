function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('🔆')
                    break
                case 'Cloudy':
                    resolve('🌤')
                    break
                case 'Rainy':
                    resolve('🌧')
                    break
                default:
                    reject('NO ICON FOUND')
            }
        }, 2000)
    })
}

function onSuccess(data) {
    console.log(`Success ${data}`)
}
function onError(error) {
    console.log(`Error ${error}`)
}

// getWeather()
//     .then(getWeatherIcon)
//     .then(onSuccess, onError)

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError)

console.log('result is waiting...');