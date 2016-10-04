import mongoose from 'mongoose';

module.exports.controller = (app) => {
  app.get('/api/v1/projects', (req, res) => {
    mongoose.model('Project').find({}, (error, projects) => {
      if (error) {
        return console.error(error);
      }

      return res.json(projects);
    });
  });
};
