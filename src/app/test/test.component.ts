import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name ='Vishnu';

  greet(){
    return 'Hello' + this.name;
  }

  disabled = true;

  onClick(){
    this.disabled = !this.disabled;
  }
  constructor() { }

  ngOnInit() {
  }

}
