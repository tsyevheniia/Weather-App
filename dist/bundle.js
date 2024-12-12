(()=>{const e="7c5b7c16c8ec4f44a45105749243110",n=(document.getElementsByClassName("form-check-label")[0],document.getElementById("btn-location")),t=document.getElementById("searchInput"),s=document.getElementById("searchButton"),a=document.getElementsByClassName("sections")[0],o=new bootstrap.Modal(document.getElementById("exampleModal"));let i,c;n.addEventListener("click",(async()=>{try{n.classList.add("disabled"),o.show(),await r(),await d()}catch(e){alert("Error: "+e)}})),document.body.classList.add("lightMode"),t.addEventListener("keydown",(async e=>{"Enter"===e.key&&""!==t.value&&(e.preventDefault(),await l(),a.classList.remove("hidden"),t.value="")})),s.addEventListener("click",(async e=>{e.preventDefault(),await l(),a.classList.remove("hidden"),t.value=""}));const r=()=>new Promise(((e,n)=>{navigator.geolocation.getCurrentPosition((n=>{i=n.coords.latitude,c=n.coords.longitude,e()}),(e=>{n(e)}))})),d=async()=>{const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${e}&q=${i},${c}&days=10&aqi=no&alerts=no`);console.log(n.ok);const t=await n.json();console.log(t),n.ok&&(o&&o.dispose(),document.getElementsByClassName("modal")[0].style.display="none",$(t))},l=async()=>{await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${e}&q=${t.value}&days=10&aqi=no&alerts=no`).then((e=>e.json())).then((e=>$(e))).catch((e=>{alert("Wrong name of city! Try again!")}))},p=(e,n,t,s)=>`\n        <div id="${e}">\n            <img src="${n}" alt="${s}">\n            <p style="font-weight: bold">${t}</p>\n            <p>${s}</p>\n        </div>\n    `,m=(e,n,t,s,a,o)=>`<div id="${e}">\n        <img src="${n}" alt="${t}">\n            <div id="${s}">\n                <p style="font-weight: bold">${a}</p>\n                <p>${o}</p>\n            </div>\n    </div>`,u=(e,n,t,s)=>`<div id="${e}">\n        <img src="${n}">\n            <p>${t}</p>\n            <p>${s}</p>\n    </div>`,$=e=>{a.innerHTML=`\n    <div class="section-up section1 container">\n        <h1>${e.location.name}</h1>\n        <h1>${e.location.localtime.split(" ")[1]}</h1>\n        <p>${e.location.localtime.split(" ")[0].split("-").reverse().join("-")}</p>\n    </div>\n    <div class="section-up section2 container">\n        <div class="main-details">\n            <h1> ${e.current.temp_c}</h1>\n            <p> Feels like: <span style="font-weight: bold">${e.current.feelslike_c}</span></p>\n            ${m("sunrise","images/img.png","sunrise","sunrise-text","Sunrise",`${e.forecast.forecastday[0].astro.sunrise}`)}\n            ${m("sunset","images/img_1.png","sunset","sunset-text","Sunset",`${e.forecast.forecastday[0].astro.sunset}`)}\n        </div>\n        <div class="weather">\n            <img src=${e.current.condition.icon} alt="weather">\n            <p>${e.current.condition.text}</p>\n        </div>\n        <div class="details">\n            ${p("humidity","images/img_2.png",`${e.current.humidity}%`,"Humidity")}\n            ${p("wind","images/img_3.png",`${e.current.wind_kph}km/h`,"Wind Speed")}\n            ${p("pressure","images/img_4.png",`${e.current.pressure_mb}phPa`,"Pressure")}\n            ${p("uv","images/img_5.png",e.current.uv,"UV")}\n        </div>\n    </div>\n    <div class="section-down section3 container">\n        <h1>3 Days Forecast</h1>\n        ${u("section3-row1",`${e.forecast.forecastday[0].day.condition.icon}`,`${e.forecast.forecastday[0].day.avgtemp_c}°C`,`${e.forecast.forecastday[0].date.split("-").reverse().join(".")}`)}\n        ${u("section3-row2",`${e.forecast.forecastday[1].day.condition.icon}`,`${e.forecast.forecastday[1].day.avgtemp_c}°C`,`${e.forecast.forecastday[1].date.split("-").reverse().join(".")}`)}\n        ${u("section3-row3",`${e.forecast.forecastday[2].day.condition.icon}`,`${e.forecast.forecastday[2].day.avgtemp_c}°C`,`${e.forecast.forecastday[2].date.split("-").reverse().join(".")}`)}\n    </div>\n     <div class="section-down section4 container">\n        <h1>Hourly Forecast</h1>\n        <div class="section4-container">\n        ${y(e)} \n        </div>\n    </div>\n    `},y=e=>{let n="";return[9,12,15,18].forEach((t=>{n+=`<div class="section4-column light">\n                    <p>${t}:00</p>\n                    <img src=${e.forecast.forecastday[0].hour[t].condition.icon} alt="sun">\n                        <p>${e.forecast.forecastday[0].hour[t].temp_c}</p>\n                        <i class="fa-solid fa-wind"></i>\n                        <p>${e.forecast.forecastday[0].hour[t].wind_kph}km/h</p>\n                </div>`})),[21,0].forEach((t=>{n+=`<div class="section4-column dark">\n            <p>${t}:00</p>\n            <img src=${e.forecast.forecastday[0].hour[t].condition.icon} alt="sun">\n                <p>${e.forecast.forecastday[0].hour[t].temp_c}</p>\n                <i class="fa-solid fa-wind"></i>\n                <p>${e.forecast.forecastday[0].hour[t].wind_kph}km/h</p>\n        </div>`})),n}})();