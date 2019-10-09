const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Quiz Schema
const QuestionSchema = new Schema({
    id: Number,
    name:String,
    description: String,
    question: [
      {
        id: Number,
    name:String,
    questionTypeId: Number,
    options: [
      {
        id: Number,
        name: String,
        isAnswer: Boolean
      },
      {
        id: Number,
        name: String,
        isAnswer: Boolean
      },
      {
        id: Number,
        name: String,
        isAnswer: Boolean
      }
      
    ],
    questionType : [
       {
      id : Number,
      name : String,
      isActive : Boolean
  }
]
      }
    ]
    
})


module.exports=mongoose.model('Quiz',QuestionSchema);
 