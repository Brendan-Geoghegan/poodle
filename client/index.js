const searchResults = document.getElementById('searchResults');

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
    dogName.textContent = dogData.dogName;
    result.appendChild(dogName);
}
