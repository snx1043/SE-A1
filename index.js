
const port = process.env.PORT || 5000;
const express = require('express');
const app = express();

app.use(express.static('index'));


app.get('/', (req,res) => {
    // res.send('Hello World');
    app.use(express.static('index'));
});

app.get('/test', (req,res) => {
    res.send([2,3,4]);
});

app.listen(port, () => console.log(`Listening on port ${port}...`))