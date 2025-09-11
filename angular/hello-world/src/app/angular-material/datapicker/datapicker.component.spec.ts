import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapickerComponent } from './datapicker.component';

describe('DatapickerComponent', () => {
  let component: DatapickerComponent;
  let fixture: ComponentFixture<DatapickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatapickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
