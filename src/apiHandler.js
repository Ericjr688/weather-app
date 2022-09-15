const APIKEY = 'e612668fcf9ef4f01f0bb2b20bf68b77';

async function getLonLat(cityName){
  try{
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKEY}`, {mode: 'cors'});
    const data = await response.json();
    const coordinates = {
      lon: data[0]['lon'],
      lat: data[0]['lat'],
    }
    return coordinates;
  }catch(error){
    console.log('Error with getting coordinate data: ', error )
  } 
}

async function getWeatherData(coordinates, tempUnit){
  try {
    const lon = coordinates['lon'];
    const lat = coordinates['lat'];
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${tempUnit}`, {mode: 'cors'});
    const data = await response.json();
    return data;
  }catch (error) {
    console.log('Error with getting weather information: ', error )
  }
  
}

export { getLonLat, getWeatherData }
