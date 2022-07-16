const express = require('express');

// Express App
const app = express();

// Register View Engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(process.env.PORT || 3000);

// Middleware for Static Files
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
    const notes = [
        {title: 'The Dark Knight', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
        {title: 'The Man of Tomorrow', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
        {title: 'The Emerald Archer', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in.'},
    ];
    res.render('index', { title: 'Home', notes });
});


// Redirect
app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/notes', (req, res) => {
    res.redirect('/');
});


// Create Page
app.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// Error Page
app.use((req, res) => {
    res.status(404).render('error', { title: 'Not Found' });
});