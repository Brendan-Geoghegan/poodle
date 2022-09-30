const searchResults = document.getElementById('searchResults');
const feelingLuckyButton = document.getElementById("feelingLuckyButton");
const poodleSearchButton = document.getElementById("poodleSearchForm");

// ********* Searching by breed and attributes

async function poodleSearch(name) {
    try {
        const rawData = await fetch(`http://localhost:8000/dogs/breed/${name}`);
        console.log(rawData);
        const dogData = await rawData.json();
        console.log(dogData);
        createSearchResult(dogData);
    } catch (err) {
        console.log(err);
    }
}

async function poodleSearchByAttribute(atr) {
    try {
        const rawData = await fetch(`http://localhost:8000/dogs`);
        const dogData = await rawData.json();
        console.log(dogData);
        const dogsWithAtr = [];
        let dogAtr;
        for(let i = 0; i < dogData.length; i++) {
            dogAtr = dogData[i].attributes;
            for (let j = 0; j < dogAtr.length; j++) {
                if (dogAtr[j] === atr) {
                    dogsWithAtr.push(dogData[i]);
                }
            }
        }
        for (let k = 0; k < dogsWithAtr.length; k++) {
            createSearchResult(dogsWithAtr[k]);
        }
        console.log(dogsWithAtr);
    } catch (err) {
        console.log(err);
    }
}

const createSearchResult = (dogData) => {
    const result = document.createElement("div");
    result.style.display = "grid";
    result.style["grid-template"] = "1fr / 50% 50%";
    result.style["margin-bottom"] = "10px";
    searchResults.appendChild(result);

    const infoDiv = document.createElement("div");
    infoDiv.style["grid-area"] = "1 / 1 / span 1 / span 1";
    infoDiv.style["word-break"] = "break-all";
    result.appendChild(infoDiv);

    const dogName = document.createElement("h3");
    dogName.textContent = dogData.breed;
    dogName.className = "textSize";
    infoDiv.appendChild(dogName);

    const dogURL = document.createElement("a");
    const dogURLText = document.createElement("p");
    dogURLText.textContent = dogData.link;
    dogURLText.className = "textSize";
    dogURL.appendChild(dogURLText);
    dogURL.href = dogData.link;
    dogURLText.style["white-space"] = "normal";
    infoDiv.appendChild(dogURL);

    const imageDiv = document.createElement("div");
    imageDiv.style["grid-area"] = "1 / 2 / span 1 / span 1";
    result.appendChild(imageDiv);

    const dogImage = document.createElement("img");
    dogImage.style.width = "40%";
    dogImage.style["aspect-ratio"] = "1.4";
    dogImage.style.display = "block";
    dogImage.src = dogData.image;
    dogImage.alt = `Picture of ${dogData.breed}`
    dogImage.style["margin-left"] = "auto";
    dogImage.style["margin-right"] = "auto";
    imageDiv.appendChild(dogImage);
}

function feelingLucky(e){
    e.preventDefault();
    fetch(`http://localhost:8000/dogs`)
    .then(r => r.json())
    .then(data => window.open(data[Math.floor(Math.random() * data.length)].link))
    .catch(console.warn)
}

feelingLuckyButton.addEventListener('submit',feelingLucky);

async function whatSearch(search) {
    try {
        const rawData = await fetch(`http://localhost:8000/dogs`);
        const dogData = await rawData.json();
        for(let i = 0; i < dogData.length; i++) {
            if (dogData[i].breed === search) {
                poodleSearch(search);
                return;
            }
        }
        poodleSearchByAttribute(search);
    } catch (err) {
        console.log(err);
    }
}

poodleSearchButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = e.target.searchbar.value;
    console.log(search);
    searchResults.innerHTML = "";
    // whatSearch(search);
    poodleSearchAny(search);

});

// ***************************** Searching via keywords

function searchFilter(data, keywords){
    const keywordsArray = keywords.split(' ').filter(w => w.length !== 0);
    const matched = [];
    data.forEach(dog => {
        for(keyword of keywordsArray){
            let kw = new RegExp(keyword,'ig');
            if (dog.breed.match(kw) || dog.attributes.some(atr => atr.match(kw))){
                console.log("here");
                matched.push(dog);
                break;
            }
        };
    })
    return matched
}

async function poodleSearchAny(keywords) {
    try {
        const rawData = await fetch(`http://localhost:8000/dogs`);
        console.log(rawData);
        const dogData = await rawData.json();
        console.log(dogData);
        const matched = searchFilter(dogData, keywords);
        for (let i = 0; i < matched.length; i++) {
            createSearchResult(matched[i]);
        }
    } catch (err) {
        console.log(err);
    }
}
