
const port = process.env.PORT || 5000;
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/test', (req,res) => {
    res.send([2,3,4]);
});

app.listen(3000, () => console.log(`Listening on port ${port}...`))