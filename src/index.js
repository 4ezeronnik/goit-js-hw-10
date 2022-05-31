import './css/styles.css';
import { fetchCountries }  from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputSearchBox = document.querySelector('input#search-box');

inputSearchBox.addEventListener('input', onSearchBox);

function onSearchBox(evt) {
    const name = evt.currentTarget.value;
    fetchCountries(name);
}





