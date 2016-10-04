import mongoose from 'mongoose';
import trackerSchema from '../models/trackers';

module.exports.controller = (app) => {
  app.route('/api/v1/trackers')
    .get((req, res) => {
      mongoose.model('Tracker').find({}, (error, trackers) => {
        if (error) {
          return console.error(error);
        }

        return res.json(trackers);
      });
    })
    .post((req, res) => {
      mongoose.model('Project').find(
        { _id: req.body.projectId },
        (error, [project, ...tail]) => {
          if (error) {
            return res.json({ error });
          }

          const Tracker = mongoose.model('Tracker', trackerSchema);
          const tracker = new Tracker();

          tracker.description = req.body.description;
          tracker.time = req.body.time;
          tracker.project = project;

          tracker.save();
          return res.json(tracker);
        }
      );
    });
};
