const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const router = express.Router();

app.use(cookieParser('secret'))

const cookieConfig = {
    httpOnly: true,
    maxAge: 1000000,
    signed: true
};

app.get('/', (req, res) => {
    res.send(`<h1>Express Simple Server</h1>`);
})

app.get("/setcookie", (req, res) => {
    res.cookie('cookieName', 'cookieValue',
    cookieConfig)
    res.cookie('user', {
        name: 'bts',
        data: 100
    });
    res.redirect('/getcookie');
})

router.get('/');

app.get('/getcookie', (req, res) => {
    res.send(req.cookies);
})

app.listen(3000, () => {
    console.log('Server is Running...')
})