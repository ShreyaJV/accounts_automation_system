// routes/api/expenditure.js
/*const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expenditure = require('../models/Expenditure');

// @route    POST api/expenditure
// @desc     Add a new expenditure
// @access   Private
router.post('/', auth, async (req, res) => {
  const { category, amount } = req.body;

  try {
    const newExpenditure = new Expenditure({
      user: req.user.id,
      category,
      amount
    });

    const expenditure = await newExpenditure.save();
    res.json(expenditure);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/expenditure
// @desc     Get all expenditures for the logged-in user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const expenditures = await Expenditure.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenditures);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;*/

// backend/routes/expenditure.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expenditure = require('../models/Expenditure');

// Get all expenditures
router.get('/', auth, async (req, res) => {
  try {
    const expenditures = await Expenditure.find({ user: req.user.id });
    res.json(expenditures);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new expenditure
router.post('/', auth, async (req, res) => {
  const { category, amount } = req.body;
  try {
    const newExpenditure = new Expenditure({
      category,
      amount,
      user: req.user.id
    });
    const expenditure = await newExpenditure.save();
    res.json(expenditure);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
