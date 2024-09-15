const Score = require('../models/Score');
const User = require('../models/User');

exports.submitScore = async (req, res) => {
  const { userId, score } = req.body;

  try {

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (score > user.highScore) {
      user.highScore = score;
      await user.save();
    }
    await Score.create({ userId, score });
    res.json({ message: 'Score saved', highScore: user.highScore });
  } catch (error) {
    res.status(500).json({ error: 'Error saving score' });
  }
};

exports.getScores = async (req, res) => {
  const { userId } = req.params;

  try {
    const scores = await Score.find({ userId });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching scores' });
  }
};
