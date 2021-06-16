import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestEntryComponent } from './create-request-entry.component';

describe('CreateRequestEntryComponent', () => {
  let component: CreateRequestEntryComponent;
  let fixture: ComponentFixture<CreateRequestEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRequestEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequestEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
