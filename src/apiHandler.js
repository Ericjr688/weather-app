const APIKEY = 'e612668fcf9ef4f01f0bb2b20bf68b77';
// i should add try catch to catch errors
async function getLonLat(cityName){
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKEY}`, {mode: 'cors'});
  const data = await response.json();
  const coordinates = {
    lon: data[0]['lon'],
    lat: data[0]['lat'],
  }
  return coordinates;
}

async function getWeatherData(coordinates, tempUnit){
  const lon = coordinates['lon'];
  const lat = coordinates['lat'];
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${tempUnit}`, {mode: 'cors'});
  const data = await response.json();
  return data;
}

// async function getHourlyForecast(coordinates, tempUnit){
//   let data = "";
//   try {
//     const lon = coordinates['lon'];
//     const lat = coordinates['lat'];
//     const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,daily,alerts}&appid=${APIKEY}&units=${tempUnit}`, {mode: 'cors'});
//     data = await response.json();
//   } catch (e) {
//     alert(e);
//   }

//   return data;
// }

export { getLonLat, getWeatherData }
