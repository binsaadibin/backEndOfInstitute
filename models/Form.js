// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  selectOption: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);
