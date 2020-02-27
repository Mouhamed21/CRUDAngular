import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersonneComponent } from './editpersonne.component';

describe('EditpersonneComponent', () => {
  let component: EditpersonneComponent;
  let fixture: ComponentFixture<EditpersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
