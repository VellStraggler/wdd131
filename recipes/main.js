import recipes from './recipes.mjs'

function recipeTemplate(recipe) {
	return `<section class="recipe">
            <img class="recipe-image" alt="recipe-image" src="${recipe.image}">
            <section class="recipe-text">
                <div>
                ${getTags(recipe.tags)}
                </div>
                <h2 class="brand-font">${recipe.name}</h2>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${recipe.rating} out of 5 stars"
                >
                    ${getStarsHTML(recipe.rating)}
                </span>
                <p class="desc">${recipe.description}</p>
            </section>
        </section>`;
}

function getTags(tags) {
    let html = ``;
    for (let i=0; i<tags.length;i++){
        html += `<h3 class="meal-type">${tags[i]}</h3>`;
    }
    return html;
}

function getStarsHTML(rating) {
    rating = Math.floor(rating);
    let html = ``;
    for (let i=0; i<rating; i++) {
        html+=`<span aria-hidden="true">⭐</span>`;
    }
    for(let i=0;i<5-rating;i++) {
        html+=`<span aria-hidden="true">☆</span>`;
    }
    return html;
}

function renderRecipes(recipes) {
    // get element we'll put recipes into
    const html = document.getElementById('recipes-list');
    // use recipeTemplate() to transform recipe objects into recipe HTML strings
    html.innerHTML = ``;
    for(let i = 0; i < recipes.length; i++) {
        const newElement = recipeTemplate(recipes[i]); 
        // Set the HTML strings as the innerHTML of output element
        html.innerHTML += newElement;
    }

}

function getRandomListEntry(recipes) {
    return recipes[Math.floor(Math.random()*recipes.length)];
}

function filterRecipes(query) {
    let filtered = [];
    query = query.toLowerCase();
    for(let i =0; i < recipes.length;i++) {
        if (
        recipes[i].name.toLowerCase().includes(query) ||
        recipes[i].description.toLowerCase().includes(query) ||
        recipes[i].tags.some(tag => tag.toLowerCase().includes(query))
        ) {
            filtered.push(recipes[i]);
        }
    }
    return filtered.sort();
}


function initWithRandomRecipe() {
    // get random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes
    renderRecipes([recipe]);
    console.log(recipe);
}

// make sure whole page is loaded
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.search-bar').addEventListener('submit', event => {
        event.preventDefault();
        const query = document.getElementById('input').value.trim(); // remove whitespace
        renderRecipes(filterRecipes(query));
    });
    
    initWithRandomRecipe();
})

 