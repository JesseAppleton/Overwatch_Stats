import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpService } from '../http.service';

import * as moment from 'moment';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  isVisible = false;

  dates: any;

  tank: any;
  support: any;
  damage: any;

  all:any;
  
  data:any;


  max: number;
  min: number;

  boost = false;


  public lineChartData: ChartDataSets[] = [
    // {data: [{x:1, y:1}, {x:2, y:2}, {x:3, y:3}], label:'tank'}
    
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {position: 'right'},
    layout: {padding: 20},
    title: {text: 'SR Ratings', display: true, fontSize:35, fontFamily:'teko'},
    scales: {
      // gridLines: {drawTicks: true},
      xAxes: [
        // {scaleLabel: {labelString: "Time"}},
        // {display: true},
        
        {type: 'time'},
        {time: {unit: 'day', unitStepSize: 1}},
        // {ticks: {display:true}}
       
        
        
      ],
      yAxes: [
        // {scaleLabel: {labelString: "Rating", display: true}}

      ]
      
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.1)',
    },
    {
    borderColor: 'red',
    backgroundColor: 'rgba(255,0,0,0.1)',
    },
    {
    borderColor: 'green',
    backgroundColor: 'rgba(0,255,0,0.1)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  

  constructor(private _httpService: HttpService) { }



  ngOnInit() {

    
    this.getChartData();
    // let testDate = new Date();
    // console.log(`moment: ${moment}`);
    console.log(this.data)
    console.log();
    // this.lineChartData.push({data:this.data, label:'Tank'})
    this.chartInit();
   

  }

chartInit() {
  this.lineChartData= [];
  this.lineChartLabels = [];
  this.lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {position: 'right'},
    layout: {padding: 20},
    title: {text: 'SR Ratings', display: true, fontSize:35, fontFamily:'teko'},
    scales: {
      xAxes: [
        {type: 'time'},
        {time: {unit: 'day', unitStepSize: 1}}, 
      ],
      yAxes: [
      ]
    }
  };
  this.lineChartColors = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.1)',
    },
    {
    borderColor: 'red',
    backgroundColor: 'rgba(255,0,0,0.1)',
    },
    {
    borderColor: 'green',
    backgroundColor: 'rgba(0,255,0,0.1)',
    }
  ];
  this.lineChartLegend = true;
  this.lineChartType = 'line';
  this.lineChartPlugins = [];
  
  this.setBounds();
  this.lineChartLabels=this.dates;

  this.lineChartData.push({data: this.tank, label:'Tank', lineTension:0} );
  this.lineChartData.push({data: this.support, label:'Support', lineTension:0});
  this.lineChartData.push({data: this.damage, label:'Damage', lineTension:0});
  // this.lineChartData.push({data: this.tank, label:'Tank', lineTension:0, backgroundColor: 'rgba(0, 0, 0, 0.1)'}, );
  // this.lineChartData.push({data: this.support, label:'Support', lineTension:0});
  // this.lineChartData.push({data: this.damage, label:'Damage', lineTension:0});

}

getChartData() {
  let data = this._httpService.getChartData();
  this.dates = data.dates;

  this.tank = data.tanks;
  this.support = data.support;
  this.damage = data.damage;

  this.all = data.all;

  this.data = data;
}

setBounds() {
  this.max = Math.max.apply(null, this.all);
  this.min = Math.min.apply(null, this.all);
  console.log(`max: ${this.max}, min: ${this.min}`)
  this.lineChartOptions.scales.yAxes.push({ticks: {max:this.max+50, min:this.min-50}})
  // this.lineChartOptions.scales.yAxes.push({scaleLabel: {labelString: "Rating", display: true}})
  
}

changeData(val) {
  //t, d, s
  this.boost = !this.boost;

  for (let i=0; i<this.all.length; i++) {
    console.log(this.all[i]);
    this.all[i] = this.all[i]+val;
  }
  for (let i=0; i<this.tank.length; i++) {
    // console.log('tanks', this.tank[i]);
    this.tank[i].y = this.tank[i].y +val;
  }
  for (let i=0; i<this.support.length; i++) {
    // console.log('supports', this.support[i]);
    this.support[i].y = this.support[i].y +val;
  }
  for (let i=0; i<this.damage.length; i++) {
    // console.log('damages', this.damage[i]);
    this.damage[i].y = this.damage[i].y +val;
  }
  
  console.log(this.all)
  // console.log(this.tank[0]);
  // this.tank[0].y += 1000;
  this.chartInit();
}


}
