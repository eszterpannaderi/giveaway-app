import { Component, OnInit, Input} from '@angular/core';
import { CodeUploadComponent } from '../code-upload/code-upload.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  @Input() email = '';
  @Input() registrationNeeded = true;
  error = false
  username=''
  accepted=false;
  constructor() { }

  

  ngOnInit(): void {
  }

  validateTerms(){
    if(this.accepted)return
    else{
      this.error=true
      return false
    }
  }
  validateName(){
    if(this.username)return
    else{
      this.error=true
      return false
    }
  }
  registUser(){
    this.error=false;
    this.validateName()
    this.validateTerms()
    if(this.error)return
    else{
      this.registrationNeeded=false;
      alert("regisztrált")
    }
  }

}
