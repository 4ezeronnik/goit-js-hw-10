import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import { renderMarkupForOne, renderMarkupForAll, cardList } from './js/renderMarkup';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const inputSearchBox = document.querySelector('input#search-box');


inputSearchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(evt) {
    const inputValue = evt.target.value.trim();

     if (!inputValue) {
         return
     }

    fetchCountries(inputValue)
        .then((item) => {
            if (item.length === 1) {
                renderMarkupForOne(item)
                
            };
            if (item.length >=2 && item.length <=10) {
                renderMarkupForAll(item)
                
        }
            if (item.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
               cardList.innerHTML = "";
            }
        
            console.log(item);
        }
        )
        .catch(error => {
            Notiflix.Notify.failure("Oops, there is no country with that name");
            console.log(error);
            cardList.innerHTML = "";
            
        }) 
}

