import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepersonneComponent } from './deletepersonne.component';

describe('DeletepersonneComponent', () => {
  let component: DeletepersonneComponent;
  let fixture: ComponentFixture<DeletepersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
