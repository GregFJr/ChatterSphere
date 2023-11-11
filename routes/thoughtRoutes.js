const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

// Routes for thoughts
router.get('/', thoughtController.getAllThoughts);
router.get('/:id', thoughtController.getThoughtById);
router.post('/', thoughtController.createThought);
router.put('/:id', thoughtController.updateThought);
router.delete('/:id', thoughtController.deleteThought);

// Routes for reactions
router.post('/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
