import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { CustomFormModule } from '../custom-form/custom-form.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomFormModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
