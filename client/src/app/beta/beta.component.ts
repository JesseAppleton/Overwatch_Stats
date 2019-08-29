import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { HttpService } from '../http.service';

import { Chart } from 'chart.js';
import * as moment from 'moment';

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
    {date: '2019-08-16T13:24:00',
    damage: null,
    support: 1200,
    tank: 1070,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: '2019-08-17T13:24:00',
    damage: 1000,
    support: 1200,
    tank: 1040,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: '2019-08-17T13:24:00',
    damage: 1000,
    support: 1200,
    tank: 1040,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: '2019-08-17T14:24:00',
    damage: 1100,
    support: 1200,
    tank: 1040,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: '2019-08-18T15:24:00',
    damage: 1000,
    support: 1300,
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
    let dates = [];
    let tank = [];
    let support = [];
    let damage = [];
    let all = [];

    //sets time of day to 0
    function getDate(ms) {
      let date = new Date(ms);
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      return new Date(year, month, day)

    }

    let _date = new Date(this.sampleData[0].date).getTime();


    dates.push(getDate(_date).toLocaleDateString("en-US"));


    for (let i=0; i<this.sampleData.length; i++) {
      let data = this.sampleData[i];

      let newDate = new Date(data.date).getTime();
      if (newDate + 86400000 > _date) {
        while (newDate + 86400000 > _date) {
          _date += 86400000;
          dates.push(getDate(_date).toLocaleDateString("en-US"))

        }

      }
      // dates.push(new Date(data.date).toLocaleDateString("en-US"));
      if (i>0 && i<this.sampleData.length-1) {
        if (data.tank != this.sampleData[i-1].tank) {
          tank.push({t: new Date(data.date), y: data.tank });
        }
        if (data.support != this.sampleData[i-1].support) {
          support.push({t: new Date(data.date), y: data.support});
        }
        if (data.damage != this.sampleData[i-1].damage) {
          damage.push({t: new Date(data.date), y: data.damage});
        }
        all.push(data.tank, data.damage, data.support)
      }
      else {
        tank.push({t: new Date(data.date), y: data.tank });
        support.push({t: new Date(data.date), y: data.support});
        damage.push({t: new Date(data.date), y: data.damage});

        if (data.tank) {all.push(data.tank)}
        if (data.support) {all.push(data.support)}
        if (data.damage) {all.push(data.tank)}
        
      }
    }
    // tank.push({t: new Date(data.date), y: data.tank });
    // support.push({t: new Date(data.date), y: data.support});
    // damage.push({t: new Date(data.date), y: data.damage});
    // all.push(data.tank, data.damage, data.support)


    return {dates: dates, tanks: tank, support: support, damage: damage, all: all}
  }
      // tank.push({t: new Date(data.date), y: data.tank });
      // support.push({t: new Date(data.date), y: data.support});
      // damage.push({t: new Date(data.date), y: data.damage});
      // all.push(data.tank, data.damage, data.support)

      
      // chartData.push(
      //   {x: data.date, y: data.tank}
      // )
      
    
  

  // getStats(player) {
  //   let observable = this._httpService.getPlayerStats(player);
  //   observable.subscribe(data => {
  //     console.log(data);

  //   })
  // }



  

}
