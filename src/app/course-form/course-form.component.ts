import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseMethods =[
    {id:1, name:'Development'},
    {id:2, name:'Arts'},
    {id:3, name:'Science'}
  ]
  constructor() { }

  ngOnInit() {
  }

  submit(f){
    console.log(f)
  }

}
