const express = require('express');

const { configDataBase } = require('./config/database');
const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');

const PORT = 3000;

async function start() {
  const app = express();
  //config database
  await configDataBase();
  //config
  expressConfigurator(app);
  handlebarsConfigurator(app);
  //router
  app.use(homeController);
  app.use('/movies', movieController);
  app.use('/movies/:movieId', movieController);
  app.get('*', (req, res) => {
    res.redirect('/404');
  });

  app.listen(PORT, console.log(`App is running on ${PORT}...`));
}

start();
