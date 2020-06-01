import { elements, addLoader, removeLoader } from '../base';
import Search from './models/search';
import {
  readCurrentInput,
  clearInputField,
  clearUI,
  updateWeatherDetails,
} from './views/searchView';

//current state of data in app
const state = {};
/*

 SEARCH CONTROLLER

 */
let SearchController = async () => {
  //clear ui to prepare for new information
  clearUI();
  //read value from input
  let searchQuery = readCurrentInput() || window.location.hash.replace('#', '');
  //clear input field
  clearInputField();
  console.log(searchQuery);
  if (searchQuery) {
    //add loader while user waits for data to be recieved from api
    addLoader();
    state.search = new Search(searchQuery);
    //get weather data for the query location
    let data = await state.search.weatherSearch();
    //remove Loader
    removeLoader();
    // updateUI(data.description);
    updateWeatherDetails(data);
  }
};

////////////////////////////////////////

// Event listener for search controller
elements.formELement.addEventListener('submit', (e) => {
  e.preventDefault();
  SearchController();
});

window.addEventListener('hashchange', (e) => {
  e.preventDefault;
  SearchController();
});
