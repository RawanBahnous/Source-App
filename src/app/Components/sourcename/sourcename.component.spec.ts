import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcenameComponent } from './sourcename.component';

describe('SourcenameComponent', () => {
  let component: SourcenameComponent;
  let fixture: ComponentFixture<SourcenameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourcenameComponent]
    });
    fixture = TestBed.createComponent(SourcenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
