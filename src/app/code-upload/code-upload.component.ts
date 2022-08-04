import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-code-upload',
  templateUrl: './code-upload.component.html',
  styleUrls: ['./code-upload.component.css'],
})
export class CodeUploadComponent implements OnInit {
  registrationNeeded = false;

  dates: any = [];
  hours: any = [];
  mins: any = [];

  start: Date = new Date('07/01/2022');
  end: Date = new Date('08/31/2022');
  loop: Date = new Date(this.start);

  error = false;

  d: Date = new Date();
  mdateDay: any = this.d.toISOString().slice(0, 10).toString();
  mdateHour: any = '';
  mdateMin: any = '';

  model: UploadInterface = {
    email: '',
    code: '',
    purchase_time: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fillDatesArray();
    this.fillHoursArray();
    this.fillMinsArray();
    this.model = {
      email: '',
      code: '',
      purchase_time: this.mdateDay + ' ' + this.mdateHour + ':' + this.mdateMin,
    };
  }

  validateEmail(email: any) {
    if (email) {
      return;
    } else {
      this.error = true;
      return false;
    }
  }
  validateCode(code: any) {
    if (code.length == 8 && /^[A-Za-z0-9]*$/.test(code)) return;
    else {
      this.error = true;
      return false;
    }
  }

  validateDate(date: any) {
    if (date) return;
    else {
      this.error = true;
      return false;
    }
  }

  submitForm(model: any) {
    this.error = false;
    this.validateEmail(this.model.email);
    this.validateCode(this.model.code);
    this.validateDate(this.mdateHour);
    this.validateDate(this.mdateMin);
    if (this.error) {
      return;
    } else {
      this.error = false;
      this.model.purchase_time =
        this.mdateDay + ' ' + this.mdateHour + ':' + this.mdateMin;
      console.warn(model);

      this.http
        .post(
          'https://ncp-dummy.staging.moonproject.io/api/deri-eszter/code/upload',
          model
        )
        .subscribe(
          (result) => {
            console.log(result);
            const data = JSON.stringify(result);
            console.log(data);
            let won = data.includes('true', 29);
            if (won) {
              Swal.fire({
                icon: 'success',
                title: 'Gratulálunk! Nyert!',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Sajnáljuk, most nem nyert',
              });
            }
          },
          (err) => {
            Swal.fire({
              title: 'Ehhez az e-mailhez még nem tartozik felhasználó',
              text: 'Kérem regisztráljon!',
            });
            this.registrationNeeded = true;
          }
        );
    }
  }

  fillDatesArray() {
    while (this.loop <= this.end && this.loop < this.d) {
      let newDate = this.loop.setDate(this.loop.getDate() + 1);
      this.loop = new Date(newDate);
      this.dates.push(this.loop.toISOString().slice(0, 10).toString());
    }
  }

  fillHoursArray() {
    for (let i = 0; i < 24; i++) {
      this.hours.push(String(i).padStart(2, '0'));
    }
  }

  fillMinsArray() {
    for (let i = 0; i < 60; i++) {
      this.mins.push(String(i).padStart(2, '0'));
    }
  }

  //   fillSelect(selectId :string, arr:any ){
  //     const select = document.querySelector(selectId);
  //     for (let i = 0; i < arr.length; i++) {
  //       let opt = document.createElement("option");
  //       opt.value = arr[i];
  //       opt.innerHTML = arr[i];
  //       select?.append(opt);

  //   }
  // }
}

export interface UploadInterface {
  email: string;
  code: string;
  purchase_time: any;
}
