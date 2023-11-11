const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('thoughts')
      .populate('friends');
    if (!user) {
      res.status(404).send('No user found with this ID');
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      res.status(404).send('No user found with this ID');
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send('No user found with this ID');
    } else {

      res.json({ message: 'User successfully deleted' });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Add a friend
exports.addFriend = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } }, 
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user found with this ID' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Remove a friend
exports.removeFriend = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friendIndex = user.friends.indexOf(req.params.friendId);
    if (friendIndex !== -1) {
      user.friends.splice(friendIndex, 1);
      await user.save();
      res.json({ message: "Friend removed successfully." });
    } else {
      res.status(404).json({ message: "Friend not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing friend", error: error.message });
  }
};
