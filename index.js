const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

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

app.get('/users/:email', (req, res) => {
    let email = req.params.email;
    res.json({
        meta: {
            status: 200,
            message: "Success",
        },
        data: {
            message: `Return user detail with email: ${email}`
        }
    });
})

app.get('/query-param', (req, res) => {
    let page = req.query.page;
    res.json({
        meta: {
            status: 200,
            message: "Success",
        },
        data: {
            message: `Return page ${page}`
        }
    });
})

app.post('/request-body', (req, res) => {
    let body = req.body
    res.json({
        meta: {
            status: 200,
            message: "Success",
        },
        data: {
            message: [body]
        }
    });
});

app.post('/write-body', (req, res) => {
    res.set('Custom-Header', 'This is a custom header');
    res.status(201);
    res.json({
        meta: {
            status: 200,
            message: "Success",
        },
        data: {
            message: `created user`
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