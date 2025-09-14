const mongoose = require('mongoose');

const Customerschema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  service: {
    type: String,
    required: true,
    enum: [
      "ISO 9001",
      "ISO 14001",
      "ISO 45001",
      "ISO 22000",
      "ISO 27001",
      "Other",
    ],
  },
  message: { type: String, trim: true, maxlength: 2000 },
  status: {
    type: String,
    enum: ["new", "contacted", "closed"],
    default: "new",
  },
},{timestamps:true});

const Customer = mongoose.model('Customer', Customerschema);

// 👇 export directly
module.exports = Customer;
