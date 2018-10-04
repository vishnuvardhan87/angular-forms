import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  contactMethods =[
    {id:1, name:'Email'},
    {id:2, name:'Phone'},
    {id:3, name:'Fax'}
  ]
  submit(f){
    console.log(f);
  }

}
