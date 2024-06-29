// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/register', async (req, res) => {
  const { name, email, selectOption, phone, country } = req.body;
  try {
    const newForm = new Form({ name, email, selectOption, phone, country });
    await newForm.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data', error);
    res.status(500).json({ message: 'Error saving form data' }); // Sending a meaningful error response
  }
});

module.exports = router;
