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
const innerHtml = function (value) {
    const html =
        `
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
            <div id="sunrise">
                <img src="images/img.png" alt="sunrise">
                <div id="sunrise-text">
                    <p style="font-weight: bold">Sunrise</p>
                    <p>${value.forecast.forecastday[0].astro.sunrise}</p>
                </div>
            </div>
            <div id="sunset">
                <img src="images/img_1.png" alt="sunrise">
                <div id="sunset-text">
                    <p style="font-weight: bold">Sunset</p>
                    <p>${value.forecast.forecastday[0].astro.sunset}</p>
                </div>
            </div>
        </div>
        <div class="weather">
            <img src=${value.current.condition.icon} alt="weather">
            <p>${value.current.condition.text}</p>
        </div>
        <div class="details">
            <div id="humidity">
                <img src="images/img_2.png" alt="humidity">
                <p style="font-weight: bold">${value.current.humidity}%</p>
                <p>Humidity</p>
            </div>
            <div id="wind">
                <img src="images/img_3.png" alt="wind">
                <p style="font-weight: bold">${value.current.wind_kph}km/h</p>
                <p>Wind Speed</p>
            </div>
            <div id="pressure">
                <img src="images/img_4.png" alt="pressure">
                <p style="font-weight: bold">${value.current.pressure_mb}phPa</p>
                <p>Pressure</p>
            </div>
            <div id="uv">
                <img src="images/img_5.png" alt="uv">
                <p style="font-weight: bold">${value.current.uv}</p>
                <p>UV</p>
            </div>
        </div>
    </div>
    <div class="section-down section3">
        <h1>3 Days Forecast:</h1>
        <div id="section3-row1">
             <img src=${value.forecast.forecastday[0].day.condition.icon}>
            <p>${value.forecast.forecastday[0].day.avgtemp_c}°C</p>
            <p>${value.forecast.forecastday[0].date.split("-").reverse().join('.')}</p>
        </div>
        <div id="section3-row2">
            <img src=${value.forecast.forecastday[1].day.condition.icon}>
            <p>${value.forecast.forecastday[1].day.avgtemp_c}°C</p>
            <p>${value.forecast.forecastday[1].date.split("-").reverse().join('.')}</p>
        </div>
        <div id="section3-row3">
          <img src=${value.forecast.forecastday[2].day.condition.icon}>
            <p>${value.forecast.forecastday[2].day.avgtemp_c}°C</p>
            <p>${value.forecast.forecastday[2].date.split("-").reverse().join('.')}</p>
        </div>
    </div>
     <div class="section-down section4">
        <h1>Hourly Forecast:</h1>
        <div class="section4-container">

            <div class="section4-column light">
                <p>09:00</p>
                <img src=${value.forecast.forecastday[0].hour[9].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[9].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[9].wind_kph}km/h</p>
            </div>

            <div class="section4-column light">
                <p>12:00</p>
                <img src=${value.forecast.forecastday[0].hour[12].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[12].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[12].wind_kph}km/h</p>
            </div>
            <div class="section4-column light">
                <p>15:00</p>
                <img src=${value.forecast.forecastday[0].hour[15].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[15].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[15].wind_kph}km/h</p>
            </div>
            <div class="section4-column light">
                <p>18:00</p>
                <img src=${value.forecast.forecastday[0].hour[18].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[18].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[18].wind_kph}km/h</p>
            </div>
            <div class="section4-column dark">
                <p>21:00</p>
                <img src=${value.forecast.forecastday[0].hour[21].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[0].hour[21].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[0].hour[21].wind_kph}km/h</p>
            </div>
            <div class="section4-column dark">
                <p>00:00</p>
                <img src=${value.forecast.forecastday[1].hour[0].condition.icon} alt="sun">
                <p>${value.forecast.forecastday[1].hour[0].temp_c}</p>
                <i class="fa-solid fa-wind"></i>
                <p>${value.forecast.forecastday[1].hour[0].wind_kph}km/h</p>
            </div>
        </div>
    </div>
    `
    sections.innerHTML = html
}
