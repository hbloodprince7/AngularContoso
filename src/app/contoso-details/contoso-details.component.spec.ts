import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContosoDetailsComponent } from './contoso-details.component';

describe('ContosoDetailsComponent', () => {
  let component: ContosoDetailsComponent;
  let fixture: ComponentFixture<ContosoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContosoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContosoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
