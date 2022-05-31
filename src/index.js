import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputSearchBox = document.querySelector('input#search-box');
const cardList = document.querySelector('.country-list');
console.log(cardList);

inputSearchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(evt) {
    const inputValue = evt.target.value;
   
    fetchCountries(inputValue)
        .then((item) => {
            renderMarkup(item);
            console.log(item);
        })
}


function renderMarkup(data) {
    const markup = data
        .map(
        ({ name, capital, population, languages, flags }) => `
    <div class="country-info">
    <img class="country-img"
     src="${flags.svg}"
     alt="flags"
     width = 40px
     height = 40px >
    <div class="country-name"> ${name.official}</div>
    <div class="country-capital">Capital: ${capital}</div>
    <div class="country-population">Population: ${population}</div>
     <div class="country-languages">Languages: ${languages}</div>
     </div>
    `).join('');

    cardList.insertAdjacentHTML('beforeend', markup);
}


