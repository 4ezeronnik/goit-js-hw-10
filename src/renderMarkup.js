export const cardList = document.querySelector('.country-list');

export function renderMarkupForOne(data) {
    const markup = data
        .map(
            ({ name, capital, population, languages, flags }) => `
    <div class="country-info">
    <img class="country-img"
     src="${flags.svg}"
     alt="flags"
     width = 50px
     height = 25px >
    <div class="country-name"> ${name.official}</div>
    <div class="country-capital"><span class="country-capital__span">Capital:</span> ${capital}</div>
    <div class="country-population"><span class="country-population__span">Population:</span> ${population}</div>
     <div class="country-languages"><span class="country-languages__span">Languages:</span> ${Object.values(languages)}</div>
     </div>
    `).join('');

    cardList.innerHTML = markup;
}


export function renderMarkupForAll(data) {
    const markup = data
        .map(
            ({ name, flags }) => `
    <div class="country-info__all">
    <img class="country-img"
     src="${flags.svg}"
     alt="flags"
     width = 30px
     height = 15px >
    <div class="country-name-all"> ${name.official}</div>
    `).join('');

    cardList.innerHTML = markup;
}