import { Component } from '@angular/core';
import { CodeUploadComponent } from './code-upload/code-upload.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giveaway-app';
}
