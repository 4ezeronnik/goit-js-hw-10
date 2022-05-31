import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputSearchBox = document.querySelector('input#search-box');

inputSearchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(evt) {
    const name = evt.target.value;
   
    fetchCountries(name)
        .then(countries => {
            renderMarkup(countries);
        })
}


function renderMarkup(data) {
    return data.map(item => `
    <div class="country-info"> ${item.name}</div>
    `).join('');
}


