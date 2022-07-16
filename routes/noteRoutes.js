const express = require('express');
const Note = require('../models/note');
const router = express.Router();

// Routes
// Home Page
router.get('/', (req, res) => {
    Note.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'Home', notes: result });
        })
        .catch(err => console.log(err));
});

// Sending notes to database and viewing them on the homepage
router.post('/', (req, res) => {
    const note = new Note(req.body);
    note.save()
        .then(result => res.redirect('/'))
        .catch(err => console.log(err));
});

// Create Page
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Note.findById(id)
        .then(result => {
            res.render('details', { note: result, title: 'Note Details' })
        })
        .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' })
        })
        .catch(err => console.log(err));
});

module.exports = router;