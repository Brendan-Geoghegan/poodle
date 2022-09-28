const cors = require('cors');
const express = require('express')

const app = express()
app.use(cors());
const port = 8000;

app.listen(port, () => console.log(`Poodle Search app live on http://localhost:${port}!`))

const dogBreedArray = [
    { id: 1, name: 'Labrador'},
    { id: 2, name: 'Spaniel'}
];

app.get('/dogs', (req, res) => res.send(dogBreedArray));
