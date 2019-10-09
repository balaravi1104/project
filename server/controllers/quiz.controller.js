const mongoose = require('mongoose')
const _ = require('lodash')

const quiz = require('../models/quiz.model');
// const quiz = require('../models/quiz.model');

module.exports.getquiz = (req, res) => {
    
  quiz.find({ }, function (err, Quiz) {
      console.log(Quiz);
    if (err) {
      console.log(err)
      res.json({ err: err })
    } else {
      res.send(Quiz);
    }
    
  })
}
