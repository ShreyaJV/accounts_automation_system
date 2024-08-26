// backend/routes/investment.js
/*const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Investment = require('../models/Investment');

// Get all investments
router.get('/', auth, async (req, res) => {
  try {
    const investments = await Investment.find({ user: req.user.id });
    res.json(investments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new investment
router.post('/', auth, async (req, res) => {
  const { company, amount } = req.body;
  try {
    const newInvestment = new Investment({
      company,
      amount,
      user: req.user.id
    });
    const investment = await newInvestment.save();
    res.json(investment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;*/

// backend/routes/investment.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Investment = require('../models/Investment');

// Get all investments
router.get('/', auth, async (req, res) => {
  try {
    const investments = await Investment.find({ user: req.user.id });
    res.json(investments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new investment
router.post('/', auth, async (req, res) => {
  const { company, amount } = req.body;
  try {
    const newInvestment = new Investment({
      company,
      amount,
      user: req.user.id
    });
    const investment = await newInvestment.save();
    res.json(investment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

