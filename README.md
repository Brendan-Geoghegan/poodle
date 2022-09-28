# Code challenge - Poodle Search engine
![Poodle Logo](./media/Poodle.png "Poodle Logo")
## Description
- Searches for dog breeds and returns a url to their wikipedia.
- returns results based on descriptive keywords.
- I'm feeling lucky button returns random wikipeia dog page.


## Instructions and Usage
### Installation
1 Fork or Clone repo
2 `cd server` to get to the server folder.
3 Run `npm install` to install node packages.
### Usage
- `cd server` to get to the server file and run `npm run dev` in the terminal to run server.
- Right click on `index.html` and select open live server to view in browser.
- Search for breeds in the searchbar, corrisponding to breeds in the `data.js` file. Eg: Poodle, Golden-Retrievers
- Search for attributes in the searchbar, corrisponding to attributes in the data.js file. Eg: small, big, short-haired, etc.
- **searches must be exactly as they are written in the data.js file** including capital letters and hyphens
Search 
## Changelog
#### index.html
- favicon added.
- logo added.
#### style.css
- applied same font to everything.
- centred logo and search buttons.
#### index.js
- added event listener for searchbar.
- created functions for searching by breed and by attributes
- created function for I'm feeling lucky button
#### app.js
- created router
#### dogs.js\controller
- gets all dog data
- gets dog data by id
-gets dog data by breed
#### dogs.js\models
- created model for dog
- created methods for getting all dog data and finding by id
- creating method for find by breed
## bugs
- i'm feeling lucky button needs event listener so that it does'nt open a new tab with each refresh.
- tests are needed to check that each function is working properly.
- areas where hard code is used need to be changed to soft code.
## Wins and Challenges
### Win
* searchById vs searchByBreed - /:id and /:breed fought for priority, had to change to /breed/:breed to work
- getting the search bar to accept attributes and breed names.
### challenge
- getting the im feeling lucky button to work properly using event listeners and `e.preventDefault()`
- searchById vs searchByBreed

## Links

* https://gist.github.com/getfutureproof-admin/38f7a28d8b86907d8c3c0fded3b55fb3 - Assignment Brief
