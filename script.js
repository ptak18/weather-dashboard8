
const APIkey="77beaa8b73613aae884a554c3ced00ef"
const lat= 50
const lon= 50
const URL= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
console.log(URL)

fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
   
// When a user views the current weather conditions for that city they are presented with:
//     * The city name
//     * The date
//     * An icon representation of weather conditions
//     * The temperature
//     * The humidity
//     * The wind speed
