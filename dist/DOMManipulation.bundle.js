/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!********************************!*\
  !*** ./src/DOMManipulation.js ***!
  \********************************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NTWFuaXB1bGF0aW9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWU7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLDBEQUFlO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0NBQWtDLHFCQUFxQixxQ0FBcUMsa0NBQWtDLHFDQUFxQztBQUM1TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9ET01NYW5pcHVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0VGltZUZyb21EYXRlKGN1cnJlbnREYXRlKXtcclxuICBsZXQgdGltZSA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyBcIjpcIiArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcclxuICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VGltZUZyb21EYXRlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRUaW1lRnJvbURhdGUgfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFN1bW1hcnkod2VhdGhlckRhdGEpIHtcclxuICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bW1hcnknKTtcclxuICBzdW1tYXJ5LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gIC8vIExlZnQgc2lkZVxyXG4gIGNvbnN0IHN1bW1hcnlNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3VtbWFyeU1haW4uY2xhc3NMaXN0LmFkZCgnc3VtbWFyeS1tYWluJyk7XHJcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxlZnRTZWN0aW9ucyA9IFsnY2l0eScsICd3ZWF0aGVyJywgJ2N1cnJlbnQtdGVtcCcsICdleHRyZW1lLXRlbXAnXTtcclxuICBsZWZ0U2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc2VjdGlvbik7XHJcbiAgICBpZiAoc2VjdGlvbiA9PSAnY2l0eScpIHtcclxuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhWyduYW1lJ107XHJcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT0gJ3dlYXRoZXInKSB7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVsnd2VhdGhlciddWzBdWydtYWluJ107XHJcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT0gJ2N1cnJlbnQtdGVtcCcpIHtcclxuICAgICAgY29uc3QgdGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhWydtYWluJ11bJ3RlbXAnXSlcclxuICAgICAgdGVtcFNwYW4uY2xhc3NMaXN0LmFkZCgndGVtcCcpXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcFNwYW4pXHJcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT0gJ2V4dHJlbWUtdGVtcCcpIHtcclxuICAgICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0ZW1wU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICB0ZW1wU3Bhbi50ZXh0Q29udGVudCA9TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YVsnbWFpbiddWyd0ZW1wX21pbiddKVxyXG4gICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgICAgIHRlbXBTcGFuLmNsYXNzTGlzdC5hZGQoJ21pbi10ZW1wJyk7XHJcbiAgICAgIG1pblRlbXAuYXBwZW5kQ2hpbGQodGVtcFNwYW4pXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWluVGVtcCk7XHJcblxyXG4gICAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHRlbXBTcGFuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgIHRlbXBTcGFuVHdvLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YVsnbWFpbiddWyd0ZW1wX21heCddKVxyXG4gICAgICB0ZW1wU3BhblR3by5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgICAgIHRlbXBTcGFuVHdvLmNsYXNzTGlzdC5hZGQoJ21heC10ZW1wJyk7XHJcbiAgICAgIG1heFRlbXAuYXBwZW5kQ2hpbGQodGVtcFNwYW5Ud28pXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWF4VGVtcCk7XHJcbiAgICB9XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnc3VtbWFyeS1tYWluLWxlZnQnKVxyXG4gIHN1bW1hcnlNYWluLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuICBzdW1tYXJ5LmFwcGVuZENoaWxkKHN1bW1hcnlNYWluKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZERldGFpbHMoZGF0YSl7XHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKTtcclxuICBkZXRhaWxzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gIC8vIHdlYXRoZXIgZGV0YWlsc1xyXG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNVTlJJU0VcIixcclxuICAgICAgZGF0YTogZ2V0VGltZUZyb21EYXRlKG5ldyBEYXRlIChkYXRhWydzeXMnXVsnc3VucmlzZSddICogMTAwMCkpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTVU5TRVRcIixcclxuICAgICAgZGF0YTogZ2V0VGltZUZyb21EYXRlKG5ldyBEYXRlIChkYXRhWydzeXMnXVsnc3Vuc2V0J10gKiAxMDAwKSksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ0hBTkNFIE9GIFJBSU4nLFxyXG4gICAgICBkYXRhOiBcIm4vYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSFVNSURJVFknLFxyXG4gICAgICBkYXRhOiBkYXRhWydtYWluJ11bJ2h1bWlkaXR5J10gKyAnJSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXSU5EJyxcclxuICAgICAgZGF0YTogZGF0YVsnd2luZCddWydzcGVlZCddICsgJ2ttL2hyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0ZFRUxTIExJS0UnLFxyXG4gICAgICBkYXRhOiBNYXRoLnJvdW5kKGRhdGFbJ21haW4nXVsnZmVlbHNfbGlrZSddKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1BSRUNJUElUQUlUT04nLFxyXG4gICAgICBkYXRhOiBcIm4vYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUFJFU1NVUkUnLFxyXG4gICAgICBkYXRhOiBkYXRhWydtYWluJ11bJ3ByZXNzdXJlJ10gKyAnaFBhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1ZJU0lCSUxJVFknLFxyXG4gICAgICBkYXRhOiBkYXRhWyd2aXNpYmlsaXR5J10vMTAwMCArICdrbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdVViBJTkRFWCcsXHJcbiAgICAgIGRhdGE6IFwibi9hXCJcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICB3ZWF0aGVyRGV0YWlscy5mb3JFYWNoKGRldGFpbCA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZGV0YWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC10aXRsZScpO1xyXG4gICAgZGV0YWlsVGl0bGUuaWQgPSAoYCR7dGV4dFRvSHlwaGVuRm9ybWF0KGRldGFpbC5uYW1lKX0tZGV0YWlsLXRpdGxlYCk7XHJcbiAgICBkZXRhaWxUaXRsZS50ZXh0Q29udGVudCA9IGRldGFpbC5uYW1lO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGV0YWlsVmFsdWUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXZhbHVlJyk7XHJcbiAgICBkZXRhaWxWYWx1ZS5pZCA9IChgJHt0ZXh0VG9IeXBoZW5Gb3JtYXQoZGV0YWlsLm5hbWUpfS1kZXRhaWwtdmFsdWVgKTtcclxuICAgIGRldGFpbFZhbHVlLnRleHRDb250ZW50ID0gZGV0YWlsLmRhdGE7XHJcbiAgICBpZiAoIGRldGFpbC5uYW1lID09IFwiRkVFTFMgTElLRVwiICkge1xyXG4gICAgICBkZXRhaWxWYWx1ZS5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsVmFsdWUpXHJcblxyXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWREZXNjcmlwdGlvbihkYXRhKXtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xyXG4gIGRlc2NyaXB0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICB3ZWF0aGVyLnRleHRDb250ZW50ID0gZGF0YVsnd2VhdGhlciddWzBdWydkZXNjcmlwdGlvbiddO1xyXG4gIHdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnZGVzYy13ZWF0aGVyJylcclxuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh3ZWF0aGVyKVxyXG5cclxuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgbWluVGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YVsnbWFpbiddWyd0ZW1wX21pbiddKVxyXG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnZGVzYy1taW4tdGVtcCcpO1xyXG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG1pblRlbXApO1xyXG5cclxuICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YVsnbWFpbiddWyd0ZW1wX21heCddKVxyXG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnZGVzYy1tYXgtdGVtcCcpO1xyXG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG1heFRlbXApO1xyXG5cclxuICAvLyBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBUb2RheTogJHtkYXRhWyd3ZWF0aGVyJ11bMF1bJ2Rlc2NyaXB0aW9uJ119LiBUaGUgaGlnaCB3aWxsIGJlICR7TWF0aC5yb3VuZChkYXRhWydtYWluJ11bJ3RlbXBfbWF4J10pfVxcdTAwQjAuIFRoZSBsb3cgdG9uaWdodCB3aWxsIGJlICR7TWF0aC5yb3VuZChkYXRhWydtYWluJ11bJ3RlbXBfbWluJ10pfVxcdTAwQjAuYFxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJveChlbGVtZW50U2VsZWN0b3IpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgd2hpbGUoZGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHRUb0h5cGhlbkZvcm1hdCh0ZXh0KXtcclxuICByZXR1cm4gdGV4dC5zcGxpdChcIiBcIikuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGxvYWRTdW1tYXJ5LCBjbGVhckJveCwgbG9hZERldGFpbHMsIGxvYWREZXNjcmlwdGlvbiB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9