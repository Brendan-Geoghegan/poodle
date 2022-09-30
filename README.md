# Code challenge - Poodle Search engine
![Poodle Logo](./media/Poodle.png "Poodle Logo")
## Description
- Searches for dog breeds and returns a url to their wikipedia and a picture of the breed.
- returns results based on descriptive keywords.
- I'm feeling lucky button opens random wikipedia dog page in new tab.
## Instructions and Usage
### Installation
1 Fork or Clone repo
2 `cd server` to get to the server folder.
3 Run `npm install` to install node packages.
### Usage
- `cd server` to get to the server folder and run `npm run poodle` in the terminal to run server.
- Right click on `index.html` and select open live server to view in browser.
- `cd server` to get to the server folder and run `npm test` in the terminal to start backend tests.
- Search for breeds in the searchbar, corrisponding to breeds in the `data.js` file. Eg: Poodle, Golden Retrievers
- Search for attributes in the searchbar, corrisponding to attributes in the data.js file. Eg: small, big, short-haired, etc.
- Search will now take any keyword and look for it within the name of each breed and each attribute for each breed. 
## Changelog
#### index.html
- favicon added.
- logo added.
- header and footer added.
- easter egg added in header.
#### style.css
- applied same font to everything.
- centred logo and search buttons.
#### index.js
- added event listener for searchbar.
- created functions for searching by breed and by attributes
- created function for I'm feeling lucky button
- I'm feeling lucky button working correctly.
- function created to filter key words through both breed names and attributes.
- capitalisation and spaces are no longer a problem in the search bar.
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
#### data.js
- added images to data.
- updated links in data.
#### app.test.js
- installed jest and supertest
- created three tests to check get commands for server.
#### index-back.js
- created so real server can be run for here and test server can access app.js at the same time.
## bugs
- tests are needed to check that each function is working properly.
- areas where hard code is used need to be changed to soft code.
- footer needs fixing so that the bone is more aligned with the text.
## Wins and Challenges
### Win
* searchById vs searchByBreed - /:id and /:breed fought for priority, had to change to /breed/:breed to work
- getting the search bar to accept attributes and breed names.
- getting the feeling lucky button to work properly.
- creating function that ignores capitals and spaces.
### challenge
- getting the im feeling lucky button to work properly using event listeners and `e.preventDefault()`
- searchById vs searchByBreed
- realising why the links were overflowing the divs because they're treated like one long word with no breaks.

## Links

* https://gist.github.com/getfutureproof-admin/38f7a28d8b86907d8c3c0fded3b55fb3 - Assignment Brief
