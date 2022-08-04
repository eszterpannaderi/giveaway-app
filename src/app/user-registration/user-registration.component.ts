import { Component, OnInit, Input } from '@angular/core';
import { CodeUploadComponent } from '../code-upload/code-upload.component';
import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Input() email = '';
  @Input() registrationNeeded = true;

  error = false;
  username = '';
  accepted = false;

  ngOnInit(): void {}

  validateTerms(accepted: boolean) {
    if (accepted) return;
    else {
      this.error = true;
      return false;
    }
  }
  validateName(user: string) {
    if (user.length > 2) return;
    else {
      this.error = true;
      return false;
    }
  }

  backToCodeUpload() {
    location.reload();
  }
  postUser(data: any) {
    this.error = false;
    this.validateName(this.username);
    this.validateTerms(this.accepted);
    if (this.error) return;
    else {
      console.warn(data);
      //küldés az apinak

      this.http
        .post(
          'https://ncp-dummy.staging.moonproject.io/api/deri-eszter/user/register',
          data
        )
        .subscribe(
          (result) => {
            console.log(result);
            Swal.fire({
              icon: 'success',
              title: 'Sikeres regisztráció!',
              showConfirmButton: false,
              timer: 2000,
            });
            setTimeout(this.backToCodeUpload, 2000);
          },
          (err) => {
            return;
          }
        );
    }
  }
}
