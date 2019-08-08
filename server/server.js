// bring express into your project
// you will need to `npm init` and `npm install express` first
const express = require('express');

// create your express app
const app = express();

// This is your array of trains
const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' },
    { name: 'Jessie', color: 'Yellow'},
];

console.log('Hello! I am on the feature branch!');

// -------- BASE -----//

app.use(express.static('server/public'));

// Create your `/train` route here
// when a user visits localhost:5000/train
// this route should return the array of trains
app.get('/trains', (req,res) => {
    res.send(trains); //array
});


// Create your `/first-train` route here
// when a user visits localhost:5000/first-train
// this route should return the first train in the array
app.get('/first-train', (req,res) => {
    res.send(trains[0]); //object
})


// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array
app.get('/last-train', (req,res) => {
    res.send(trains[trains.length - 1]); //object
});


// -------- STRETCH -----//

// Create your `/count` route here
// when a user visits localhost:5000/count
// this route should return the number of trains in the array
// NOTE: express doesn't like it when you return numbers
// instead, return an object like { totalCount: 4 }
app.get('/count', (req,res) => {
    res.send({totalCount: trains.length});
})

// Create your `/random` route here
// when a user visits localhost:5000/random
// this route should return a single train at random
app.get('/random', (req,res) => {
    const ranNumber = randomNumber(0, trains.length-1);
    const randomTrain = trains[ranNumber];
    res.send(randomTrain);
})

// -------- BASE -----//

// Don't forget to start your app by running `.listen()`
app.listen(5000, () => {
    console.log('Totes running on port 5000!');
})


function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}