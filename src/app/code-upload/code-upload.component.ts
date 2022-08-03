import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-upload',
  templateUrl: './code-upload.component.html',
  styleUrls: ['./code-upload.component.css']
})
export class CodeUploadComponent implements OnInit {
   
dates: any = []
hours:any = []
mins:any =[]

 start:Date = new Date("07/01/2022");
 end:Date = new Date("08/31/2022");
 loop:Date = new Date(this.start);

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
    this.template={ emailAdress:"a@a.a", code:"Q1W2E3R4", date:this.dateDay+' '+this.dateHour+":"+this.dateMin};
    this.fillDateArray();
    this.fillHoursArray();
    this.fillMinsArray()
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

  fillDateArray(){
    while(this.loop <= this.end) {
    let newDate = this.loop.setDate(this.loop.getDate() + 1);
    this.loop = new Date(newDate);
    this.dates.push(this.loop.toISOString().slice(0, 10).toString())
  }
  //alert(this.dates[61])
  }

  fillHoursArray(){
    let i = 1
    while( i < 24) {
    this.hours.push(String(i).padStart(2, '0'))
    i++;
  }
  //alert(this.hours[22])
  }

  fillMinsArray(){
    let i = 1
    while( i < 61) {
    this.mins.push(String(i).padStart(2, '0'))
    i++;
  }
  //alert(this.mins[0])
  }

  

}

export interface UploadInterface{
  emailAdress: string,
  code:string,
  date:any

}

