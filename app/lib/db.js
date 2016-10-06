import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/ttracker');
mongoose.Promise = global.Promise;
