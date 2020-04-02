require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const webpackConfig = require('../webpack.config');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// // Connect to MongoDB
// mongoose
//   .connect(mongoURI, {   useNewUrlParser: true,
//     useFindAndModify: false,
//     useMongoClient: true })
//   .then(() =>
//     console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
//   )
//   .catch(err => console.log(err));


// // for  localhost 5000
// mongoose.connect("mongodb://localhost/5000", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useMongoClient: true
// });

//for heroku mLab
mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword1>@ds139360.mlab.com:39360/heroku_8fn2cgjw", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useMongoClient: true
});


require('./config/passport')(passport);
app.use(routes);

// if development
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false
    })
  );

  app.use(
    webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, '../client/public'),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(compression());
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    )}`
  );
});
