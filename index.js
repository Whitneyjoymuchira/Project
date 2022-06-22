
path = 'https://api.edamam.com/search'
const app_key = '4965fdc1aac73e6ce40c7d70ef661d48'

const app_id = '0a0479e6'
const urlLink = 'https://api.edamam.com/search?&app_id=0a0479e6&app_key=4965fdc1aac73e6ce40c7d70ef661d48&q=pizza'
const fetchUrl = "https://api.edamam.com/search?&app_id=0a0479e6&app_key=4965fdc1aac73e6ce40c7d70ef661d48&q=pizza"
function displayFoods() {
    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => data.forEach((newData) => {
            return console.log(newData.q)
        }))
}