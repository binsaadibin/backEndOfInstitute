const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(cors());

const uri = process.env.MONGODB_URI; // MongoDB connection URI from .env file

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use('/api', formRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
