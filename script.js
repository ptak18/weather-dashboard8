
const APIkey="77beaa8b73613aae884a554c3ced00ef"
const lat= 50
const lon= 50
const URL= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
console.log(URL)



function getData(lat,lon){


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
}

function getCity (cityName){
    const URL =`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIkey}`

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`)
.then(response => response.json())
.then(data => {
    
    console.log(data)
const lon = data[0].lon
const lat = data[0].lat
getData(lat,lon) 

//call get data with tghe longitude and latitude from the response     
})
}


//  todo for 5 days:
//event listenr that listens for any submissions
//which will check value for unput box and will call the function "get city" 

// When a user views the current weather conditions for that city they are presented with:
//     * The city name
//     * The date
//     * An icon representation of weather conditions
//     * The temperature
//     * The humidity
//     * The wind speed
