import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart-reflectivity',
  standalone: true,
  imports: [],
  templateUrl: './chart.reflectivity.component.html',
  styleUrl: './chart.reflectivity.component.css'
})
export class ChartReflectivityComponent implements OnInit{
  //Array für Reflectivity-Daten
  reflectivityData!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Reflectivity-Daten aus dem Backend in das array laden
    this.dataService.getReflectivityData().subscribe(data => {
      console.log('Reflectivity Daten erfolgreich aus dem Backend geladen...',data);
      this.reflectivityData = data;
    }, error => {
      console.error('Fehler beim laden der reflectivity Daten: ', error);
    });
  }
}
