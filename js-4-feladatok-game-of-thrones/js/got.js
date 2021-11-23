const cards = document.querySelector('.nameCards');
const charBio = document.querySelector('.bio__details');
const searchForm = document.querySelector('.bio__form');
const inputName = document.querySelector('input');

sortCharacters('json/got.json')

async function sortCharacters(url) {
    const response = await fetch(url);
    const result = await response.json();
    const stillAlive = result.filter(person => !person.dead);
    stillAlive.sort((charOne, charTwo) => {
        const nameOne = charOne.name.toLocaleUpperCase();
        const nameTwo = charTwo.name.toLocaleUpperCase();
        return nameOne.localeCompare(nameTwo)
    });
    createCardElements(stillAlive);
}

function createCardElements(arr) {
    arr.forEach(char => {
        const charCard = document.createElement('div');
        charCard.classList.add('card');
        charCard.innerHTML = `
            <div class="card__img">
                <img src="${char.portrait}" alt="${char.name}">
            </div>
            <div class="card__text">${char.name}</div>
        `
        cards.append(charCard);

        charCard.addEventListener('click', () => {
            document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
            charCard.classList.add('active');
            createArticle(char);
        })
    });
}

function createArticle(char) {
    if (char) {
        charBio.innerHTML = `
    <div class="bio__details-img">
    ${(char.picture) ?
                `<img src="${char.picture}" alt="${char.name}">` :
                `<img src="assets/placeholder.svg">`
            }
    </bio__details-img>
    <div class="bio__details-title">
        <span>${char.name}</span>
        ${(char.house || char.organization) ?
                `<img src="assets/houses/${char.house ? char.house : char.organization}.png" alt="${char.name}">` :
                `<img src="assets/placeholder.svg">`
            }
    </div>
    <div class="bio__details-text">${char.bio}</div>
    `
    } else {
        charBio.innerHTML = `<h1>Character not found</h1>`
    }
}

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchedName = inputName.value;

    fetch('json/got.json')
        .then(response => response.json())
        .then(allChar => {
            const searchArray = allChar.filter(char => char.name.toLocaleUpperCase() === searchedName.toLocaleUpperCase());

            /* Note: this way you can search for dead characters too. 
            I think it's a cool feature, but if you don't want that to happen,
            you can filter out the deceased characters after you parsed the data.*/

            if (searchArray) {
                createArticle(searchArray[0]);
                inputName.value = '';
            } else {
                charBio.innerHTML = `<h1>Character not found</h1>`
            }
        })
})