var weatherApi = "https://api.openweathermap.org/data/3.0/onecall?";
var apiKey = "3850992ef985a31e47bda004979cefeb";


var searchHistoryList = [];
const searchhistoryEL =document.getElementById("searchHistory");
const historyEL =document.getElementById("history");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("submit");
const searchInput = document.getElementById("searchInput")
const cityEl = document.querySelector("#City")
const windEl = document.getElementById("windSpeed")
const tempEL = document.getElementById("temp")
const humidityEl = document.getElementById("humidity")
const uvEl = document.getElementById("uv")
const weatherIconEl = document.getElementById("weatherIcon")
const uvBoxEl = document.getElementById("uvBox")


//--------------------Handling the history------------------------//
function appendtoHistory(search){
  searchHistoryList.push(search);
  laodSearchHistory();
};
  function laodSearchHistory(){
    for (var i = searchHistoryList.length - 1; i >= 0; i--) {
      // * Create List 
      var historyLi = document.createElement('li');
      historyLi.classList.add("historyList")
      // * Create the button  
      var historyBtn = document.createElement("button");
      historyBtn.innerHTML = searchHistoryList[i];
      historyBtn.classList.add("btn","btn-primary","btnhistory");
      // * Appends the button to the list 
      historyLi.append(historyBtn);
      // * Appened the list to the UL
      historyEL.append(historyLi)
    }
  };
// --------------- Handhandle rendering on the page --------------//
//* Get and render all the information for the 5- day forcast
function fiveDayforcast(data){
  day1(data.daily[0])
  day2(data.daily[1])
  day3(data.daily[2])
  day4(data.daily[3])
  day5(data.daily[4])

 };
 function day1(weather){
  var des = weather.weather[0].description
  var icon = weather.weather[0].icon ;
  var iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";
  var temp = weather.temp.min;
  var humidity = weather.humidity;
  var windSpeed = weather.wind_speed;

   //* Setts values to the current weather on the DomuvBoxEl
   document.getElementById("day1Date").textContent = des;
   var png = document.createElement("img");
   png.setAttribute('src', iconUrl);
   png.setAttribute('alt', des);
   document.getElementById("day1Icon").appendChild(png)
   document.getElementById("day1Wind").textContent = "Wind:" + windSpeed + "MPH";
   document.getElementById("day1Temp").textContent = "Temp:"+ temp +"F"
   document.getElementById("day1Hum").textContent = "Humidity:"+ humidity + "%";
 };

 function day2(weather){
  var des = weather.weather[0].description
  var icon = weather.weather[0].icon ;
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
  var temp = weather.temp.min;
  var humidity = weather.humidity;
  var windSpeed = weather.wind_speed;

   //* Setts values to the current weather on the DomuvBoxEl
   document.getElementById("day2Date").textContent = des;
   var png = document.createElement("img");
   png.setAttribute('src', iconUrl);
   png.setAttribute('alt', des);
   document.getElementById("day2Icon").appendChild(png)
   document.getElementById("day2Wind").textContent = "Wind:" + windSpeed + "MPH";
   document.getElementById("day2Temp").textContent = "Temp:"+ temp +"F"
   document.getElementById("day2Hum").textContent = "Humidity:"+ humidity + "%";
 };
 function day3(weather){
  var des = weather.weather[0].description
  var icon = weather.weather[0].icon ;
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
  var temp = weather.temp.min;
  var humidity = weather.humidity;
  var windSpeed = weather.wind_speed;

   //* Setts values to the current weather on the DomuvBoxEl
   document.getElementById("day3Date").textContent = des;
   var png = document.createElement("img");
   png.setAttribute('src', iconUrl);
   png.setAttribute('alt', des);
   document.getElementById("day3Icon").appendChild(png)
   document.getElementById("day3Wind").textContent = "Wind:" + windSpeed + "MPH";
   document.getElementById("day3Temp").textContent = "Temp:"+ temp +"F"
   document.getElementById("day3Hum").textContent = "Humidity:"+ humidity + "%";
 };
 function day4(weather){
  var des = weather.weather[0].description
  var icon = weather.weather[0].icon ;
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
  var temp = weather.temp.min;
  var humidity = weather.humidity;
  var windSpeed = weather.wind_speed;

   //* Setts values to the current weather on the DomuvBoxEl
   document.getElementById("day4Date").textContent = des;
   var png = document.createElement("img");
   png.setAttribute('src', iconUrl);
   png.setAttribute('alt', des);
   document.getElementById("day4Icon").appendChild(png)
   document.getElementById("day4Wind").textContent = "Wind:" + windSpeed + "MPH";
   document.getElementById("day4Temp").textContent = "Temp:"+ temp +"F"
   document.getElementById("day4Hum").textContent = "Humidity:"+ humidity + "%";
 };
 function day5(weather){
  var des = weather.weather[0].description
  var icon = weather.weather[0].icon ;
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
  var temp = weather.temp.min;
  var humidity = weather.humidity;
  var windSpeed = weather.wind_speed;

   //* Setts values to the current weather on the DomuvBoxEl
   document.getElementById("day5Date").textContent = des;
   var png = document.createElement("img");
   png.setAttribute('src', iconUrl);
   png.setAttribute('alt', des);
   document.getElementById("day5Icon").appendChild(png)
   document.getElementById("day5Wind").textContent = "Wind:" + windSpeed + "MPH";
   document.getElementById("day5Temp").textContent = "Temp:"+ temp +"F"
   document.getElementById("day5Hum").textContent = "Humidity:"+ humidity + "%";
 };
// *Get and renders all the information 
function currentWeather(city,weather, timezone) {
  
  //* Store response data from our fetch request in variables
  var temp = weather.temp;
  var windSpeed = weather.wind_speed;
  var humidity = weather.humidity;
  var uvIndex = weather.uvi;
  var icon = weather.weather[0].icon ;
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
  //* Setts values to the current weather on the DomuvBoxEl
  cityEl.textContent = city;
  weatherIconEl.setAttribute('src', iconUrl);
  weatherIconEl.setAttribute('alt', "icon");
  windEl.textContent = "Wind:" + windSpeed + "MPH";
  tempEL.textContent = "Temp:"+ temp +"F"
  humidityEl.textContent = "Humidity:"+ humidity + "%";
  uvBoxEl.textContent = uvIndex;

  if (uvIndex < 3) {
    uvBoxEl.classList.add("good");
  } else if (uvi < 7) {
    uvBoxEl.classList.add("ok");
  } else {
    uvBoxEl.classList.add("danger");
  }

}



function renderItems(city,data) {
  currentWeather(city,data.current);
  fiveDayforcast(data);
  };
//--------------- Handling the Api Fetch request-----------------//
// *pass the weather api to grab Lat Lot 
function fetchWeather(data){
  var lat = data.coord.lat
  var lon = data.coord.lon
  var city = data.name
  var apisearch= weatherApi+"&lat="+lat+"&lon="+lon+"&exclude=hourly,minutely&units=imperial&appid="+apiKey


  fetch(apisearch)
      .then(res => {
        return res.json();
       
      })
      .then(data => {
        renderItems(city,data);
      })
      .catch( err =>{
        console.error(err) 
      })
};

function getLatandLon(search){
  let apisearch= "https://api.openweathermap.org/data/2.5/weather?"+"q="+search+"&limit=5"+"&appid="+apiKey;

  fetch(apisearch)
      .then(res => {
        return res.json();
      })
      .then(data => {
        fetchWeather(data);
      })
      .catch( err =>{
        console.error(err) 
      })
      
};

//--------- Hadnling the search function  -------------------------// 

function citySearch(e) {
  // *stop the page from refreshing
  e.preventDefault();
  var search = searchInput.value.trim();
  getLatandLon(search);
  appendtoHistory(search);
};

// *search button click 
function historyBtnclick(e) {
    var btn = e.target;
    var search = btn.innerHTML
    getLatandLon(search);
};



searchBar.addEventListener('submit', citySearch);
searchhistoryEL.addEventListener('click', historyBtnclick);

