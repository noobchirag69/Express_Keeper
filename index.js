const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
    const notes = [
        {title: 'The Dark Knight', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
        {title: 'The Man of Tomorrow', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
        {title: 'The Emerald Archer', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
    ];
    res.render('index', { title: 'Home', notes });
});

app.get('/notes', (req, res) => {
    res.redirect('/');
});

app.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

app.use((req, res) => {
    res.status(404).render('error', { title: 'Not Found' });
});