const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({
        meta: {
            status: 200,
            message: "Success",
        },
        data: {
            message: "Hallo GG-3"
        }
    });
});

app.get('/about', (req, res) => {
    res.json({
        meta: {
            status: 200,
            message: "Success",
        },
        data: {
            message: "Solusi bagi talenta muda Indonesia"
        }
    });
});

app.use((req, res) => {
    res.json({
        meta: {
            status: 404,
            message: "Page not found",
        },
        data: null
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})