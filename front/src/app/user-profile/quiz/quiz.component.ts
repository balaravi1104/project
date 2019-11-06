import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';

import { Option, Question, Quiz, QuizConfig } from '../models/index';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService],
})
export class QuizComponent implements OnInit {
  quizes: any[];
  data: any;
  //quiz: Quiz = new Quiz(null);
  quiz:Quiz;
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = new QuizConfig();

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(private quizService: QuizService) {}

   ngOnInit() { this.loadQuiz();}
  //   // this.quizes = this.quizService.getAll();
  //   // this.quizName = this.quizes[0].id;
  //   //this.loadQuiz();
  //   // this.quizService.getquiz().subscribe(res => {

  //   //   this.data = [res];
  //   // console.log(this.data[0])
  //   // this.quiz = new Quiz(this.data[0])
  //   // },
  //   //   err => {
  //   //     console.log(err);
  //   //   }
  //   // );
  // }

  loadQuiz() {
    this.quizService.getquiz().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
        console.log(this.data);
        this.quiz = new Quiz(this.data);
        console.log('hi');
        this.pager.count = this.quiz.questions.length;
        this.startTime = new Date();
        this.ellapsedTime = '00:00';
        this.timer = setInterval(() => {
          this.tick();
        }, 1000);
        this.duration = this.parseTime(this.config.duration);
      },
      err => {
        console.log(err);
      }
        // this.quizService.getquiz().subscribe(res => {
        //   this.quiz = new Quiz(res);


        );
    // console.log(this.quiz.id);
    this.mode = 'quiz';
    // this.quizService.getquiz().subscribe(res => {
    //   this.quiz = new Quiz(res)
    //   console.log(this.quiz.id)
    // })
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return this.quiz.questions ? this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach(x => {
        if (x.id !== option.id) {
          x.selected = false;
        }
      });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ quizId: this.quiz.id, questionId: x.id, answered: x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    // console.log(this.quiz.questions);
    this.mode = 'result';
  }
  nextquiz() {
    // if(){
    this.quizName = this.quizes[1].id;
    // this.loadQuiz();
    this.mode = 'quiz';
    this.pager.index = 0;
    // }
  }
}
