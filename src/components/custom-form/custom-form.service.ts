import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError as observableThrowError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { ProgrammingSurvey } from '../../types/programmingSurvey'

@Injectable({
  providedIn: 'root',
})
export class CustomFormService {
  private surveyUrl = 'survey'

  constructor(private http: HttpClient) {}

  private post(survey: ProgrammingSurvey) {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    return this.http
      .post<ProgrammingSurvey>(this.surveyUrl, survey)
      .pipe(catchError(this.handleError))
  }

  private handleError(res: HttpErrorResponse) {
    const badResponse = res.error
    return observableThrowError(badResponse || 'Server error')
  }
}
