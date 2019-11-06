import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  getquiz() {
    return this.http.get(environment.apiBaseUrl + '/quiz');
  }

  // getAll() {
  //   return [
  //     { id: 'assets/data/javascript.json', name: 'JavaScript' },
  //    { id: 'assets/data/designPatterns.json', name: 'Design Patterns' }
  //   ];
  // }

}
