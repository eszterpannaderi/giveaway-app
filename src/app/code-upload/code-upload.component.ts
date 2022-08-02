import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-upload',
  templateUrl: './code-upload.component.html',
  styleUrls: ['./code-upload.component.css']
})
export class CodeUploadComponent implements OnInit {
   
  

  error = false;

  d: Date= new Date()
  dateDay: any=this.d.toISOString().slice(0, 10).toString();
  dateHour:any = String(this.d.getHours()).padStart(2, '0')
  dateMin: any= String(this.d.getMinutes()).padStart(2, '0')

  mdateDay: any=''
  mdateHour:any = ''
  mdateMin: any= ''

  template: UploadInterface= {
    emailAdress: '',
    code:'',
    date:''
  
  };

  model: UploadInterface= {
    emailAdress: '',
    code:'',
    date:''
  };

  
  constructor() { }

  ngOnInit(): void {
    this.template={ emailAdress:"a@a.a", code:"Q1W2E3R4", date:this.dateDay+' '+this.dateHour+":"+this.dateMin}
  }

  validateEmail(email : any){
    if(email){return}
    else {
      this.error = true;
      return false}
  }
  validateCode(code : any){
    if(code.length==8 && /^[A-Za-z0-9]*$/.test(code)) return;
    else {
      this.error = true;
      return false}
  }

  submitForm() {
    this.validateEmail(this.model.emailAdress);
    this.validateCode(this.model.code)
    if(this.error){return}
    else{alert("ok")}
  }

}

export interface UploadInterface{
  emailAdress: string,
  code:string,
  date:any

}

