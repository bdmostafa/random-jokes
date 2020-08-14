// https://api.chucknorris.io/
// Only GET request accepts

// Selectors
const jokesBtn = document.querySelector('#jokes');
const categoriesBtn = document.querySelector('#categories');
const displayJokes = document.querySelector('#jokes-area');
const ulElement = document.querySelector('#category-ul');
let isJokesClicked = false;
let isCategoryClicked = false;

// Event Listeners
jokesBtn.addEventListener('click', getJokes);
categoriesBtn.addEventListener('click', getCategories);
ulElement.addEventListener('click', getCategoryJokes);


// Functions
async function getJokes() {
    isCategoryClicked = false;
    isJokesClicked = true;
    getMarked();
    const jokes = await fetch('https://api.chucknorris.io/jokes/random')
        .then(joke => joke.json());
    displayJokes.textContent = jokes.value;

}

async function getCategories() {
    isJokesClicked = false;
    getMarked();
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
    isJokesClicked = false;
    isCategoryClicked = true;
    getMarked(e);
    const category = e.target.innerText;
    const categoryJokes = await fetch(`https://api.chucknorris.io/jokes/random?${category}=${category}`)
        .then(categoryJoke => categoryJoke.json());
    displayJokes.textContent = categoryJokes.value;
    isCategoryClicked = true;

}

// CSS design on button click event
function getMarked(e) {
    // Remove 'marked' class on all li elements at first, when any category is clicked
    ulElement.childNodes.forEach(li => li.classList.remove('marked'));
    // e parameter is found, when Categories is clicked otherwise 'else' executes on jokesBtn section
    if (e) {
        jokesBtn.classList.remove('marked');
        // Find targeted click event li
        const targetLi = e.target;
        if (!isCategoryClicked) targetLi.classList.remove('marked')
        else targetLi.classList.add('marked')
    } else {
        if (!isJokesClicked) jokesBtn.classList.remove('marked');
        else jokesBtn.classList.add('marked');
    }
}