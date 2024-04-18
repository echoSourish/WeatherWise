const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f52f8f9b3cmsh3ac272e93ef0c73p14ab13jsna4a42a1391cd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather=(city)=>{
    //replaces whole span tag
    cityName.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        //in long we have to grab the id first then we can replace whole element
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
        sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Kolkata");


const otherWeather=(city)=>{
    a=10;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response,city);
        document.getElementById("temp"+a).innerHTML = response.temp;
        document.getElementById("cloud_pct"+a).innerHTML = response.cloud_pct;
        document.getElementById("feels_like"+a).innerHTML = response.feels_like;
        document.getElementById("humidity"+a).innerHTML = response.humidity;
        document.getElementById("max_temp"+a).innerHTML = response.max_temp;
        document.getElementById("min_temp"+a).innerHTML = response.min_temp;
        document.getElementById("wind_speed"+a).innerHTML = response.wind_speed;
        document.getElementById("wind_degrees"+a).innerHTML = response.wind_degrees;
        document.getElementById("sunrise"+a).innerHTML = new Date(response.sunrise*1000).toLocaleTimeString("default");
        document.getElementById("sunset"+a).innerHTML =  new Date(response.sunset*1000).toLocaleTimeString("default");
        a++;
    })
    
    .catch(err => console.error(err));
}


setTimeout(() => {
    otherWeather("New York");
}, 1000);
setTimeout(() => {
    otherWeather("Tokyo");
}, 1500);
setTimeout(() => {
    otherWeather("London");
}, 1600);
setTimeout(() => {
    otherWeather("Sydney");
}, 1800);

