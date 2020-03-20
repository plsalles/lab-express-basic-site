const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/career', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'career.html'));
});

app.get('/photoGallery', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'photoGallery.html'));
});

app.listen(3000, () => console.log('App running on PORT 3000'));