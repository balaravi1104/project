export class QuizConfig {
  allowBack: boolean;
  allowReview: boolean;
  autoMove: boolean; // if boolean; it will move to next question automatically when answered.
  duration: number; // indicates the time in which quiz needs to be completed. 0 means unlimited.
  pageSize: number;
  requiredAll: boolean; // indicates if you must answer all the questions before submitting.
  showClock: boolean;
  showPager: boolean;

  constructor() {

    this.allowBack = true;
    this.allowReview = true;
    this.autoMove = false;
    this.duration = 120;
    this.pageSize = 1;
    this.requiredAll = false;
    this.showClock = false;
    this.showPager = false;
  }
}
