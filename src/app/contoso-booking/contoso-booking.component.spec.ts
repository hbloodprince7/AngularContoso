import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContosoBookingComponent } from './contoso-booking.component';

describe('ContosoBookingComponent', () => {
  let component: ContosoBookingComponent;
  let fixture: ComponentFixture<ContosoBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContosoBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContosoBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
