const Note = require('../models/note');

// Controller Functions

// Getting all notes from the database
const note_index = (req, res) => {
    Note.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'Home', notes: result });
        })
        .catch(err => res.status(404).render('error', { title: 'Error' }));
};

// Rendering the create form
const note_create_get = (req, res) => {
    res.render('create', { title: 'Create' });
};

// Saving a note
const note_create_post = (req, res) => {
    const note = new Note(req.body);
    note.save()
        .then(result => res.redirect('/'))
        .catch(err => res.status(404).render('error', { title: 'Error' }));
};

// Rendering the edit page
const note_edit_get = (req, res) => {
    const id = req.params.id;
    Note.findById(id)
      .then(result => {
            res.render('edit', { note: result, title: 'Edit' });
        })
      .catch(err => res.status(404).render('error', { title: 'Error' }));
};

// Editing a note
const note_edit_post = (req, res) => {
    const id = req.params.id;
    const note = req.body;
    Note.findByIdAndUpdate(id, note)
      .then(result => res.redirect('/'))
      .catch(err => res.status(404).render('error', { title: 'Error' }));
};

// Deleting a note
const note_delete = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(result => res.redirect('/'))
        .catch(err => res.status(404).render('error', { title: 'Error' }));
};

module.exports = {
    note_index,
    note_create_get,
    note_create_post,
    note_edit_get,
    note_edit_post,
    note_delete
}