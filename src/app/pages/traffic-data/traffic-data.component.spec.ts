import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDataComponent } from './traffic-data.component';

describe('TrafficDataComponent', () => {
  let component: TrafficDataComponent;
  let fixture: ComponentFixture<TrafficDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficDataComponent ]
    }) 
    .compileComponents();

    fixture = TestBed.createComponent(TrafficDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
