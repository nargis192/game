const Score = require('../models/Score');
const User = require('../models/User');

exports.submitScore = async (req, res) => {
  const { userId, score } = req.body;

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update high score if the new score is higher
    if (score > user.highScore) {
      user.highScore = score;
      await user.save();
    }

    // Create a new score entry
    await Score.create({ userId, score });
    res.json({ message: 'Score saved', highScore: user.highScore });
  } catch (error) {
    res.status(500).json({ error: 'Error saving score' });
  }
};

exports.getScores = async (req, res) => {
  const { userId } = req.params; // Extract userId from route params

  try {
    // Find scores by userId
    const scores = await Score.find({ userId });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching scores' });
  }
};
