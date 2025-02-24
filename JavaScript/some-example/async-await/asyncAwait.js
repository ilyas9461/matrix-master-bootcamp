/**
    1. async and await must be used together .
        Exceptions: JS Modules & Chrome DevTools Console 
    2. async/await only affects Promise receiver. 
    3. You can await any function that returns a Promise.
    4. Any function can be converted to async .
    5. All async functions return a Promise 

        const me = { 
            async sayHello (){
                const  result = await callSomeAPI() 
                return result
            } 
        } 
        me.sayHello() 

    6. Error handling with try/catch
 */


async function start() {
    const data = await fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
    const result = await data.json()
    console.log(result.properties.periods[0].shortForecast)
}

function start2() {
    fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
        .then(data => data.json())
        .then(result => {
            //  result=JSON.stringify(result)
            console.log(result.properties.periods[0].shortForecast)
        })
}

start()
start2()