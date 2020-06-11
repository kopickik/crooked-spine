import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CustomFormComponent } from './custom-form.component'
import { By } from '@angular/platform-browser'

describe('CustomFormComponent', () => {
  let component: CustomFormComponent
  let fixture: ComponentFixture<CustomFormComponent>
  let input1: Element
  let input2: Element

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFormComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Step 2', () => {
    it('numerical input with label "How much I like programming"', () => {
      // const label1 = fixture.debugElement.query(By.css(''))
      const input1 = fixture.debugElement.query(By.css('#how-much')).nativeNode
      expect(input1.type).toBe('number')
    })
  })
})
