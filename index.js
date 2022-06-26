document.addEventListener('DOMContentLoaded', () => {
    fetchAPI()
    response()

})

path = 'https://api.edamam.com/search'
const APP_key = '4965fdc1aac73e6ce40c7d70ef661d48'

const APP_ID = '0a0479e6'

const Form = document.querySelector('form');
const searchResultDiv = document.querySelector('.results');
const container = document.querySelector('.grid-container')
let searchQuery = '';
//like btn


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
    fetchHTML(data.hits)
    console.log(data)
}

function fetchHTML(output) {
    let fetchedhtml = ' '
    output.map(result => {
        fetchedhtml +=
            `<div class="items">
            <img src="${result.recipe.image}" class= "meal-img" alt="food">
                <div class="flex-container">
                 <h3> ${result.recipe.label}</h3>
                   <a href="${result.recipe.url}" target="_blank" class="recipe link"> Recipe Link </a>
           </div> 
        <p class="item-data">Cuisine-type:${result.recipe.cuisineType}</p>
        <div class="container">
                  <div class="star-widget">
                    <input type="radio" name="rate" id="rate-5"> 
                    <label for="rate-5" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-4">
                    <label for="rate-4" class="fas fa-star"> </label>
                    <input type="radio" name="rate" id="rate-3">
                    <label for="rate-3" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-2">
                    <label for="rate-2" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-1">
                    <label for="rate-1"class="fas fa-star"></label>


                  </div>
                </div>
            </div>  
            
      `



    })
    searchResultDiv.innerHTML = fetchedhtml;
}


let Star=document.querySelector(".star-widget")
function response(){
Star.addEventListener("click", () => {
    alert('Thank you!')
}
)}


/*

document.addEventListener("click", (e) => {
    if (e.target.id === "like__btn") {
        // console.log("hello")

        // if (!clicked) 

        clicked = true;
        //document.style.color.red;
        console.log("I am clicked")
        console.log(likeBtn)
        //likeBtn.style.backgroundColor = "green"
        likeBtn.classList.add = "change"

    }
}
)
function addLike() {
    likeBtn.addEventListener("click", () => {
        console.log("likeBtn")
    })

}*/







/*console.log('Hello')
 if (!clicked) {
     clicked = true;
     likeicon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
     document.style.color.red;
     like__btn.style.background = "red"
 } else {
     clicked = false;
     likeicon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
     likeicon.color.blue;
 }*/






