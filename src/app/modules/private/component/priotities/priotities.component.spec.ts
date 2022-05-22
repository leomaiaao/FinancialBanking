import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriotitiesComponent } from './priotities.component';

describe('PriotitiesComponent', () => {
  let component: PriotitiesComponent;
  let fixture: ComponentFixture<PriotitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriotitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriotitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
