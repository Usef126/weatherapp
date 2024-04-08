const h1Location = document.getElementById("location")
const searchBar = document.getElementById("search-bar")
const tempDegree = document.getElementById("temp")
const wind = document.getElementById("wind")
const humiditypercent = document.getElementById("humidity")
const refImg = document.getElementById("refrence")
const invalid = document.getElementById("wrong-city")

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "c69584b4510549cc40b3760f35721188";
let data = ""

function changeElement(city, temp, windSpeed, humidity, discription) {
    h1Location.innerText=city;
    searchBar.placeholder=city;
    tempDegree.innerText=`${Math.round(temp)}°c`;
    wind.innerText=windSpeed+" km/h";
    humiditypercent.innerText=humidity+"%";
    imgSwitch(discription)
    refImg.src = imgStance
}
function imgSwitch(stance){
    switch (stance) {
        case "Clouds":
            imgStance = "./assets/images/clouds.png"
            break;
        case "Clear":
            imgStance = "./assets/images/clear.png"
            break;
        case "Snow":
            imgStance = "./assets/images/snow.png"
            break;
        case "Rain":
            imgStance = "./assets/images/rain.png"
            break;
        case "Mist":
            imgStance = "./assets/images/mist.png"
            break;
        case "Drizzle":
            imgStance = "./assets/images/drizzle.png"
            break;
        default:
            console.log("no such stance");
            break;
    }
}

const getData = async () => {
    if (searchBar.value=="") {
        invalid.style.visibility="visible";
    } else {
        try {
            invalid.style.visibility="hidden";
            const city = searchBar.value
            const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await res.json();
            console.log(data);
            changeElement(data.name, data.main.temp, data.wind.speed, data.main.humidity, data.weather[0].main)
        } catch (TypeError) {
            invalid.style.visibility="visible";
        }

        
        
    }
}