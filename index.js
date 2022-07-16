const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

// Express App
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://noobchirag69:pass6300@cluster0.7vee4.mongodb.net/keeper?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(process.env.PORT || 3000))
    .catch(err => console.log(err));

// Register View Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(noteRoutes);

// Error Page
app.use((req, res) => {
    res.status(404).render('error', { title: 'Not Found' });
});