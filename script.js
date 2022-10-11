const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e76919c8dmsh8c4a6a67eedd7cap19a1c9jsnf1f90150cce3',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
// city = 'mumbai'
const getweatherData = (city)=>{

	const weatherPromise = fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
	return weatherPromise.then((response) => {
		return response.json();
	  })
}

const searchCity=()=>{
	city = document.getElementById('input-city').value
	// console.log(city)
	const weatherdata = getweatherData(city)
	weatherdata.then(data=>{
		console.log(data['location'].city)
		showWeather(data)
	
	})

}
const showWeather=(weatherdata)=>{
	console.log(weatherdata)
	document.getElementById("city-name").innerText = weatherdata['location'].city;
	document.getElementById("weather-type").innerText = weatherdata.current_observation.condition.text;
	document.getElementById("temp").innerText = weatherdata.current_observation.condition.temperature;
	document.getElementById("min-temp").innerText = weatherdata.forecasts[0].low;
	document.getElementById("max-temp").innerText = weatherdata.forecasts[0].high;
}

// let api_key='6e76919c8dmsh8c4a6a67eedd7cap19a1c9jsnf1f90150cce3'
// const getWeatherData=async (city)=>{
// 	const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`
// 	const weatherPromises = fetch(url)
// 	const response = await weatherPromises;
// 	return await response.json();
// }
// const searchCity=()=>{
// 	const city ='mumbai'
// 	// const city= document.getElementById('input-city').value
// 	const weatherdata = getWeatherData(city)
// 	weatherdata.then(data=>{
// 		console.log(data['location'].city)
// 	})
	
// }
// searchCity()