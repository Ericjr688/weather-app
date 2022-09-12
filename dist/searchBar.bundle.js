/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMManipulation.js":
/*!********************************!*\
  !*** ./src/DOMManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBox": () => (/* binding */ clearBox),
/* harmony export */   "loadDescription": () => (/* binding */ loadDescription),
/* harmony export */   "loadDetails": () => (/* binding */ loadDetails),
/* harmony export */   "loadSummary": () => (/* binding */ loadSummary)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


function loadSummary(weatherData) {
  const summary = document.querySelector('.summary');
  summary.style.visibility = 'visible';

  // Left side
  const summaryMain = document.createElement('div');
  summaryMain.classList.add('summary-main');
  const left = document.createElement('div');
  const leftSections = ['city', 'weather', 'current-temp', 'extreme-temp'];
  leftSections.forEach(section => {
    let element = document.createElement('div');
    element.classList.add(section);
    if (section == 'city') {
      element.textContent = weatherData['name'];
    } else if (section == 'weather') {
      element.textContent = weatherData['weather'][0]['main'];
    } else if (section == 'current-temp') {
      const tempSpan = document.createElement('span')
      tempSpan.textContent = Math.round(weatherData['main']['temp'])
      tempSpan.classList.add('temp')
      element.appendChild(tempSpan)
    } else if (section == 'extreme-temp') {
      const minTemp = document.createElement('div');
      const tempSpan = document.createElement('span')
      tempSpan.textContent =Math.round(weatherData['main']['temp_min'])
      tempSpan.classList.add('temp');
      tempSpan.classList.add('min-temp');
      minTemp.appendChild(tempSpan)
      element.appendChild(minTemp);

      const maxTemp = document.createElement('div');
      const tempSpanTwo = document.createElement('span')
      tempSpanTwo.textContent = Math.round(weatherData['main']['temp_max'])
      tempSpanTwo.classList.add('temp');
      tempSpanTwo.classList.add('max-temp');
      maxTemp.appendChild(tempSpanTwo)
      element.appendChild(maxTemp);
    }
    left.appendChild(element);
  });
  
  left.classList.add('summary-main-left')
  summaryMain.appendChild(left);

  summary.appendChild(summaryMain);
}

function loadDetails(data){
  const details = document.querySelector('.detail');
  details.style.visibility = 'visible';

  // weather details
  const weatherDetails = [
    {
      name: "SUNRISE",
      data: (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getTimeFromDate)(new Date (data['sys']['sunrise'] * 1000)),
    },
    {
      name: "SUNSET",
      data: (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getTimeFromDate)(new Date (data['sys']['sunset'] * 1000)),
    },
    {
      name: 'CHANCE OF RAIN',
      data: "n/a"
    },
    {
      name: 'HUMIDITY',
      data: data['main']['humidity'] + '%'
    },
    {
      name: 'WIND',
      data: data['wind']['speed'] + 'km/hr'
    },
    {
      name: 'FEELS LIKE',
      data: Math.round(data['main']['feels_like'])
    },
    {
      name: 'PRECIPITAITON',
      data: "n/a"
    },
    {
      name: 'PRESSURE',
      data: data['main']['pressure'] + 'hPa'
    },
    {
      name: 'VISIBILITY',
      data: data['visibility']/1000 + 'km'
    },
    {
      name: 'UV INDEX',
      data: "n/a"
    },
  ]

  weatherDetails.forEach(detail => {
    const container = document.createElement('div');
    container.classList.add('detail-container');

    const detailTitle = document.createElement('div');
    detailTitle.classList.add('detail-title');
    detailTitle.id = (`${textToHyphenFormat(detail.name)}-detail-title`);
    detailTitle.textContent = detail.name;
    container.appendChild(detailTitle);

    const detailValue = document.createElement('div');
    detailValue.classList.add('detail-value');
    detailValue.id = (`${textToHyphenFormat(detail.name)}-detail-value`);
    detailValue.textContent = detail.data;
    if ( detail.name == "FEELS LIKE" ) {
      detailValue.classList.add('temp');
    }
    container.appendChild(detailValue)

    details.appendChild(container);
  })
}

function loadDescription(data){
  const description = document.querySelector('.description');
  description.style.visibility = 'visible';

  const weather = document.createElement('span')
  weather.textContent = data['weather'][0]['description'];
  weather.classList.add('desc-weather')
  description.appendChild(weather)

  const minTemp = document.createElement('span')
  minTemp.textContent = Math.round(data['main']['temp_min'])
  minTemp.classList.add('temp');
  minTemp.classList.add('desc-min-temp');
  description.appendChild(minTemp);

  const maxTemp = document.createElement('span')
  maxTemp.textContent = Math.round(data['main']['temp_max'])
  maxTemp.classList.add('temp');
  maxTemp.classList.add('desc-max-temp');
  description.appendChild(maxTemp);

  // description.textContent = `Today: ${data['weather'][0]['description']}. The high will be ${Math.round(data['main']['temp_max'])}\u00B0. The low tonight will be ${Math.round(data['main']['temp_min'])}\u00B0.`
}

function clearBox(elementSelector) {
  const div = document.querySelector(elementSelector);
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}

function textToHyphenFormat(text){
  return text.split(" ").join("-").toLowerCase();
}




/***/ }),

/***/ "./src/apiHandler.js":
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLonLat": () => (/* binding */ getLonLat),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
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




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeFromDate": () => (/* binding */ getTimeFromDate)
/* harmony export */ });
function getTimeFromDate(currentDate){
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();
  return time;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/searchBar.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateSearchBar": () => (/* binding */ generateSearchBar)
/* harmony export */ });
/* harmony import */ var _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler.js */ "./src/apiHandler.js");
/* harmony import */ var _DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManipulation.js */ "./src/DOMManipulation.js");



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
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearBox)('.summary');
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearBox)('.detail');
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearBox)('.description');

  let coordinates = await (0,_apiHandler_js__WEBPACK_IMPORTED_MODULE_0__.getLonLat)(cityName);
  const tempControl = document.querySelector('#temp-unit');
  let tempUnit = "";

  if (tempControl.textContent == "C"){
    tempUnit = 'metric';
  } else {
    tempUnit = "imperial";
  }

  let weatherData = await (0,_apiHandler_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(coordinates, tempUnit);
  console.log(weatherData);


  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.loadSummary)(weatherData);
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.loadDetails)(weatherData);
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.loadDescription)(weatherData);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBUTtBQUNWLEVBQUUsNkRBQVE7QUFDVixFQUFFLDZEQUFRO0FBQ1Y7QUFDQSwwQkFBMEIseURBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOERBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBVztBQUNiLEVBQUUsZ0VBQVc7QUFDYixFQUFFLG9FQUFlO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL0RPTU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2FwaUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zZWFyY2hCYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VGltZUZyb21EYXRlIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRTdW1tYXJ5KHdlYXRoZXJEYXRhKSB7XHJcbiAgY29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5Jyk7XHJcbiAgc3VtbWFyeS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAvLyBMZWZ0IHNpZGVcclxuICBjb25zdCBzdW1tYXJ5TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN1bW1hcnlNYWluLmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnktbWFpbicpO1xyXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsZWZ0U2VjdGlvbnMgPSBbJ2NpdHknLCAnd2VhdGhlcicsICdjdXJyZW50LXRlbXAnLCAnZXh0cmVtZS10ZW1wJ107XHJcbiAgbGVmdFNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHNlY3Rpb24pO1xyXG4gICAgaWYgKHNlY3Rpb24gPT0gJ2NpdHknKSB7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVsnbmFtZSddO1xyXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uID09ICd3ZWF0aGVyJykge1xyXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnbWFpbiddO1xyXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uID09ICdjdXJyZW50LXRlbXAnKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgIHRlbXBTcGFuLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YVsnbWFpbiddWyd0ZW1wJ10pXHJcbiAgICAgIHRlbXBTcGFuLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRlbXBTcGFuKVxyXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uID09ICdleHRyZW1lLXRlbXAnKSB7XHJcbiAgICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgdGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPU1hdGgucm91bmQod2VhdGhlckRhdGFbJ21haW4nXVsndGVtcF9taW4nXSlcclxuICAgICAgdGVtcFNwYW4uY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKCdtaW4tdGVtcCcpO1xyXG4gICAgICBtaW5UZW1wLmFwcGVuZENoaWxkKHRlbXBTcGFuKVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1pblRlbXApO1xyXG5cclxuICAgICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0ZW1wU3BhblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICB0ZW1wU3BhblR3by50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGFbJ21haW4nXVsndGVtcF9tYXgnXSlcclxuICAgICAgdGVtcFNwYW5Ud28uY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gICAgICB0ZW1wU3BhblR3by5jbGFzc0xpc3QuYWRkKCdtYXgtdGVtcCcpO1xyXG4gICAgICBtYXhUZW1wLmFwcGVuZENoaWxkKHRlbXBTcGFuVHdvKVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1heFRlbXApO1xyXG4gICAgfVxyXG4gICAgbGVmdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9KTtcclxuICBcclxuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnktbWFpbi1sZWZ0JylcclxuICBzdW1tYXJ5TWFpbi5hcHBlbmRDaGlsZChsZWZ0KTtcclxuXHJcbiAgc3VtbWFyeS5hcHBlbmRDaGlsZChzdW1tYXJ5TWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWREZXRhaWxzKGRhdGEpe1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsJyk7XHJcbiAgZGV0YWlscy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAvLyB3ZWF0aGVyIGRldGFpbHNcclxuICBjb25zdCB3ZWF0aGVyRGV0YWlscyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTVU5SSVNFXCIsXHJcbiAgICAgIGRhdGE6IGdldFRpbWVGcm9tRGF0ZShuZXcgRGF0ZSAoZGF0YVsnc3lzJ11bJ3N1bnJpc2UnXSAqIDEwMDApKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU1VOU0VUXCIsXHJcbiAgICAgIGRhdGE6IGdldFRpbWVGcm9tRGF0ZShuZXcgRGF0ZSAoZGF0YVsnc3lzJ11bJ3N1bnNldCddICogMTAwMCkpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0NIQU5DRSBPRiBSQUlOJyxcclxuICAgICAgZGF0YTogXCJuL2FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0hVTUlESVRZJyxcclxuICAgICAgZGF0YTogZGF0YVsnbWFpbiddWydodW1pZGl0eSddICsgJyUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnV0lORCcsXHJcbiAgICAgIGRhdGE6IGRhdGFbJ3dpbmQnXVsnc3BlZWQnXSArICdrbS9ocidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdGRUVMUyBMSUtFJyxcclxuICAgICAgZGF0YTogTWF0aC5yb3VuZChkYXRhWydtYWluJ11bJ2ZlZWxzX2xpa2UnXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdQUkVDSVBJVEFJVE9OJyxcclxuICAgICAgZGF0YTogXCJuL2FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1BSRVNTVVJFJyxcclxuICAgICAgZGF0YTogZGF0YVsnbWFpbiddWydwcmVzc3VyZSddICsgJ2hQYSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdWSVNJQklMSVRZJyxcclxuICAgICAgZGF0YTogZGF0YVsndmlzaWJpbGl0eSddLzEwMDAgKyAna20nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVVYgSU5ERVgnLFxyXG4gICAgICBkYXRhOiBcIm4vYVwiXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgd2VhdGhlckRldGFpbHMuZm9yRWFjaChkZXRhaWwgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGRldGFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXRhaWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdGl0bGUnKTtcclxuICAgIGRldGFpbFRpdGxlLmlkID0gKGAke3RleHRUb0h5cGhlbkZvcm1hdChkZXRhaWwubmFtZSl9LWRldGFpbC10aXRsZWApO1xyXG4gICAgZGV0YWlsVGl0bGUudGV4dENvbnRlbnQgPSBkZXRhaWwubmFtZTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgZGV0YWlsVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbFZhbHVlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC12YWx1ZScpO1xyXG4gICAgZGV0YWlsVmFsdWUuaWQgPSAoYCR7dGV4dFRvSHlwaGVuRm9ybWF0KGRldGFpbC5uYW1lKX0tZGV0YWlsLXZhbHVlYCk7XHJcbiAgICBkZXRhaWxWYWx1ZS50ZXh0Q29udGVudCA9IGRldGFpbC5kYXRhO1xyXG4gICAgaWYgKCBkZXRhaWwubmFtZSA9PSBcIkZFRUxTIExJS0VcIiApIHtcclxuICAgICAgZGV0YWlsVmFsdWUuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFZhbHVlKVxyXG5cclxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRGVzY3JpcHRpb24oZGF0YSl7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuICBkZXNjcmlwdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgd2VhdGhlci50ZXh0Q29udGVudCA9IGRhdGFbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXTtcclxuICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2Mtd2VhdGhlcicpXHJcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQod2VhdGhlcilcclxuXHJcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gIG1pblRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGFbJ21haW4nXVsndGVtcF9taW4nXSlcclxuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2Rlc2MtbWluLXRlbXAnKTtcclxuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtaW5UZW1wKTtcclxuXHJcbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gIG1heFRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGFbJ21haW4nXVsndGVtcF9tYXgnXSlcclxuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ2Rlc2MtbWF4LXRlbXAnKTtcclxuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtYXhUZW1wKTtcclxuXHJcbiAgLy8gZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgVG9kYXk6ICR7ZGF0YVsnd2VhdGhlciddWzBdWydkZXNjcmlwdGlvbiddfS4gVGhlIGhpZ2ggd2lsbCBiZSAke01hdGgucm91bmQoZGF0YVsnbWFpbiddWyd0ZW1wX21heCddKX1cXHUwMEIwLiBUaGUgbG93IHRvbmlnaHQgd2lsbCBiZSAke01hdGgucm91bmQoZGF0YVsnbWFpbiddWyd0ZW1wX21pbiddKX1cXHUwMEIwLmBcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb3goZWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50U2VsZWN0b3IpO1xyXG4gIHdoaWxlKGRpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0VG9IeXBoZW5Gb3JtYXQodGV4dCl7XHJcbiAgcmV0dXJuIHRleHQuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBsb2FkU3VtbWFyeSwgY2xlYXJCb3gsIGxvYWREZXRhaWxzLCBsb2FkRGVzY3JpcHRpb24gfSIsImNvbnN0IEFQSUtFWSA9ICdlNjEyNjY4ZmNmOWVmNGYwMWYwYmIyYjIwYmY2OGI3Nyc7XHJcbi8vIGkgc2hvdWxkIGFkZCB0cnkgY2F0Y2ggdG8gY2F0Y2ggZXJyb3JzXHJcbmFzeW5jIGZ1bmN0aW9uIGdldExvbkxhdChjaXR5TmFtZSl7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSZsaW1pdD0xJmFwcGlkPSR7QVBJS0VZfWAsIHttb2RlOiAnY29ycyd9KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgbG9uOiBkYXRhWzBdWydsb24nXSxcclxuICAgIGxhdDogZGF0YVswXVsnbGF0J10sXHJcbiAgfVxyXG4gIHJldHVybiBjb29yZGluYXRlcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY29vcmRpbmF0ZXMsIHRlbXBVbml0KXtcclxuICBjb25zdCBsb24gPSBjb29yZGluYXRlc1snbG9uJ107XHJcbiAgY29uc3QgbGF0ID0gY29vcmRpbmF0ZXNbJ2xhdCddO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke0FQSUtFWX0mdW5pdHM9JHt0ZW1wVW5pdH1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QoY29vcmRpbmF0ZXMsIHRlbXBVbml0KXtcclxuLy8gICBsZXQgZGF0YSA9IFwiXCI7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGxvbiA9IGNvb3JkaW5hdGVzWydsb24nXTtcclxuLy8gICAgIGNvbnN0IGxhdCA9IGNvb3JkaW5hdGVzWydsYXQnXTtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPXtjdXJyZW50LG1pbnV0ZWx5LGRhaWx5LGFsZXJ0c30mYXBwaWQ9JHtBUElLRVl9JnVuaXRzPSR7dGVtcFVuaXR9YCwge21vZGU6ICdjb3JzJ30pO1xyXG4vLyAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICBhbGVydChlKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBkYXRhO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgeyBnZXRMb25MYXQsIGdldFdlYXRoZXJEYXRhIH1cclxuIiwiZnVuY3Rpb24gZ2V0VGltZUZyb21EYXRlKGN1cnJlbnREYXRlKXtcclxuICBsZXQgdGltZSA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyBcIjpcIiArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcclxuICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VGltZUZyb21EYXRlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9uTGF0IH0gZnJvbSAnLi9hcGlIYW5kbGVyLmpzJztcclxuaW1wb3J0IHsgbG9hZFN1bW1hcnksIGxvYWREZXRhaWxzLCBjbGVhckJveCwgbG9hZERlc2NyaXB0aW9uIH0gZnJvbSAnLi9ET01NYW5pcHVsYXRpb24uanMnXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNlYXJjaEJhcigpe1xyXG4gIGNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBzZWFyY2hJbnB1dC50eXBlID0gXCJzZWFyY2hcIjtcclxuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtYmFyJztcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGNpdHknO1xyXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG5cclxuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY2l0eU5hbWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgIHNlYXJjaEJ1dHRvbkV2ZW50KGNpdHlOYW1lKTtcclxuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJydcclxuICB9KVxyXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xyXG4gIHJldHVybiBzZWFyY2hCYXJDb250YWluZXI7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEJ1dHRvbkV2ZW50KGNpdHlOYW1lKXtcclxuICBjbGVhckJveCgnLnN1bW1hcnknKTtcclxuICBjbGVhckJveCgnLmRldGFpbCcpO1xyXG4gIGNsZWFyQm94KCcuZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0TG9uTGF0KGNpdHlOYW1lKTtcclxuICBjb25zdCB0ZW1wQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLXVuaXQnKTtcclxuICBsZXQgdGVtcFVuaXQgPSBcIlwiO1xyXG5cclxuICBpZiAodGVtcENvbnRyb2wudGV4dENvbnRlbnQgPT0gXCJDXCIpe1xyXG4gICAgdGVtcFVuaXQgPSAnbWV0cmljJztcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcFVuaXQgPSBcImltcGVyaWFsXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjb29yZGluYXRlcywgdGVtcFVuaXQpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuXHJcblxyXG4gIGxvYWRTdW1tYXJ5KHdlYXRoZXJEYXRhKTtcclxuICBsb2FkRGV0YWlscyh3ZWF0aGVyRGF0YSk7XHJcbiAgbG9hZERlc2NyaXB0aW9uKHdlYXRoZXJEYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IHtnZW5lcmF0ZVNlYXJjaEJhcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=