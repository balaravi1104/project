const mongoose = require('mongoose')
const _ = require('lodash')

const quiz = mongoose.model('Quiz')

module.exports.getquiz = (req, res, next) => {
  quiz.find({ id: req.id }, function (err, items) {
    if (err) {
      console.log(err)
      res.json({ err: err })
    } else {
      res.json({ status: true, user: _.pick(id, ['name', 'questions', 'options']) })
    }
  })
}
