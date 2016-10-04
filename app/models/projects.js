import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  color: String,
});

mongoose.model('Project', projectSchema);
