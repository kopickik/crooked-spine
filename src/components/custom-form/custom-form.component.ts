import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ProgrammingSurvey } from '../../types/programmingSurvey'

@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
})
export class CustomFormComponent implements OnInit {
  customForm = this.fb.group({
    howMuch: [''],
    ways: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  submit() {
    const { howMuch, ways } = this.customForm.value
    console.log(
      `Form submitted.\nHow much I love programming: ${howMuch}\nWays in which I like programming: ${ways}`
    )
  }

  ngOnInit(): void {}
}
