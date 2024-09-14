const express = require('express');
const { submitScore, getScores } = require('../controllers/scoreController');
const router = express.Router();

router.post('/submit', submitScore);
router.get('/:userId', getScores); // Adjusted to use userId

module.exports = router;
