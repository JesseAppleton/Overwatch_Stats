import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  isVisible = false;

  dates: any;
  tanks: any;
  support: any;
  
  data:any;

  public lineChartData: ChartDataSets[] = [
    // {data: [{x:1, y:1}, {x:2, y:2}, {x:3, y:3}], label:'tank'}
    {data: [{x:1040, y: new Date(2019,08,27)},
      {x:2000, y: new Date(2019,08,27)},
      {x:2010, y: new Date(2019,08,27)}
    ], label:'support'},
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      xAxes: [
        {display: false},
        {type: 'time'},
        
      ],
      yAxes: [{
        ticks: {beginAtZero: true}
      }

      ]
    
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
      
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private _httpService: HttpService) { }



  ngOnInit() {
    this.getChartData();

    console.log(this.data)
    // this.lineChartData.push({data:this.data, label:'Tank'})

    this.lineChartLabels=this.dates;
    this.lineChartData.push({data: this.tanks, label:'Tank'})

  }

// getChartData() {
//   let data = this._httpService.getChartData();
//   this.data = data;

//   console.log(data);


// }


getChartData() {
  let data = this._httpService.getChartData();
  this.tanks = data.tanks;
  this.dates = data.dates;
  this.data = data;


}



}
