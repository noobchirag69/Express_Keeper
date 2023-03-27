const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

// Routes
router.get('/', noteController.note_index);
router.post('/', noteController.note_create_post);
router.get('/create', noteController.note_create_get);
router.get('/edit/:id', noteController.note_edit_get);
router.post('/edit/:id', noteController.note_edit_post);
router.get('/:id', noteController.note_delete);

module.exports = router;