import { getWeatherData, getLonLat } from './apiHandler.js';
import { loadSummary, loadDetails, clearBox, loadDescription } from './DOMManipulation.js'

function generateSearchBar(){
  const searchBarContainer = document.createElement('div');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  searchInput.type = "search";
  searchInput.id = 'search-bar';
  searchInput.placeholder = 'Enter a city';
  searchForm.appendChild(searchInput);

  searchButton.textContent = "Search";
  searchButton.addEventListener('click', (event)=>{
    event.preventDefault();
    let cityName = searchInput.value;
    searchButtonEvent(cityName);
    searchInput.value = ''
  })
  searchForm.appendChild(searchButton);

  searchBarContainer.appendChild(searchForm);
  return searchBarContainer;
}

async function searchButtonEvent(cityName){
  clearBox('.summary');
  clearBox('.detail');
  clearBox('.description');

  let coordinates = await getLonLat(cityName);
  const tempControl = document.querySelector('#temp-unit');
  let tempUnit = "";

  if (tempControl.textContent == "C"){
    tempUnit = 'metric';
  } else {
    tempUnit = "imperial";
  }

  let weatherData = await getWeatherData(coordinates, tempUnit);
  console.log(weatherData);


  loadSummary(weatherData);
  loadDetails(weatherData);
  loadDescription(weatherData);
}

export {generateSearchBar}