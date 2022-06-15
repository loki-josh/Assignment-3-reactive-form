import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive_forms';
  reactiveForm:any
  constructor(){
    
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      'firstName': new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z]+")]),
      'lastName': new FormControl("", [Validators.required, Validators.maxLength(15),Validators.pattern("[A-Za-z]+")]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'phone': new FormControl("", [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
      'password': new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
      'confirmPassword': new FormControl("", [Validators.required]),
      'date': new FormControl("", [Validators.required]),



    })
    
  }
  Submitform(){
      console.log(this.reactiveForm)
  }
  resetform(){
    this.reactiveForm.reset()
  }

}
