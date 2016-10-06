import mongoose from 'mongoose';

module.exports.controller = (app) => {
  app.route('/api/v1/projects')
    .get((req, res) => {
      mongoose.model('Project').find({})
        .then(projects => res.json(projects))
        .catch(error => console.error(error));
    });
};
