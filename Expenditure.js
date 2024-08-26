// models/Expenditure.js
/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenditureSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('expenditure', ExpenditureSchema);*/

// models/Expenditure.js
const mongoose = require('mongoose');

const ExpenditureSchema = new mongoose.Schema({
  category: { type: String, required:true },
  amount: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Expenditure', ExpenditureSchema);
