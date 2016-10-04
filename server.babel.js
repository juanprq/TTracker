import express from 'express';
import fs from 'fs';
import './app/lib/db';
import './app/models/projects';
import './app/models/trackers';

const app = express();

app.use(express.static('public'));

fs.readdirSync('./app/controllers').forEach((file) => {
  if (file.substr(-3) === '.js') {
    const route = require(`./app/controllers/${file}`);
    route.controller(app);
  }
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Listening on port: ${port}...`);
