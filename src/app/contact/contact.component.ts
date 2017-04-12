import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public name = '';
  public email = '';
  public subject = '';
  public message = '';
  public sent = false;

  ngOnInit() {
  }

  sendMessage(nameForm, emailForm, subjectForm, messageForm) {
    const params: URLSearchParams = new URLSearchParams();
    params.append('subject', this.subject);
    params.append('body', this.message);
    const email = `mailto:richardbob1397@gmail.com?cc=${this.email}&subject=${this.subject}&body=${this.message}`
    console.log(email);
    window.location.href = email;
   nameForm.reset();
   emailForm.reset();
   subjectForm.reset();
   messageForm.reset();
  }
}
