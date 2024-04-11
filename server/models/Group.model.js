const mongoose = require('mongoose');

const GroupTripSchema = new mongoose.Schema({
  tripPostBy: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  groupMembers: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      details: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        numberOfMembers : {type: Number}, // to store the total number of members in a group trip
        NumberOfMales: {type: Number},
        NumberOfFemales: {type: Number},
      },
      personalId: {
        type: String,
        required: true,
      },
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GroupTrip', GroupTripSchema);