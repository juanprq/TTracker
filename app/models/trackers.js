import mongoose from 'mongoose';

const trackerSchema = new mongoose.Schema({
  description: String,
  time: Number,
  project: {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    color: String,
  },
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('Tracker', trackerSchema);
