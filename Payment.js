// backend/models/Payment.js
/*const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Payment', PaymentSchema);*/


// backend/models/Payment.js
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Payment', PaymentSchema);
