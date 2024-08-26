// backend/routes/payment.js
/*const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Payment = require('../models/Payment');

// Get all payments
router.get('/', auth, async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id });
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new payment
router.post('/', auth, async (req, res) => {
  const { source, amount, dueDate, status } = req.body;
  try {
    const newPayment = new Payment({
      source,
      amount,
      dueDate,
      status,
      user: req.user.id
    });
    const payment = await newPayment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;*/

// backend/routes/payment.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Payment = require('../models/Payment');

// Get all payments
router.get('/', auth, async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id });
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new payment
router.post('/', auth, async (req, res) => {
  const { source, amount, dueDate, status } = req.body;
  try {
    const newPayment = new Payment({
      source,
      amount,
      dueDate,
      status,
      user: req.user.id
    });
    const payment = await newPayment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

