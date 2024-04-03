const apiKey = '5ccfb87c2313dc93a4278d2086ead169'
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city){
const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
var data = await apiData.json();
console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = (Math.round((data.main.temp-273.15)*1.8+32)) +'°F';
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed;

if (data.weather[0].main == 'Clouds'){
    weatherIcon.src = "./assets/images/cloud.png";
} else if(data.weather[0].main == 'Thunderstorm'){
    weatherIcon.src = "./assets/images/rain.png";
} 
else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src = "./assets/images/rain.png";
} 
else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = "./assets/images/rain.png";
} 
else if(data.weather[0].main == 'Snow'){
    weatherIcon.src = "./assets/images/snow.png";
} 
else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = "./assets/images/sun.png";
} 
else {
    weatherIcon.src = "./assets/images/fog.png";
}
}

searchButton.addEventListener('click', () => {
    getWeather(searchBox.value);
} )
