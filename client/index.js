const searchResults = document.getElementById('searchResults');
const feelingLuckyButton = document.getElementById("feelingLucky");
const poodleSearchButton = document.getElementById("poodleSearch");

async function poodleSearch() {
    // e.preventDefault();
    try {
        const rawData = await fetch(`http://localhost:8000/dogs/2`);
        console.log(rawData);
        const dogData = await rawData.json();
        console.log(dogData);
        createSearchResult(dogData);
    } catch (err) {
        console.log(err);
    }
}

const createSearchResult = (dogData) => {
    const result = document.createElement("div");
    searchResults.appendChild(result);

    const dogName = document.createElement("h3");
    dogName.textContent = dogData.breed;
    result.appendChild(dogName);
}


async function feelingLucky(e) {
    e.preventDefault();
    // try {
    //     // const rawData = await fetch(`http://localhost:8000/dogs/random`);
    //     // const dogData = await rawData.json();
    //     dogURL = dogData.url
        window.open("https://en.wikipedia.org/wiki/Labrador_Retriever");
//     } catch (err) {
//         console.log(err);
//     }
}

poodleSearch();
// feelingLuckyButton.addEventListener("submit", feelingLucky);

poodleSearchButton.addEventListener("submit", poodleSearch);
