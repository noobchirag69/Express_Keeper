const Note = require('../models/note');

// Controller Functions

// Getting all notes from the database
const note_index = (req, res) => {
    Note.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'Home', notes: result });
        })
        .catch(err => res.status(404).render('error', { title: 'Not Found' }));
};

// Getting a sigle note based on it's ID
const note_details = (req, res) => {
    const id = req.params.id;
    Note.findById(id)
        .then(result => {
            res.render('details', { note: result, title: 'Note Details' })
        })
        .catch(err => res.status(404).render('error', { title: 'Not Found' }));
};

// Rendering the form
const note_create_get = (req, res) => {
    res.render('create', { title: 'Create' });
};

// Saving a note
const note_create_post = (req, res) => {
    const note = new Note(req.body);
    note.save()
        .then(result => res.redirect('/'))
        .catch(err => res.status(404).render('error', { title: 'Not Found' }));
};

// Deleting a note
const note_delete = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' })
        })
        .catch(err => res.status(404).render('error', { title: 'Not Found' }));
};

module.exports = {
    note_index,
    note_details,
    note_create_get,
    note_create_post,
    note_delete
}