import mongoose from 'mongoose';
import trackerSchema from '../models/trackers';

module.exports.controller = (app) => {
  app.route('/api/v1/trackers')
    .get((req, res) => {
      mongoose.model('Tracker').find({})
        .then(trackers => res.json(trackers))
        .catch(error => console.error(error));
    })
    .post((req, res) => {
      mongoose.model('Project').findOne({ _id: req.body.projectId })
        .then((project) => {
          const Tracker = mongoose.model('Tracker', trackerSchema);
          const tracker = new Tracker();

          tracker.description = req.body.description;
          tracker.time = req.body.time;
          tracker.project = project;

          tracker.save();
          return res.json(tracker);
        })
        .catch(error => console.error(error));
    });
};
