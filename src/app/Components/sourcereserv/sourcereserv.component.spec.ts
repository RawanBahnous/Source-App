import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcereservComponent } from './sourcereserv.component';

describe('SourcereservComponent', () => {
  let component: SourcereservComponent;
  let fixture: ComponentFixture<SourcereservComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourcereservComponent]
    });
    fixture = TestBed.createComponent(SourcereservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
