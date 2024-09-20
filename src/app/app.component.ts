import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartReflectivityComponent } from './chart.reflectivity/chart.reflectivity.component';
import { ChartThicknessComponent } from './chart.thickness/chart.thickness.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartReflectivityComponent, ChartThicknessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plotly';
}
