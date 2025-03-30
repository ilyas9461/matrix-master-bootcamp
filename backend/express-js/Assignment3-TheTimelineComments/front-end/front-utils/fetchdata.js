const baseUrl = 'http://localhost:3000'

const sendRequest = async (endPoint, method, bodyData) => {
    const url = baseUrl + endPoint
    const bodyOptions =  method !== 'GET' ? JSON.stringify(bodyData) : null    
    try {
        const response = await fetch(url, {
            method:method,
            headers: {
                'Content-Type': 'application/json'
            },
            body:bodyOptions
        })
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export default sendRequest