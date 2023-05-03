

function getWeather() {
  
  cityValue= city.value;

 city.value = "";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metric`).then((resp) => resp.json()).then((data) =>displayData(data)) 
 
  }

function displayData(data) {
  
  cname=data.name;
main=data.weather[0].main
description=data.weather[0].description
icon=data.weather[0].icon
temperature=data.main.temp
mintemp=data.main.temp_min
maxtemp=data.main.temp_max
humidity=data.main.humidity
wind=data.wind.speed
 result.innerHTML = `
        <h2>${cname}</h2>
        <h4 class="weather">${main}</h4>
        <h4 class="desc">${description}</h4>
        <img src="https://openweathermap.org/img/w/${icon}.png">
        <h1>${temperature} &#176;</h1>
        <div class="temp-container">
            <div>
                <h5 class="title">Min</h5>
                <h4 class="temp">${mintemp}&#176;</h4>
            </div>
            <div>
                <h5 class="title">Max</h5>
                <h4 class="temp">${maxtemp}&#176;</h4>
            </div>
            <div>
            <h5 class="title">Humidity</h5>
            <h4 class="temp">${humidity}%</h4>
        </div>
        <div>
            <h5 class="title">Wind speed</h5>
            <h4 class="temp">${wind}%</h4>
        </div>
        </div>
        `;
      }
     
window.addEventListener("load", getWeather);






function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        var {latitude, longitude } = success.coords;
           var lat=latitude
          var lon=longitude
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(res => res.json()).then(data => {
         console.log(data)
        showWeatherData(data);
        })
  
    })
  }


  function showWeatherData(data) {
  
      Lname=data[0].name;
   console.log(Lname);
   locName= Lname;

  city.value = "";
      fetch(` http://api.openweathermap.org/data/2.5/weather?q=${locName}&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metric `).then((resp) => resp.json()).then((data) =>displayData(data)) 
   
 
          }

displayData(data)

