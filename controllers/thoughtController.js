const Thought = require('../models/Thought');
const User = require('../models/User');

// Get all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a single thought by ID
exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      res.status(404).send('No thought found with this ID');
    } else {
      res.json(thought);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new thought
exports.createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });
    res.status(201).json(newThought);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Update a thought by ID
exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedThought) {
      res.status(404).send('No thought found with this ID');
    } else {
      res.json(updatedThought);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete a thought by ID
exports.deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      res.status(404).send('No thought found with this ID');
    } else {
      // You may also want to remove this thought from the user's `thoughts` array.
      await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } });
      res.json({ message: 'Thought successfully deleted' });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Add a reaction to a thought
exports.addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );
    if (!thought) {
      res.status(404).send('No thought found with this ID');
    } else {
      res.json(thought);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Remove a reaction from a thought
exports.removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) {
      res.status(404).send('No thought found with this ID');
    } else {
      res.json(thought);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
