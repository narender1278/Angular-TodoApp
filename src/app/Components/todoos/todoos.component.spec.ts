import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoosComponent } from './todoos.component';

describe('TodoosComponent', () => {
  let component: TodoosComponent;
  let fixture: ComponentFixture<TodoosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoosComponent]
    });
    fixture = TestBed.createComponent(TodoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
