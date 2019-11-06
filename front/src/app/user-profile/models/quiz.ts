//import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    description: string;
    //config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        if (data) {
          console.log('inside');
            this.id = data[0].id;
          console.log(this.id);
            this.name = data[0].name;
            this.description = data[0].description;
            console.log(this.name);
            console.log(this.description);
            this.questions = [];
            data[0].questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
