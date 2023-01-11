import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any=[];
  Answere="";
  @ViewChild('f') Forms:NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.data);
    console.log(this.Forms.value);
    this.data.push(this.Forms.value);


  }
}
