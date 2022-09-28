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
        const id = Math.ceil(Math.random() * 21);
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


// poodleSearchByAttribute("big");

feelingLucky();

// feelingLuckyButton.addEventListener("click", () => {
//     feelingLucky();
// });

poodleSearchButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = e.target.searchbar.value;
    console.log(search);
    searchResults.innerHTML = "";
    // poodleSearch(search);
    whatSearch(search);
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
