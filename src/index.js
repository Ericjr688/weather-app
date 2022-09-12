import { loadPage } from './initialPageLoad.js';
import { loadHeader } from './generateHeader.js';
import {} from './DOMManipulation.js';
import {} from './logic.js';
import {getLonLat} from './apiHandler.js'
import './style.css';

loadHeader();
loadPage();

//add function to change all temps on button click (change all temperature values and then reprint screen)
// use <span> with temp classname to wrap the temps so that we can access them
// check responsiveness
// use try catch on asynch functions to handle errors