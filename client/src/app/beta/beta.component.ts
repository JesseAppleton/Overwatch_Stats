import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { HttpService } from '../http.service';

import { Chart } from 'chart.js';


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  player: any = {
    platform: 'pc',
    region: 'us',
    battleTag: 'skull1502-1108'
  }


  sampleData = [
    {date: '2019-08-17T13:24:00',
    damage: 1000,
    support: 1200,
    tank: 1040,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: '2019-08-18T13:24:00',
    damage: 1000,
    support: 1200,
    tank: 1030,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: '2019-08-20T13:24:00',
    damage: 1000,
    support: 1200,
    tank: 1070,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    
  ]

  data: any

  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
    let data = this.formatData();
    this._httpService.setChartData(data);
    console.log(data)
  }

  
  // formatData() {
  
  //   let chartData = [];
  //   for (let data of this.sampleData) {
  //     console.log(data)
  //     chartData.push(
  //       {x: data.date, y: data.tank}
  //     )
  //   }
  //   console.log(chartData)
  //   return chartData
  // }
  formatData() {
    let dates = []
    let tanks = []
    for (let data of this.sampleData) {
      dates.push(new Date(data.date));
      tanks.push(data.tank);
      // chartData.push(
      //   {x: data.date, y: data.tank}
      // )
    }
    return {dates: dates, tanks: tanks}
  }

  getStats(player) {
    let observable = this._httpService.getPlayerStats(player);
    observable.subscribe(data => {
      console.log(data);

    })
  }



  

}
