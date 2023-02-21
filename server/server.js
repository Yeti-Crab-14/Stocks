const express = require('express');

const app = express();

const PORT = 3000;

// this stackoverflow q makes a good point why you would use path instead of the relative
// https://stackoverflow.com/questions/16727045/node-js-express-js-relative-paths-dot-or-dirname-or-without-any-prefix
const path = require('path');

// import api router -- it won't have much as of now, but with stretch features
// I predict it getting big enough to deserve its own file
// const apiRouter = require('#');

// Parses the body property of request as an object
app.use(express.json());
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({ extended: true }));

// handle request for static files...
// not sure if this will work, but I'm trying to target the styles.css of the styles folder
app.use(express.static(path.join(__dirname, '../client/styles')));

// define route handles
// go from most specific to least specific

// connect this with api router

// statically serve everything in the build folder on the route '/build'
// serv files from build folder - webpack/endpoint points to build folder/ points to all React files
// Needs to be here in production mode
if (process.env.NODE_ENV === 'production') {
    console.log('you are in production mode');
    app.use('/', express.static(path.join(__dirname, '../build')));
}

// for the main application - development mode
app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  console.log('You have reached the main page through express!');
});

// catch-all router handler
app.use('*', (req, res) => res.sendStatus(400));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express caught unknown middleware error',
    status: 400,
    message: 'Something happened :/'
  };

  const error = Object.assign(defaultErr, err);
  console.log(error.log);

  return res.status(error.status).send(JSON.stringify(error.message));
});

// actually start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// export server.js
module.exports = app;


