import { handleSearch } from './helpers/pageFunctions';
import { getWeatherByCity, searchCities } from './helpers/weatherAPI';
import './style.css';

document.getElementById('search-form')
  .addEventListener('submit', handleSearch);

document.getElementById('close-forecast')
  .addEventListener('click', () => {
    document.getElementById('forecast-container').classList.add('hidden');
  });

// console.log(getWeatherByCity('rio-de-janeiro-rio-de-janeiro-brazil'));
// console.log(searchCities('Rio de Janeiro'));
