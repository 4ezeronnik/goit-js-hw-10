import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputSearchBox = document.querySelector('input#search-box');
const cardList = document.querySelector('.country-list');
console.log(cardList);

inputSearchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(evt) {
    const inputValue = evt.target.value.trim();

     if (!inputValue) {
         document.location.reload()
     }

    fetchCountries(inputValue)
        .then((item) => {
            if (item.length === 1)
                renderMarkupForOne(item)
            if (item.length >=2 && item.length <=10) {
            renderMarkupForAll(item)
        }
           
            console.log(item);
        })
        .catch(error => {
            console.log('This is error')
                console.log(error);;
        })
    
}



function renderMarkupForOne(data) {
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
     <div class="country-languages">Languages: ${Object.values(languages)}</div>
     </div>
    `).join('');

    cardList.innerHTML = markup;
}


function renderMarkupForAll(data) {
    const markup = data
        .map(
            ({ name, flags }) => `
    <div class="country-info">
    <img class="country-img"
     src="${flags.svg}"
     alt="flags"
     width = 40px
     height = 40px >
    <div class="country-name"> ${name.official}</div>
    `).join('');

    cardList.innerHTML = markup;
}