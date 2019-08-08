const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' },
];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/trains', (req,res) => {
    res.send(trains); //array
});

app.post('/trains', (req,res) => {
    const newTrain = req.body;
    trains.push(newTrain);
    res.send('All good');
});

app.get('/first-train', (req,res) => {
    res.send(trains[0]); //object
})

app.get('/last-train', (req,res) => {
    res.send(trains[trains.length - 1]); //object
});

app.get('/count', (req,res) => {
    res.send({totalCount: trains.length});
})

app.get('/random', (req,res) => {
    const ranNumber = randomNumber(0, trains.length-1);
    const randomTrain = trains[ranNumber];
    res.send(randomTrain);
})

app.listen(5000, () => {
    console.log('Totes running on port 5000!');
})

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}