const key = "60dee6cf803baae926fdf8b8867a6538";

function putDatasOnScreen(datas) {
    document.querySelector(".city").innerHTML = "Tempo em " + datas.name;
    document.querySelector(".weather").innerHTML = Math.floor(datas.main.temp) + "°C";
    document.querySelector(".text-forecast").innerHTML = datas.weather[0].description;
    document.querySelector(".umidity").innerHTML = "Umidade: " + datas.main.humidity + "%";
}

async function searchCity(city) {
    const datas = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    putDatasOnScreen(datas);
}

function buttonSearchCityWeather() {
    const city = document.querySelector(".input-city").value;  
    searchCity(city);
}