import mongoose from 'mongoose';

module.exports.controller = (app) => {
  app.route('/api/v1/trackers')
    .get((req, res) => {
      mongoose.model('Tracker').find({}, (error, trackers) => {
        if (error) {
          return console.error(error);
        }

        return res.json(trackers);
      });
    });
};
