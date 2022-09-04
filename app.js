const API_KEY = '8db3d6670083d1e372c81ff20654d224';

const loadWeaterInformation = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherInformation(data, city))
}

const displayWeatherInformation = (weatherData, city) => {
    console.log(weatherData);
    fileLoad('temperature', weatherData.main.temp);
    fileLoad('cityName', city.toLocaleUpperCase());
    fileLoad('weatherName', weatherData.weather[0].main);



}
const fileLoad = (id, data) => {
    id = document.getElementById(id);
    id.innerText = data;

}

document.getElementById('searchButton').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    loadWeaterInformation(inputValue.toLocaleLowerCase());

})