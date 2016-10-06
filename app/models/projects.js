import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  color: String,
});

module.exports = mongoose.model('Project', projectSchema);
