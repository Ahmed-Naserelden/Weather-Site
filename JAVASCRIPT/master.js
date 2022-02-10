const api ={
    key: "17df00420ac53c2f7044906a5dd6664a",
    base: "https://api.openweathermap.org/data/2.5/",
}
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);
function getInput(e){
    e.preventDefault();
    if(e.type == "click"){
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
        error.textContent = "Please Enter A Valid City";
        search.value="";
    }else{
        error.textContent="";
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;
        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector(".weather");
        weather.innerText = `Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C | ${Math.round(response.main.temp_max)}°C `;

        const weatherIcon = document.querySelector(".weather-icon");
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