document.addEventListener('DOMContentLoaded', () => {
    fetchAPI()
})

path = 'https://api.edamam.com/search'
const APP_key = '4965fdc1aac73e6ce40c7d70ef661d48'

const APP_ID = '0a0479e6'

const Form = document.querySelector('form');
const searchResultDiv = document.querySelector('.results');
const container = document.querySelector('.grid-container')
let searchQuery = '';

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    //console.log(searchQuery)
    fetchAPI();
})
async function fetchAPI() {
    const fetchurl = `https://api.edamam.com/search?q=${searchQuery}& app_id=${APP_ID}& app_key=${APP_key}`
    let response = await fetch(fetchurl);
    let data = await response.json();
    generateHTML(data.hits)
    console.log(data)
}

function generateHTML(output) {
    let generatedhtml = ' '
    output.map(result => {
        generatedhtml +=
            `<div class="item">
            <img src="${result.recipe.image}" class= "meal-img" alt="food">
                <div class="flex-container">
                 <h3> ${result.recipe.label}</h3>
                   <a href="${result.recipe.url}" target="_blank" class="recipe link"> Recipe Link </a>
           </div> 
        <p class="item-data">Cuisine-type:${result.recipe.cuisineType}</p>
        <button class="btn-class"> 
                  <span id="icon">
                  <i class="fa-solid fa-thumbs-up"></i></span>
                   <span id="count"> 0 </span> Like
                </button>
            </div>  
      `

    })
    searchResultDiv.innerHTML = generatedhtml;

    let likeIcon = document.querySelector('#icon');
    let count = document.querySelector('#count');
    let clicked = false;

    document.getElementsByClassName('like-btn').addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`
            count.textContent++;
        }
        else {
            clicked = false;
            likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`
        }
    })

}

