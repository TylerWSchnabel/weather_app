let city = "Jacksonville"
let weatherDisplay = document.getElementById('weatherDisplay');
let search = document.getElementById('weatherSearch');
let weatherStatement = document.getElementById('todaysWeatherStatement');


async function getWeather(){
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=92df3df23b74efecfd8eb5b93886622f&units=imperial', {mode: 'cors'})
        const weekWeather = await response.json();
        
        search.value = "";
        console.log('Weeks Weather:');
        console.log(weekWeather);
        console.log(weekWeather.list[0].main.temp)
        displayWeather();
        document.getElementById('gridHead').textContent = toTitleCase(city) + ", "+ weekWeather.city.country;
        function displayWeather(){
            for (let i =0; i<= 6; i++) {
                let dayTemp = document.getElementById('day'+i+'Temp');
                let dayIcon = document.getElementById('day'+i+'Icon');
                let dayWeather = document.getElementById('day'+i+'Weather');
                let dayHead = document.getElementById('day'+i+'Head');
                getDay(i);
                let icon = "http://openweathermap.org/img/w/" + weekWeather.list[i].weather[0].icon + ".png";
                dayHead.textContent = day;
                dayTemp.textContent = weekWeather.list[i].main.temp;
                dayIcon.src = icon;
                dayWeather.textContent = toTitleCase(weekWeather.list[i].weather[0].description);
                

            }
         }
        weatherStatement.textContent = "Today's high is "+ weekWeather.list[0].main.temp_max +" and the low is "+ weekWeather.list[0].main.temp_min;
    } catch {
        alert("Try another city");
    }

 };

 function getDay(start){
    const d = new Date();
    let dayNum = d.getDay()
    let displayDay = dayNum + start;
    if (displayDay > 6){
        displayDay -= 7
    };
    if (start === 0){
        day = "Today";
    } else if (displayDay === 0){
        day = "Sunday";
    } else if (displayDay === 1) {
        day = "Monday";
    } else if (displayDay === 2) {
        day = "Tuesday";
    } else if (displayDay === 3) {
        day = "Wednesday";
    } else if (displayDay === 4) {
        day = "Thursday";
    } else if (displayDay === 5) {
        day = "Friday";
    } else if (displayDay === 6) {
        day = "Saturday";
    }
    return day;
 }



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
//weekWeather();