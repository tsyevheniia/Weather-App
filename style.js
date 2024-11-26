const Api_Key = '7c5b7c16c8ec4f44a45105749243110'
const toggleMode = document.getElementById('toggleMode');
const textMode = document.getElementById('mode');
const btn = document.getElementById('location-button');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const sections = document.getElementsByClassName('sections')[0];

let lat, lng;
document.body.classList.add('lightMode');

toggleMode.addEventListener('change', function () {
    document.body.classList.toggle('lightMode');
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('lightMode')) {
        btn.style.color = 'black';
        textMode.textContent = 'To Dark Mode';
        textMode.style.color = 'black';
    } else {
        btn.style.color = 'white';
        textMode.textContent = 'To Light Mode';
        textMode.style.color = 'white';
    }
})

const locationButton = document.getElementById('location-button')
locationButton.addEventListener('click', async function () {
        await getUserLocation()
        await getWeatherByPosition()
        sections.classList.remove('hidden')
    }
)
searchInput.addEventListener('keydown', async function (e) {
    if (e.key === 'Enter' && searchInput.value !== '') {
        e.preventDefault();
        await getWeatherByCity()
        sections.classList.remove('hidden')
        searchInput.value = '';

    }
})
searchButton.addEventListener('click', async function (e) {
    e.preventDefault();
    await getWeatherByCity()
    sections.classList.remove('hidden')
    searchInput.value = '';
})

const getUserLocation = function () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                resolve();
            },
            function (positionError) {
                reject(positionError);
            }
        );
    });
};
const errorMessage = function (){
    alert("Wrong name of city! Try again!")
}
const getWeatherByPosition = async function () {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${Api_Key}&q=${lat},${lng}&days=10&aqi=no&alerts=no`)
        .then(value => value.json())
        .then(val => innerHtml(val))
        .catch(error => errorMessage())

}
const getWeatherByCity = async function () {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${Api_Key}&q=${searchInput.value}&days=10&aqi=no&alerts=no`)
        .then(value => value.json())
        .then(val => {
            console.log(val);

            innerHtml(val)
        })
        .catch(error => errorMessage())
}

const createWeatherDetails = function (id, iconSrc, value, label) {
    return `
        <div id="${id}">
            <img src="${iconSrc}" alt="${label}">
            <p style="font-weight: bold">${value}</p>
            <p>${label}</p>
        </div>
    `;
}
const createMainDetails = function (id, src, alt, secondId,label, value){
    return `<div id="${id}">
        <img src="${src}" alt="${alt}">
            <div id="${secondId}">
                <p style="font-weight: bold">${label}</p>
                <p>${value}</p>
            </div>
    </div>`
}
const createForecastFor3Days = function (id,src,temp,date){
    return `<div id="${id}">
        <img src="${src}">
            <p>${temp}</p>
            <p>${date}</p>
    </div>`
}

const innerHtml = function (value) {
    sections.innerHTML = `
    <div class="section-up section1">
        <div id="text-container__section1">
            <h3>${value.location.name}</h3>
            <h1>${value.location.localtime.split(" ")[1]}</h1>
            <p>${value.location.localtime.split(" ")[0].split("-").reverse().join("-")}</p>
        </div>
    </div>
    <div class="section-up section2">
        <div class="main-details">
            <h1> ${value.current.temp_c}</h1>
            <p> Feels like: <span style="font-weight: bold">${value.current.feelslike_c}</span></p>
            ${createMainDetails("sunrise", "images/img.png", "sunrise", "sunrise-text", "Sunrise", `${value.forecast.forecastday[0].astro.sunrise}`)}
            ${createMainDetails("sunset", "images/img_1.png", "sunset", "sunset-text", "Sunset", `${value.forecast.forecastday[0].astro.sunset}`)}
        </div>
        <div class="weather">
            <img src=${value.current.condition.icon} alt="weather">
            <p>${value.current.condition.text}</p>
        </div>
        <div class="details">
            ${createWeatherDetails('humidity', 'images/img_2.png', `${value.current.humidity}%`, 'Humidity')}
            ${createWeatherDetails('wind', 'images/img_3.png', `${value.current.wind_kph}km/h`, 'Wind Speed')}
            ${createWeatherDetails('pressure', 'images/img_4.png', `${value.current.pressure_mb}phPa`, 'Pressure')}
            ${createWeatherDetails('uv', 'images/img_5.png', value.current.uv, 'UV')}
        </div>
    </div>
    <div class="section-down section3">
        <h1>3 Days Forecast:</h1>
        ${createForecastFor3Days('section3-row1', `${value.forecast.forecastday[0].day.condition.icon}`, `${value.forecast.forecastday[0].day.avgtemp_c}°C`, `${value.forecast.forecastday[0].date.split("-").reverse().join('.')}`)}
        ${createForecastFor3Days('section3-row2', `${value.forecast.forecastday[1].day.condition.icon}`, `${value.forecast.forecastday[1].day.avgtemp_c}°C`, `${value.forecast.forecastday[1].date.split("-").reverse().join('.')}`)}
        ${createForecastFor3Days('section3-row3', `${value.forecast.forecastday[2].day.condition.icon}`, `${value.forecast.forecastday[2].day.avgtemp_c}°C`, `${value.forecast.forecastday[2].date.split("-").reverse().join('.')}`)}
    </div>
     <div class="section-down section4">
        <h1>Hourly Forecast:</h1>
        <div class="section4-container">
        ${createHoursForecast(value)} 
        </div>
    </div>
    `
}
    const createHoursForecast = function (value) {
        let dailyHours = [9, 12, 15, 18]
        let forecastHtml = '';
        dailyHours.forEach(hour => {
            forecastHtml += `<div class="section4-column light">
            <p>${hour}:00</p>
            <img src=${value.forecast.forecastday[0].hour[hour].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[hour].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[hour].wind_kph}km/h</p>
        </div>`
        })
        let nightHours = [21, 0]
        nightHours.forEach(hour => {
            forecastHtml += `<div class="section4-column dark">
            <p>${hour}:00</p>
            <img src=${value.forecast.forecastday[0].hour[hour].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[hour].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[hour].wind_kph}km/h</p>
        </div>`
        })
        return forecastHtml;
    }
