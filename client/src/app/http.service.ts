import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _httpClient :  HttpClient) { }

  player: any;

  getPlayers() {
    return this._httpClient.get("/players");
  }

  getOnePlayer(_id) {
    return this._httpClient.get(`/players/${_id}`);
  } 

  // Could make this on the database side once setup
  recentSearches : any = [
    {"name": "Jesseyo", "number": "11148"},
    {"name": "skull1502", "number": "1108"},
  ];

  getRecentSearches() {
    return this.recentSearches;
  }

  getPlayerStats(player) {
    if (player.name && player.number) {
      this.player = player;
      this.recentSearches.unshift({"name": player.name, "number": player.number},)
      return this._httpClient.get(`http://overwatchy.com/profile/pc/us/${player.name}-${player.number}`);
    }
    else {
      return "Error";
    }

  }

  // updatePlayer(_id, player) {
  //   return this._httpClient.put(`/players/${_id}`, player);
  // }

  // removePlayer(_id) {
  //   return this._httpClient.delete(`/players/${_id}`);
  // }

}
