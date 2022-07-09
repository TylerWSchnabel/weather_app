let city = "Jacksonville"
let weatherDisplay = document.getElementById('weatherDisplay');
let search = document.getElementById('weatherSearch');
let cityTemp = document.getElementById('cityTemp');
let cityFeel = document.getElementById('cityFeel');
let cityWeather = document.getElementById('cityWeather');
let cityHumidity = document.getElementById('cityHumidity');
let cityHigh = document.getElementById('cityHigh');
let cityLow = document.getElementById('cityLow');
let cityHead = document.getElementById('gridHead');

async function getWeather(){
    try{
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' +city+'&APPID=92df3df23b74efecfd8eb5b93886622f&units=imperial', {mode: 'cors'})
    const weatherData = await response.json();
    let temp = weatherData.main.temp;
    let feelsLike = weatherData.main.feels_like;
    let humidity = weatherData.main.humidity;
    let tempLow = weatherData.main.temp_min;
    let tempHigh = weatherData.main.temp_max;
    let weather = weatherData.weather[0].description;
    console.log(weatherData);
    cityTemp.textContent = temp;
    cityFeel.textContent = feelsLike;
    cityHumidity.textContent = humidity + "%";
    cityMax.textContent = tempHigh;
    cityMin.textContent = tempLow;
    cityWeather.textContent = capitalize(weather);
    cityHead.textContent = toTitleCase(city);
    search.value = "";
    } catch {
        alert("Try another city");
    }

 };

function setCity(){
    city = search.value;
    getWeather();
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
}

getWeather();