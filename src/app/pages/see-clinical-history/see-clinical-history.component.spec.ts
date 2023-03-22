import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeClinicalHistoryComponent } from './see-clinical-history.component';

describe('SeeClinicalHistoryComponent', () => {
  let component: SeeClinicalHistoryComponent;
  let fixture: ComponentFixture<SeeClinicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeClinicalHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeClinicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
