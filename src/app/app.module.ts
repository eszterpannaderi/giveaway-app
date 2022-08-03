import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeUploadComponent } from './code-upload/code-upload.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeUploadComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
