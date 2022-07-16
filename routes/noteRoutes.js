const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

// Routes
router.get('/', noteController.note_index);
router.post('/', noteController.note_create_post);
router.get('/create', noteController.note_create_get);
router.get('/:id', noteController.note_details);
router.delete('/:id', noteController.note_delete);

module.exports = router;