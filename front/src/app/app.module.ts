// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { QuizComponent } from './user-profile/quiz/quiz.component';
import { ResultComponent } from './user-profile/result/result.component';
import { NavComponent } from './user-profile/nav/nav.component';
//routes
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { LoaderService } from './shared/loader.service';

//auth
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './shared/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    QuizComponent,
    ResultComponent,
    NavComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },AuthGuard,UserService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
