import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodooComponent } from './add-todoo.component';

describe('AddTodooComponent', () => {
  let component: AddTodooComponent;
  let fixture: ComponentFixture<AddTodooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodooComponent]
    });
    fixture = TestBed.createComponent(AddTodooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
