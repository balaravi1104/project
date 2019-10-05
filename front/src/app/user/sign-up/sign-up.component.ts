import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service'
import { appRoutes } from 'src/app/routes';
import { Routes , Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService,private route : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        this.route.navigate(['/login']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';

        }

      }
    );

      }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
