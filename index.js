const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello GG-3!')
});

app.get('/about', (req, res) => {
    res.send('Solusi bagi talenta muda Indonesia')
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})