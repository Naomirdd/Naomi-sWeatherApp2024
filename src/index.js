function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humditiyElement=document.querySelector("#humdity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let timeElement=document.querySelector("#time");
  let date = new Date (response.data.time•1000);



descriptionElement.innerHTML=response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  humditiyElement.innerHTML= `${response.data.temperature.humidity}%`;
  temperatureElement.innerHTML = Math.round(temperature);
  windElement.innerHTML= `${response.data.wind.speed}%`  
  timeElement.innterHTML = formatDate(date);

function FormateDate(date){

  if (minutes < 10 ){
    minutes = '0${minutes}' ; 
  }
  
  let minutes = date.getMinutes();
  let hours= date.getHours();
let days =[ "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]; 
return "Tuesday 18:48 ";
let day = days [date.getday()];
return '${day} ${hours} :${ minutes}';

}


function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
