const statesUrl = './json/states.json'
const country = document.querySelector('#country');
const state = document.querySelector('#state');
let responses;
country.addEventListener('change', getStates)

const fillTheWoleFrikkinThing = async () => {
        const response = await axios.get(statesUrl)
        responses = response.data
        getCountry()
}

const getCountry = () => {
    Object.keys(responses).map(item => country.insertAdjacentHTML('beforeend', `<option>${item}</option>`));
};

function getStates() {
    const picked = country.value;
    state.innerHTML = '';
    responses[picked].map(item => state.insertAdjacentHTML('beforeend', `<option>${item}</option>`));
};

fillTheWoleFrikkinThing()