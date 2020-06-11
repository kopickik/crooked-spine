import { ValidatorFn, AbstractControl } from '@angular/forms'

export function forbiddenAnswerValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value)
    return forbidden ? { forbiddenAnswer: { value: control.value } } : null
  }
}
