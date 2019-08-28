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
    {date: new Date('2019-08-17T13:24:00'),
    damage: 1000,
    support: 1200,
    tank: 1030,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: new Date('2019-08-17T13:24:00'),
    damage: 1000,
    support: 1200,
    tank: 1030,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    {date: new Date('2019-08-17T13:24:00'),
    damage: 1000,
    support: 1200,
    tank: 1030,
    cgWon: 220,
    cgLost: 150,
    cgDraw: 12 },
    
  ]

  data: any = {
    
  }


  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {

  }

  tankData() {
    data 
    for (let d of this.sampleData) {

    }
  }


  getStats(player) {
    let observable = this._httpService.getPlayerStats(player);
    observable.subscribe(data => {
      console.log(data);

    })
  }



  

}
