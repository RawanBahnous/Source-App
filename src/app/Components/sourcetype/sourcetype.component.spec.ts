import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcetypeComponent } from './sourcetype.component';

describe('SourcetypeComponent', () => {
  let component: SourcetypeComponent;
  let fixture: ComponentFixture<SourcetypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourcetypeComponent]
    });
    fixture = TestBed.createComponent(SourcetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
