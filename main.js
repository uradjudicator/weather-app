const apiKey = "6d982f72c507412c4b8a87814dcac82f"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

// html doc
const searchBox = document.querySelector('.search input')
const weatherBlock = document.querySelector('.weather')
const searchBtn = document.querySelector('.search .btn')
const cityName = document.querySelector('.city')
const temperature = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const weatherIcon = document.querySelector('.weather-icon')
const error = document.querySelector('.error')


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        error.style.display = 'block'
        weatherBlock.style.opacity = '0'
    } else {
        error.style.display = 'none'
        weatherBlock.style.opacity = '1'
    }

    let data = await response.json()
    cityName.innerText = data.name
    temperature.innerText = Math.round(data.main.temp) + ' °C'
    humidity.innerText = data.main.humidity + '%'
    wind.innerText = data.wind.speed + 'km / h'

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'images/clear.png'
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png'
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'images/mist.png'
    }
    else if (data.weather[0].main == 'Fog') {
        weatherIcon.src = 'images/mist.png'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)

})