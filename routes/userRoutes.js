const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET a single user by id
router.get('/:id', userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PUT to update a user by id
router.put('/:id', userController.updateUser);

// DELETE a user by id
router.delete('/:id', userController.deleteUser);

// POST to add a friend
router.post('/:userId/friends/:friendId', userController.addFriend);

// DELETE to remove a friend
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
