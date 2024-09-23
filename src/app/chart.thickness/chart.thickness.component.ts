import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-chart-thickness',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './chart.thickness.component.html',
  styleUrl: './chart.thickness.component.css'
})
export class ChartThicknessComponent implements OnInit{
  //Arrays für die Koordinatenwerte initialisieren 
  xData: string[] = [];
  yData: string[] = [];
  zData: string[] = [];

  //leeren graphen initialisieren 
  public graph = {
    data: [
        { x: this.xData, y: this.yData, z: this.zData, type: 'scatter3d', mode: 'markers', marker: {color: this.zData, colorscale: 'Jet', size: 5, showscale: true, cmin: 1.03, cmax: 1.04} },
        { alphahull: 7, opacity: 0.1, type: 'mesh3d', x: this.xData, y: this.yData, z: this.zData},
    ],
    layout: {
      autosize: true,
      height: 480,
      scene: {
          aspectratio: {
              x: 1,
              y: 1,
              z: 1
          },
          camera: {
              center: {
                  x: 0,
                  y: 0,
                  z: 0
              },
              eye: {
                  x: 1.25,
                  y: 1.25,
                  z: 1.25
              },
              up: {
                  x: 0,
                  y: 0,
                  z: 1
              }
          },
          xaxis: {
              type: 'linear',
              zeroline: false
          },
          yaxis: {
              type: 'linear',
              zeroline: false
          },
          zaxis: {
              title: 'cFactorCorr',
              type: 'linear',
              zeroline: false
          }
      },
      title: 'Thickness Pointwise',
      width: 477
    }
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Thickness Daten aus dem Backend laden
    this.dataService.getThicknessData().subscribe(data => {
      this.graph.data[0].x = data.xValue;
      this.graph.data[0].y = data.yValue;
      this.graph.data[0].z = data.zValue;
      this.graph.data[0].marker!.color = data.zValue

      this.graph.data[1].x = data.xValue;
      this.graph.data[1].y = data.yValue;
      this.graph.data[1].z = data.zValue;
    }, error => {
      console.error('Fehler beim laden der thickness Daten: ',error);
    })
  }
}
