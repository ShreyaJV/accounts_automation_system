// backend/models/Investment.js
/*const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  company: { type: String, required: true },
  amount: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Investment', InvestmentSchema);*/

// backend/models/Investment.js
const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  company: { type: String, required: true },
  amount: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Investment', InvestmentSchema);
