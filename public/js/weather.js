// Create function displayWeather()

// *** In-Development: for best business and security practices, hide the public WeatherApp API using Netlify Serverless Functions, dotenv ***
// const dotenv = require('dotenv').config()
//require('dotenv').config({ path: 'relative/path/to/your/.env' })
// process.env.WEATHER_API_KEY || 'development'
// const api_key = WEATHER_API_KEY
// import WEATHER_API_KEY from './apikey'
const api_key = 'REPLACEME_WEATHER_API_KEY'

// Manually added a U.S. City, but future development will include pulling User's current IP address location instead. Best business practice for the average User who isn't accustomed to manually updating this on their end.
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=37.238754&lon=-76.509674&units=imperial&appid=${api_key}`
// Latitude and longitude coordinates are: 37.238754, -76.509674
// Don't know if rounding the figures makes a difference. Doesn't appear so when checking the Live Server and it's fetching data.
// May use AccuWeather in the future, similar to OpenWeather when it comes to fetching.
// OpenWeather app city search: https://openweathermap.org/city/4046946

function displayWeather() {
  fetch(
    // Hide the API key
    apiURL
  )
    .then((response) => response.json())
    .then((data) => {
      const temp = parseInt(data.main.temp) + '°'
      const icon = data.weather[0].icon
      document.getElementById('weather').innerHTML = `
				<img src="https://openweathermap.org/img/wn/${icon}@4x.png" width="100px" />
        <span>${temp}</span>`
      //OpeanWeath app: fetching not actual temperature, but how it FEELS for a person outside. Thus, temperature it slightly off, and this is confirmed with AccuWeather app information.
    })
    .catch((error) => {
      document.getElementById('weather').innerText = 'Weather data unavailable'
      console.error('Error fetching weather data:', error)
    })
}

// use setTimeout to call displayTime() after a 1/10 second delay
setTimeout(displayWeather, 100)
// use setInterval to call displayTime() every second
setInterval(displayWeather, 1000)
