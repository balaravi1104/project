import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'assets/data/javascript.json', name: 'JavaScript' },
     { id: 'assets/data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
