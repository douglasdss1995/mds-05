import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleComponent } from './dialog-overview-example.component';

describe('DialogOverviewExampleComponent', () => {
  let component: DialogOverviewExampleComponent;
  let fixture: ComponentFixture<DialogOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
