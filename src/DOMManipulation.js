import { getTimeFromDate } from "./logic.js";

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
      data: getTimeFromDate(new Date (data['sys']['sunrise'] * 1000)),
    },
    {
      name: "SUNSET",
      data: getTimeFromDate(new Date (data['sys']['sunset'] * 1000)),
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


export { loadSummary, clearBox, loadDetails, loadDescription }