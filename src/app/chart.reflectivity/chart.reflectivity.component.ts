import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-chart-reflectivity',
  standalone: true,
  imports: [PlotlyModule, CommonModule],
  templateUrl: './chart.reflectivity.component.html',
  styleUrl: './chart.reflectivity.component.css'
})
export class ChartReflectivityComponent implements OnInit{
  xData: string[] = [];
  yData: string[] = [];
  zData: string[] = [];
  
  public graph = {
    data: [
        { x: this.xData, y: this.yData, z: this.zData, type: 'scatter3d', mode: 'markers', marker: {color: 'red', size: 2} },
        { x: this.xData, y: this.yData, z: this.zData, type: 'mesh3d', opacity: 0.5, alphahull: 10},
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
              type: 'linear',
              zeroline: false
          }
      },
      title: '3d point clustering',
      width: 477
    }
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Reflectivity-Daten aus dem Backend in das array laden
    this.dataService.getReflectivityData().subscribe(data => {
      console.log('Reflectivity Daten erfolgreich aus dem Backend geladen...',data);
      this.graph.data[0].x = data.xValue;
      this.graph.data[0].y = data.yValue;
      this.graph.data[0].z = data.zValue;
    }, error => {
      console.error('Fehler beim laden der reflectivity Daten: ', error);
    });
  }
}
