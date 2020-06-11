import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormControl } from '@angular/forms'

import { forbiddenAnswerValidator } from './custom-form.validators'

@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
})
export class CustomFormComponent implements OnInit {
  customForm = this.fb.group({
    howMuch: [''],
    ways: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      forbiddenAnswerValidator(/\b[iI]\s?[d|D][o|O][n|N]['|"]?[t|T]\b/i),
    ]),
  })

  constructor(private fb: FormBuilder) {}

  get ways() {
    return this.customForm.get('ways')
  }

  submit() {
    const { howMuch, ways } = this.customForm.value
    console.log(
      `Form submitted.\nHow much I love programming: ${howMuch}\nWays in which I like programming: ${ways}`
    )
  }

  ngOnInit(): void {}
}
