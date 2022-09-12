import logo from './logo.png';
import { generateSearchBar } from './searchBar.js';

const content = document.querySelector('#content');

function loadHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  const myLogo = new Image();
  myLogo.src = logo;
  logoContainer.appendChild(myLogo);
  header.appendChild(logoContainer);

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = "Weather App";
  header.appendChild(title);

  const searchBar = generateSearchBar();
  searchBar.classList.add('search-bar');
  header.appendChild(searchBar);

  const tempUnit = document.createElement('button');
  tempUnit.textContent = "C";
  tempUnit.addEventListener('click', event => {
    event.preventDefault();

    let temps = document.querySelectorAll('.temp')
    if (tempUnit.textContent == "C"){
      tempUnit.textContent = 'F';
      temps.forEach(temp => {
        let tempValue = temp.textContent * 1;
        tempValue = (tempValue * (9/5)) + 32;
        temp.textContent = Math.round(tempValue);
        console.log(8)
      })
    } else {
      tempUnit.textContent = "C";
      temps.forEach(temp => {
        let tempValue = temp.textContent * 1;
        tempValue = (tempValue - 32) * (5/9)
        temp.textContent = Math.round(tempValue);
      })
    }
    
    
  })
  tempUnit.id = 'temp-unit';
  header.appendChild(tempUnit);

  content.appendChild(header);
}

export {loadHeader};