
const APIkey="77beaa8b73613aae884a554c3ced00ef"
const lat= 50
const lon= 50
const URL= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
console.log(URL)

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`)
.then(response => response.json())
.then(data => {
    const windspeed = data.list[0].wind.speed
    const humidity = data.list[0].main.humidity
    const temp = data.list[0].main.temp
    console.log(data.list[0])

    const todayEl = document.getElementById("today")
    const tempEl = document.createElement("p")
    const windEl = document.createElement("p")
    const humEl = document.createElement("p")
    tempEl.textContent = `temp: ${temp}`
    windEl.textContent = `wind: ${windspeed}`
    humEl.textContent = `hum: ${humidity}`

    todayEl.appendChild(tempEl)
    todayEl.appendChild(windEl)
    todayEl.appendChild(humEl)

    


})
.catch(error => console.error(error));
  
//  todo for 5 days:
// When a user views the current weather conditions for that city they are presented with:
//     * The city name
//     * The date
//     * An icon representation of weather conditions
//     * The temperature
//     * The humidity
//     * The wind speed
