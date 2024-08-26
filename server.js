/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/User')
const app = express();
require('dotenv').config(); 
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({
    origin: 'http://localhost:5173' // Update this to your frontend URL
  }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/expenditure', require('./routes/expenditure'));

// MongoDB connection
const db = process.env.MONGO_URI;
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

app.post('/Register', (req,res)=> {
    User.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));*/


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/User');
const expenditure = require('./routes/expenditure');
const investment = require('./routes/investment');
const payment = require('./routes/payment'); 
const app = express();
require('dotenv').config(); 
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({
    origin: 'http://localhost:5173' // Update this to your frontend URL
  }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/expenditure', require('./routes/expenditure'));
//app.use('/api/investment', require('./routes/investment'));
app.use('/api/investment', investment); 
app.use('/api/payment', payment);

// MongoDB connection
const db = process.env.MONGO_URI;
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

app.post('/Register', (req,res)=> {
    User.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





