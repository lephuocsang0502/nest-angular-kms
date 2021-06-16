import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestEntriesComponent } from './all-request-entries.component';

describe('AllRequestEntriesComponent', () => {
  let component: AllRequestEntriesComponent;
  let fixture: ComponentFixture<AllRequestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
