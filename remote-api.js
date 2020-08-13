// GET
// POST
// PUT
// PATCH
// DELETE

// Selectors
const jokesBtn = document.querySelector('#jokes');
const categoriesBtn = document.querySelector('#categories');
const displayJokes = document.querySelector('#jokes-area');
const ulElement = document.querySelector('#category-ul');


// Event Listeners
jokesBtn.addEventListener('click', getJokes);



// Functions
async function getJokes() {
    const jokes = await fetch('https://api.chucknorris.io/jokes/random')
        .then(joke => joke.json());
    displayJokes.textContent = jokes.value;
}