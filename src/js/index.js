import { elements } from '../base';
import Search from './models/search';
import { readCurrentInput } from './views/searchView';

//current state of data in app
const state = {};

/*

 SEARCH CONTROLLER

 */
let SearchController = async () => {
  //read value from input
  const searchQuery = readCurrentInput();
  //make a search instance
  if (searchQuery) {
    state.search = new Search(searchQuery);
    //get weather data for the query location

    let data = await state.search.weatherSearch();
    console.log(data);
  }
};

////////////////////////////////////////

//Event listener for search controller
elements.formELement.addEventListener('submit', (e) => {
  e.preventDefault();
  SearchController();
});
