const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

// Routes for thoughts
router.get('/', thoughtController.getAllThoughts);

// Get a single thought by ID
router.get('/:id', thoughtController.getThoughtById);

//Create a new thought
router.post('/', thoughtController.createThought);

//Update a thought by ID
router.put('/:id', thoughtController.updateThought);

// Delete a thought by ID
router.delete('/:id', thoughtController.deleteThought);

// Routes for reactions
router.post('/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
