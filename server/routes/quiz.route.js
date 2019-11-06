const express = require('express');
const routeQuiz = express.Router();

//model
//require('../models/quiz.model');
//var rq = 1
const ctrlQuestion = require('../controllers/quiz.controller');
//const questionsModel = require('../models/quiz.model');
//api routes
routeQuiz.get('/', ctrlQuestion.getquiz);
// routerQuiz.get('/quiz', (req, res, next) => {

//     // Get All Questions
//     questionsModel.find({}, function (err, items) {
//         if (err) {
//             console.log(err)
//             res.json({ err: err })
//         } else {
//             res.json({ Quiz:items })
//         }
//     })

// })
      

module.exports = routeQuiz;
