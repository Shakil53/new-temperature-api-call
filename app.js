    // openweather map website api key// const API_KEY = `42309af60b351ebfd22f63c1e6dd058f`;
const API_KEY = `02e113ad8d4e48ea86b55246220811`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    // janker vai   // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}&units=metric`;
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    setInnerText('city', temperature.location.name);
    setInnerText('country', temperature.location.country);
    setInnerText('temperature', temperature.current.temp_c);
    setInnerText('time', temperature.location.localtime);
    console.log(temperature);
        
    }