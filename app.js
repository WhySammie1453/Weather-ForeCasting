const apikey = "c912d5066da98f0df1b15966f1f6402a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {

        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloud.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clears.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rains.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "dizzles.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mists.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBox.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        checkWeather(searchBox.value);
    }
})
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

