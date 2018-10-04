import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

const appRoutes : Routes =[
  {
    path:'course',
    component:CourseFormComponent
  },
  {
    path:'contact',
    component:ContactFormComponent
  },
  { 
    path:'signup',
    component:SignupFormComponent
  },
  {
    path:'',
    redirectTo:'signup',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
