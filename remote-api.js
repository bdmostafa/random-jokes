// https://api.chucknorris.io/
// Only GET request accepts

// Selectors
const jokesBtn = document.querySelector('#jokes');
const categoriesBtn = document.querySelector('#categories');
const displayJokes = document.querySelector('#jokes-area');
const ulElement = document.querySelector('#category-ul');


// Event Listeners
jokesBtn.addEventListener('click', getJokes);
categoriesBtn.addEventListener('click', getCategories);
ulElement.addEventListener('click', getCategoryJokes);


// Functions
async function getJokes() {
    const jokes = await fetch('https://api.chucknorris.io/jokes/random')
        .then(joke => joke.json());
    displayJokes.textContent = jokes.value;
}

async function getCategories() {
    const categories = await fetch('https://api.chucknorris.io/jokes/categories')
        .then(category => category.json());
    let listHTML = '';
    categories.forEach(category => {
        listHTML += `<li>${category}</li>`;
    })
    ulElement.innerHTML = listHTML;
}

async function getCategoryJokes(e) {
    // console.log(e.target)
    const category = e.target.innerText;
    const categoryJokes = await fetch(`https://api.chucknorris.io/jokes/random?${category}=${category}`)
        .then(categoryJoke => categoryJoke.json());
    displayJokes.textContent = categoryJokes.value;
}