const express = require('express');
const routeQuiz = express.Router();
//const ctrlUser = require('../controllers/user.controller');
//model
require('../models/question.model');
const ctrlQuestion = require('../controllers/quiz.controller');
//api routes
routeQuiz.get('/getquiz', ctrlQuestion.getquiz);

      

module.exports = routeQuiz;
