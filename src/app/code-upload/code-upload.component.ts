import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-code-upload',
  templateUrl: './code-upload.component.html',
  styleUrls: ['./code-upload.component.css']
})
export class CodeUploadComponent implements OnInit {
registrationNeeded=false;

dates: any = []
hours:any = []
mins:any =[]

 start:Date = new Date("07/01/2022");
 end:Date = new Date("08/31/2022");
 loop:Date = new Date(this.start);

  error = false;

  d: Date= new Date()
  mdateDay: any=this.d.toISOString().slice(0, 10).toString();
  mdateHour:any = ''
  mdateMin: any= ''


  model: UploadInterface= {
    emailAdress: '',
    code:'',
    date:''
  };

  
  constructor() {
    this.model.emailAdress="a@a.a"
   }

  ngOnInit(): void {
    this.fillDatesArray();
    this.fillHoursArray();
    this.fillMinsArray();
    this.model={emailAdress:'', code:'', date:this.mdateDay+' '+this.mdateHour+':'+this.mdateMin}
    
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

  validateDate(date : any){
    if(date) return;
    else {
      this.error = true;
      return false}
  }

  submitForm() {
    this.error=false
    this.validateEmail(this.model.emailAdress);
    this.validateCode(this.model.code)
    this.validateDate(this.mdateHour)
    this.validateDate(this.mdateMin)
    if(this.error){return}
    else{
      this.error=false;
      this.model.date=this.mdateDay+' '+this.mdateHour+':'+this.mdateMin
      //küldés az apinak
      this.registrationNeeded=true
      }
  }

  fillDatesArray(){
    while(this.loop <= this.end && this.loop < this.d) {
    let newDate = this.loop.setDate(this.loop.getDate() + 1);
    this.loop = new Date(newDate);
    this.dates.push(this.loop.toISOString().slice(0, 10).toString())
    }
    this.fillSelect("#mdateDay", this.dates)
  }

  fillHoursArray(){
    for(let i=0 ;i<24; i++) {
    this.hours.push(String(i).padStart(2, '0'))
    }
    this.fillSelect("#mdateHour", this.hours)
  }

  fillMinsArray(){
    for(let i=0 ;i<60; i++) {
    this.mins.push(String(i).padStart(2, '0'))
    }
    this.fillSelect("#mdateMin", this.mins)
  }

  fillSelect(selectId :string, arr:any ){
    const select = document.querySelector(selectId);
    for (let i = 0; i < arr.length; i++) {
      let opt = document.createElement("option");
      opt.value = arr[i]; //or i, depending on what you need to do
      opt.innerHTML = arr[i]; 
      select?.append(opt); 
      //Chuck it into the dom here if you want
  }
}

  

}

export interface UploadInterface{
  emailAdress: string,
  code:string,
  date:any

}

