const mongoose = require('mongoose')


// Quiz Schema
const QuestionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  questions: [
    {
      id: Number,
      name: String,
      options: [
        {
          id: Number,
          name: String,
          isAnswer: Boolean
        }
      ]

    }
  ]
}
);

module.exports = mongoose.model('Quiz',QuestionSchema)
