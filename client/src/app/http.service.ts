import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  chartData: any;
  player: any;
  playerData: any;

  constructor(private _httpClient :  HttpClient) { }


  getPlayers() {
    return this._httpClient.get("/players");
  }

  getPlayer() {
    console.log('inside HTTP', this.player)
    console.log('playerData', this.playerData)
    return this.playerData;
  }

  getOnePlayer(_id) {
    return this._httpClient.get(`/players/${_id}`);
  } 

  // Could make this on the database side once setup
  recentSearches : any = [
    {"name": "Jesseyo", "number": "11148", "data": {} },
    {"name": "skull1502", "number": "1108", "data": {} },
  ];

  getRecentSearches() {
    return this.recentSearches;
  }

  getPlayerStats(player) {
    this.playerData = this._httpClient.get(`http://overwatchy.com/profile/pc/us/${player.name}-${player.number}`);
    this.recentSearches.unshift({"name": player.name, "number": player.number, "data": this.player},)
    return this.playerData;

  }
  
  setPlayerData(data) {
    console.log('saving player data', data)
    this.playerData = data;
  }

  setChartData(data) {
    this.chartData = data;
  }

  getChartData() {
    return this.chartData;
  }

  // updatePlayer(_id, player) {
  //   return this._httpClient.put(`/players/${_id}`, player);
  // }

  // removePlayer(_id) {
  //   return this._httpClient.delete(`/players/${_id}`);
  // }

}
