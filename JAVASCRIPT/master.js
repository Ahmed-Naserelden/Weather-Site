const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const today = new Date();
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const tempRange = document.querySelector(".temp-range");
const weatherIcon = document.querySelector(".weather-icon");
btn.addEventListener("click", getInput);
function getInput(e){
    
    e.preventDefault();
    if(e.type == "click"){
        
        if(search.value === ""){
            resetAll();
            error.textContent = "Please Enter A Valid City";
            return;
        }
        getData(search.value);
        console.log(search.value);
    }
}
function getData(){
    fetch(`${api.base}weather?q=${search.value}&
    units=metric&appid=${api.key}`)
    .then(response =>{
        return response.json();
    }).then(displayData);
}
const error = document.querySelector(".error");
error.textContent="";
function displayData(response){
    if(response.cod == "404"){
        resetAll();
        error.textContent = "Please Enter A Valid City";
    }else{
        error.textContent="";
        
        city.innerText = `${response.name}, ${response.sys.country}`;
        
        date.innerText = dateFunction(today);
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;
        weather.innerText = `Weather: ${response.weather[0].main}`;
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C | ${Math.round(response.main.temp_max)}°C `;
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png" ;
        search.value = "";
    }
}
function dateFunction (d){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear(); 
    return `${day}, ${date} ${month} ${year}`;
}
function resetAll(){
    city.textContent="";
    date.textContent="";
    temp.textContent="";
    weather.textContent="";
    tempRange.textContent="";
    weatherIcon.textContent="";
    weatherIcon.src="";
    search.value="";
}