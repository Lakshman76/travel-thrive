const mongoose = require('mongoose');

const RenterSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true, "User name is required"],
    minLength:[5, "Name must be atleast 5 character"],
    maxLength:[30, "Name must be less than 30 character"],
    trim:true
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase:true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  availableHours: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  rentedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Renter', RenterSchema);