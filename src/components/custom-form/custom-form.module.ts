import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { CustomFormComponent } from './custom-form.component'

@NgModule({
  declarations: [CustomFormComponent],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CustomFormComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomFormModule {}
