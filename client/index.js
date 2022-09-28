const searchResults = document.getElementById('searchResults');
const feelingLuckyButton = document.getElementById("feelingLuckyButton");
const poodleSearchButton = document.getElementById("poodleSearchForm");

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

const createSearchResult = (dogData) => {
    const result = document.createElement("div");
    searchResults.appendChild(result);

    const dogName = document.createElement("h3");
    dogName.textContent = dogData.breed;
    result.appendChild(dogName);

    const dogURL = document.createElement("a");
    dogURL.textContent = dogData.link;
    dogURL.href = dogData.link;
    result.appendChild(dogURL);
}


async function feelingLucky() {
    try {
        const id = Math.ceil(Math.random() * 3);
        console.log(id);
        const rawData = await fetch(`http://localhost:8000/dogs/${id}`);
        const dogData = await rawData.json();
        console.log(dogData);
        dogURL = dogData.link
        console.log(dogURL);
        window.open(dogURL);
    } catch (err) {
        console.log(err);
    }
    
}

feelingLucky();

// feelingLuckyButton.addEventListener("click", () => {
//     feelingLucky();
// });

poodleSearchButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = e.target.searchbar.value;
    console.log(search);
    searchResults.innerHTML = "";
    poodleSearch(search);
});


// function feelingLucky() {
    // e.preventDefault();
    // try {
    //     // const rawData = await fetch(`http://localhost:8000/dogs/random`);
    //     // const dogData = await rawData.json();
    //     dogURL = dogData.url
        // window.open("https://en.wikipedia.org/wiki/Labrador_Retriever");
//     } catch (err) {
//         console.log(err);
//     }
// }
