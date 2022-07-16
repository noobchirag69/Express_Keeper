const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'The Dark Knight', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
        {title: 'The Man of Tomorrow', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
        {title: 'The Emerald Archer', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

app.use((req, res) => {
    res.status(404).render('error', { title: 'Not Found' });
});