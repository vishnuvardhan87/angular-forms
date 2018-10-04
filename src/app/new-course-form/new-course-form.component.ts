import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
  }

}
