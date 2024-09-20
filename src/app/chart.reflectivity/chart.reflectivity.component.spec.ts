import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReflectivityComponent } from './chart.reflectivity.component';

describe('ChartReflectivityComponent', () => {
  let component: ChartReflectivityComponent;
  let fixture: ComponentFixture<ChartReflectivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartReflectivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartReflectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
