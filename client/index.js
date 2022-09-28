const searchResults = document.getElementById('searchResults');
const feelingLuckyButton = document.getElementById("feelingLucky");
const poodleSearchButton = document.getElementById("poodleSearch");

async function poodleSearch(e) {
    e.preventDefault();
    try {
        const rawData = await fetch(`http://localhost:8000/dogs/1`);
        const dogData = await rawData.json();
        createSearchResult(dogData);
    } catch (err) {
        console.log(err);
    }
}

const createSearchResult = (dogData) => {
    const result = document.createElement("div");
    searchResults.appendChild(result);

    const dogName = document.createElement("h3");
    dogName.textContent = dogData.name;
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


feelingLuckyButton.addEventListener("submit", feelingLucky);
