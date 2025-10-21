const apiKey = "2fea4d57b63c9c12c7339235b7bdd99d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let city = document.querySelector("#search input");
let btn = document.querySelector("button");
let cityDisplay = document.querySelector("#cityname");
const weathericon = document.querySelector("#weathericon");

async function checkWeather(){
    const response = await fetch(apiUrl + city.value + "&appid=" + apiKey);
    var data = await response.json();

    cityDisplay.innerHTML = data.name;
    document.querySelector("#temp").innerHTML = data.main.temp + "°C";
    document.querySelector("#humi").innerHTML = data.main.humidity + "%";
    document.querySelector("#wini").innerHTML = data.wind.speed + "m/s";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "mist.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png"
    }
}

btn.addEventListener("click", () => {
    checkWeather();
})