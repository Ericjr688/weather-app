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


// generate the summary section of the website
function loadSummary(weatherData) {
  const summary = document.querySelector('.summary');
  summary.style.visibility = 'visible';
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

// generate the details section of the website
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

// generate description section of the website
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUFXO0FBQ2IsRUFBRSxnRUFBVztBQUNiLEVBQUUsb0VBQWU7QUFDakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvRE9NTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBpSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NlYXJjaEJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUaW1lRnJvbURhdGUgfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xyXG5cclxuLy8gZ2VuZXJhdGUgdGhlIHN1bW1hcnkgc2VjdGlvbiBvZiB0aGUgd2Vic2l0ZVxyXG5mdW5jdGlvbiBsb2FkU3VtbWFyeSh3ZWF0aGVyRGF0YSkge1xyXG4gIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtbWFyeScpO1xyXG4gIHN1bW1hcnkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICBjb25zdCBzdW1tYXJ5TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN1bW1hcnlNYWluLmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnktbWFpbicpO1xyXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsZWZ0U2VjdGlvbnMgPSBbJ2NpdHknLCAnd2VhdGhlcicsICdjdXJyZW50LXRlbXAnLCAnZXh0cmVtZS10ZW1wJ107XHJcbiAgbGVmdFNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHNlY3Rpb24pO1xyXG4gICAgaWYgKHNlY3Rpb24gPT0gJ2NpdHknKSB7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVsnbmFtZSddO1xyXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uID09ICd3ZWF0aGVyJykge1xyXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnbWFpbiddO1xyXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uID09ICdjdXJyZW50LXRlbXAnKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgIHRlbXBTcGFuLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YVsnbWFpbiddWyd0ZW1wJ10pXHJcbiAgICAgIHRlbXBTcGFuLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRlbXBTcGFuKVxyXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uID09ICdleHRyZW1lLXRlbXAnKSB7XHJcbiAgICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgdGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPU1hdGgucm91bmQod2VhdGhlckRhdGFbJ21haW4nXVsndGVtcF9taW4nXSlcclxuICAgICAgdGVtcFNwYW4uY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKCdtaW4tdGVtcCcpO1xyXG4gICAgICBtaW5UZW1wLmFwcGVuZENoaWxkKHRlbXBTcGFuKVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1pblRlbXApO1xyXG5cclxuICAgICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0ZW1wU3BhblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICB0ZW1wU3BhblR3by50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGFbJ21haW4nXVsndGVtcF9tYXgnXSlcclxuICAgICAgdGVtcFNwYW5Ud28uY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gICAgICB0ZW1wU3BhblR3by5jbGFzc0xpc3QuYWRkKCdtYXgtdGVtcCcpO1xyXG4gICAgICBtYXhUZW1wLmFwcGVuZENoaWxkKHRlbXBTcGFuVHdvKVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1heFRlbXApO1xyXG4gICAgfVxyXG4gICAgbGVmdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9KTtcclxuICBcclxuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnktbWFpbi1sZWZ0JylcclxuICBzdW1tYXJ5TWFpbi5hcHBlbmRDaGlsZChsZWZ0KTtcclxuXHJcbiAgc3VtbWFyeS5hcHBlbmRDaGlsZChzdW1tYXJ5TWFpbik7XHJcbn1cclxuXHJcbi8vIGdlbmVyYXRlIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHdlYnNpdGVcclxuZnVuY3Rpb24gbG9hZERldGFpbHMoZGF0YSl7XHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKTtcclxuICBkZXRhaWxzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gIC8vIHdlYXRoZXIgZGV0YWlsc1xyXG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNVTlJJU0VcIixcclxuICAgICAgZGF0YTogZ2V0VGltZUZyb21EYXRlKG5ldyBEYXRlIChkYXRhWydzeXMnXVsnc3VucmlzZSddICogMTAwMCkpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTVU5TRVRcIixcclxuICAgICAgZGF0YTogZ2V0VGltZUZyb21EYXRlKG5ldyBEYXRlIChkYXRhWydzeXMnXVsnc3Vuc2V0J10gKiAxMDAwKSksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ0hBTkNFIE9GIFJBSU4nLFxyXG4gICAgICBkYXRhOiBcIm4vYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSFVNSURJVFknLFxyXG4gICAgICBkYXRhOiBkYXRhWydtYWluJ11bJ2h1bWlkaXR5J10gKyAnJSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXSU5EJyxcclxuICAgICAgZGF0YTogZGF0YVsnd2luZCddWydzcGVlZCddICsgJ2ttL2hyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0ZFRUxTIExJS0UnLFxyXG4gICAgICBkYXRhOiBNYXRoLnJvdW5kKGRhdGFbJ21haW4nXVsnZmVlbHNfbGlrZSddKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1BSRUNJUElUQUlUT04nLFxyXG4gICAgICBkYXRhOiBcIm4vYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUFJFU1NVUkUnLFxyXG4gICAgICBkYXRhOiBkYXRhWydtYWluJ11bJ3ByZXNzdXJlJ10gKyAnaFBhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1ZJU0lCSUxJVFknLFxyXG4gICAgICBkYXRhOiBkYXRhWyd2aXNpYmlsaXR5J10vMTAwMCArICdrbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdVViBJTkRFWCcsXHJcbiAgICAgIGRhdGE6IFwibi9hXCJcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICB3ZWF0aGVyRGV0YWlscy5mb3JFYWNoKGRldGFpbCA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZGV0YWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC10aXRsZScpO1xyXG4gICAgZGV0YWlsVGl0bGUuaWQgPSAoYCR7dGV4dFRvSHlwaGVuRm9ybWF0KGRldGFpbC5uYW1lKX0tZGV0YWlsLXRpdGxlYCk7XHJcbiAgICBkZXRhaWxUaXRsZS50ZXh0Q29udGVudCA9IGRldGFpbC5uYW1lO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGV0YWlsVmFsdWUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXZhbHVlJyk7XHJcbiAgICBkZXRhaWxWYWx1ZS5pZCA9IChgJHt0ZXh0VG9IeXBoZW5Gb3JtYXQoZGV0YWlsLm5hbWUpfS1kZXRhaWwtdmFsdWVgKTtcclxuICAgIGRldGFpbFZhbHVlLnRleHRDb250ZW50ID0gZGV0YWlsLmRhdGE7XHJcbiAgICBpZiAoIGRldGFpbC5uYW1lID09IFwiRkVFTFMgTElLRVwiICkge1xyXG4gICAgICBkZXRhaWxWYWx1ZS5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsVmFsdWUpXHJcblxyXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIGdlbmVyYXRlIGRlc2NyaXB0aW9uIHNlY3Rpb24gb2YgdGhlIHdlYnNpdGVcclxuZnVuY3Rpb24gbG9hZERlc2NyaXB0aW9uKGRhdGEpe1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcbiAgZGVzY3JpcHRpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhWyd3ZWF0aGVyJ11bMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgd2VhdGhlci5jbGFzc0xpc3QuYWRkKCdkZXNjLXdlYXRoZXInKVxyXG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHdlYXRoZXIpXHJcblxyXG4gIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICBtaW5UZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhWydtYWluJ11bJ3RlbXBfbWluJ10pXHJcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdkZXNjLW1pbi10ZW1wJyk7XHJcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobWluVGVtcCk7XHJcblxyXG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICBtYXhUZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhWydtYWluJ11bJ3RlbXBfbWF4J10pXHJcbiAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdkZXNjLW1heC10ZW1wJyk7XHJcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobWF4VGVtcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQm94KGVsZW1lbnRTZWxlY3Rvcikge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudFNlbGVjdG9yKTtcclxuICB3aGlsZShkaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGV4dFRvSHlwaGVuRm9ybWF0KHRleHQpe1xyXG4gIHJldHVybiB0ZXh0LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgbG9hZFN1bW1hcnksIGNsZWFyQm94LCBsb2FkRGV0YWlscywgbG9hZERlc2NyaXB0aW9uIH0iLCJjb25zdCBBUElLRVkgPSAnZTYxMjY2OGZjZjllZjRmMDFmMGJiMmIyMGJmNjhiNzcnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9uTGF0KGNpdHlOYW1lKXtcclxuICB0cnl7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9JmxpbWl0PTEmYXBwaWQ9JHtBUElLRVl9YCwge21vZGU6ICdjb3JzJ30pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICBsb246IGRhdGFbMF1bJ2xvbiddLFxyXG4gICAgICBsYXQ6IGRhdGFbMF1bJ2xhdCddLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG4gIH1jYXRjaChlcnJvcil7XHJcbiAgICBjb25zb2xlLmxvZygnRXJyb3Igd2l0aCBnZXR0aW5nIGNvb3JkaW5hdGUgZGF0YTogJywgZXJyb3IgKVxyXG4gIH0gXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNvb3JkaW5hdGVzLCB0ZW1wVW5pdCl7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvbiA9IGNvb3JkaW5hdGVzWydsb24nXTtcclxuICAgIGNvbnN0IGxhdCA9IGNvb3JkaW5hdGVzWydsYXQnXTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke0FQSUtFWX0mdW5pdHM9JHt0ZW1wVW5pdH1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ0Vycm9yIHdpdGggZ2V0dGluZyB3ZWF0aGVyIGluZm9ybWF0aW9uOiAnLCBlcnJvciApXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRMb25MYXQsIGdldFdlYXRoZXJEYXRhIH1cclxuIiwiZnVuY3Rpb24gZ2V0VGltZUZyb21EYXRlKGN1cnJlbnREYXRlKXtcclxuICBsZXQgdGltZSA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyBcIjpcIiArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcclxuICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VGltZUZyb21EYXRlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9uTGF0IH0gZnJvbSAnLi9hcGlIYW5kbGVyLmpzJztcclxuaW1wb3J0IHsgbG9hZFN1bW1hcnksIGxvYWREZXRhaWxzLCBjbGVhckJveCwgbG9hZERlc2NyaXB0aW9uIH0gZnJvbSAnLi9ET01NYW5pcHVsYXRpb24uanMnXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNlYXJjaEJhcigpe1xyXG4gIGNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBzZWFyY2hJbnB1dC50eXBlID0gXCJzZWFyY2hcIjtcclxuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtYmFyJztcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGNpdHknO1xyXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG5cclxuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY2l0eU5hbWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgIHNlYXJjaEJ1dHRvbkV2ZW50KGNpdHlOYW1lKTtcclxuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJydcclxuICB9KVxyXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xyXG4gIHJldHVybiBzZWFyY2hCYXJDb250YWluZXI7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEJ1dHRvbkV2ZW50KGNpdHlOYW1lKXtcclxuICBjbGVhckJveCgnLnN1bW1hcnknKTtcclxuICBjbGVhckJveCgnLmRldGFpbCcpO1xyXG4gIGNsZWFyQm94KCcuZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0TG9uTGF0KGNpdHlOYW1lKTtcclxuICBjb25zdCB0ZW1wQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLXVuaXQnKTtcclxuICBsZXQgdGVtcFVuaXQgPSBcIlwiO1xyXG5cclxuICBpZiAodGVtcENvbnRyb2wudGV4dENvbnRlbnQgPT0gXCJDXCIpe1xyXG4gICAgdGVtcFVuaXQgPSAnbWV0cmljJztcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcFVuaXQgPSBcImltcGVyaWFsXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjb29yZGluYXRlcywgdGVtcFVuaXQpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuXHJcblxyXG4gIGxvYWRTdW1tYXJ5KHdlYXRoZXJEYXRhKTtcclxuICBsb2FkRGV0YWlscyh3ZWF0aGVyRGF0YSk7XHJcbiAgbG9hZERlc2NyaXB0aW9uKHdlYXRoZXJEYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IHtnZW5lcmF0ZVNlYXJjaEJhcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=