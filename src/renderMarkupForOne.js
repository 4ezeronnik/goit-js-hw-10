
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
    <div class="country-capital">Capital: ${capital}</div>
    <div class="country-population">Population: ${population}</div>
     <div class="country-languages">Languages: ${Object.values(languages)}</div>
     </div>
    `).join('');

    cardList.innerHTML = markup;
}