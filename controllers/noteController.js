const Note = require('../models/note');

// Controller Functions
const note_index = (req, res) => {
    Note.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'Home', notes: result });
        })
        .catch(err => console.log(err));
};

const note_details = (req, res) => {
    const id = req.params.id;
    Note.findById(id)
        .then(result => {
            res.render('details', { note: result, title: 'Note Details' })
        })
        .catch(err => console.log(err));
};

const note_create_get = (req, res) => {
    res.render('create', { title: 'Create' });
};

const note_create_post = (req, res) => {
    const note = new Note(req.body);
    note.save()
        .then(result => res.redirect('/'))
        .catch(err => console.log(err));
};

const note_delete = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' })
        })
        .catch(err => console.log(err));
};

module.exports = {
    note_index,
    note_details,
    note_create_get,
    note_create_post,
    note_delete
}