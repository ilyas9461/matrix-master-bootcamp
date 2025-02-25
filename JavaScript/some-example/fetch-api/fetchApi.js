const url = 'http://worldtimeapi.org/api/timezone/America/New_York'

async function getData() {
    const res = await fetch(url)
    console.log('response =', res)
}

getData()