import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestEntryComponent } from './view-request-entry.component';

describe('ViewRequestEntryComponent', () => {
  let component: ViewRequestEntryComponent;
  let fixture: ComponentFixture<ViewRequestEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
