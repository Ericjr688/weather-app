/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpSGFuZGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLFNBQVMsaUJBQWlCLE9BQU8sSUFBSSxhQUFhO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsSUFBSSxPQUFPLElBQUksU0FBUyxPQUFPLFNBQVMsU0FBUyxJQUFJLGFBQWE7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLElBQUksT0FBTyxJQUFJLFVBQVUsOEJBQThCLFNBQVMsT0FBTyxTQUFTLFNBQVMsSUFBSSxhQUFhO0FBQ3JNO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2FwaUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBBUElLRVkgPSAnZTYxMjY2OGZjZjllZjRmMDFmMGJiMmIyMGJmNjhiNzcnO1xyXG4vLyBpIHNob3VsZCBhZGQgdHJ5IGNhdGNoIHRvIGNhdGNoIGVycm9yc1xyXG5hc3luYyBmdW5jdGlvbiBnZXRMb25MYXQoY2l0eU5hbWUpe1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSUtFWX1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgIGxvbjogZGF0YVswXVsnbG9uJ10sXHJcbiAgICBsYXQ6IGRhdGFbMF1bJ2xhdCddLFxyXG4gIH1cclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNvb3JkaW5hdGVzLCB0ZW1wVW5pdCl7XHJcbiAgY29uc3QgbG9uID0gY29vcmRpbmF0ZXNbJ2xvbiddO1xyXG4gIGNvbnN0IGxhdCA9IGNvb3JkaW5hdGVzWydsYXQnXTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtBUElLRVl9JnVuaXRzPSR7dGVtcFVuaXR9YCwge21vZGU6ICdjb3JzJ30pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KGNvb3JkaW5hdGVzLCB0ZW1wVW5pdCl7XHJcbi8vICAgbGV0IGRhdGEgPSBcIlwiO1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBsb24gPSBjb29yZGluYXRlc1snbG9uJ107XHJcbi8vICAgICBjb25zdCBsYXQgPSBjb29yZGluYXRlc1snbGF0J107XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT17Y3VycmVudCxtaW51dGVseSxkYWlseSxhbGVydHN9JmFwcGlkPSR7QVBJS0VZfSZ1bml0cz0ke3RlbXBVbml0fWAsIHttb2RlOiAnY29ycyd9KTtcclxuLy8gICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgYWxlcnQoZSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gZGF0YTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IHsgZ2V0TG9uTGF0LCBnZXRXZWF0aGVyRGF0YSB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==