
path = 'https://api.edamam.com/search'
const APP_key = '4965fdc1aac73e6ce40c7d70ef661d48'

const APP_ID = '0a0479e6'

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.results');
const container = document.querySelector('.container')
let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    //console.log(searchQuery)
    fetchAPI();
})
async function fetchAPI() {
    const fetchUrl = `https://api.edamam.com/search?q=pizza& app_id=${APP_ID}& app_key=${APP_key}`;
    const response = await fetch(fetchUrl)
    // console.log(response);
    const data = await response.json()
    generateHTML(data.hits)
    console.log(data)
}
function generateHTML(results) {
    const generatedhtml = ' '
    results.map(results => {
        generatedhtml +=
            `





`
    })
}