import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseChartComponent } from './noise-chart.component';

describe('NoiseChartComponent', () => {
  let component: NoiseChartComponent;
  let fixture: ComponentFixture<NoiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
