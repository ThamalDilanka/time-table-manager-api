const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const resourcePrefix = '/api/v1'

// Importing routes from the routes folder
const buildingRoutes = require('./routes/buildingRoutes');
const workingDaysRoutes = require('./routes/workingDaysRoute');




// Creating a Express application
const app = express();

// CORS support
app.use(cors());

// Setting body parser to get access of request.body
app.use(bodyParser.json());

// Logging all the requests to the console in development environment
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Setting the routes to the app as middlewares
app.use(`${resourcePrefix}/buildings`, buildingRoutes);
app.use(`${resourcePrefix}/workingDays`, workingDaysRoutes);





// Setting static webpage
app.use(express.static('./client'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

module.exports = app;
