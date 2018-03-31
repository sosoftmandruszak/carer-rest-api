'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./init');
const indexRouter = require('./routes/index');
const carerRouter = require('./routes/carer');
const patientRouter = require('./routes/patient');
const {NotFoundError} = require('./common/errorHandling/httpErrors');
const errorHandler = require('./common/errorHandling/errorHandler');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/carer', carerRouter);
app.use('/patient', patientRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new NotFoundError('Path not found'));
});

// error handler
app.use(function(err, req, res, next) {
    errorHandler(res, err);
});

module.exports = app;
