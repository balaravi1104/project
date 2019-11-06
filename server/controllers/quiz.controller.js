const mongoose = require('mongoose')
// const _ = require('lodash')
require('../models/quiz.model');
const Quiz = mongoose.model('Quiz')


 module.exports.getquiz =  (req, res) => {
  console.log("start");
  
    // js.save(function(error){
    //     if(error)
    //     {
    //         console.log(error);
    //     }
    //     else
    //     console.log("saved");
    //      });

   Quiz.find({}, {_id:0}, function (err, Quiz) {
      console.log("inside quiz")
    if (err) {
      console.log(err)
      return res.status(404).json({ err: err })
    } else {
      console.log("inside else")
      console.log(Quiz)
      return res.status(200).json(Quiz);
    }
    })
     console.log("end");
  }
