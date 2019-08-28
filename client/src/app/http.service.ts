import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _httpClient :  HttpClient) { }

  getPlayers() {
    return this._httpClient.get("/players");
  }

  getOnePlayer(_id) {
    return this._httpClient.get(`/players/${_id}`);
  } 

  updatePlayer(_id, player) {
    return this._httpClient.put(`/players/${_id}`, player);
  }

  getPlayerStats(player) {
    return this._httpClient.get(`http://overwatchy.com/profile/${player.platform}/${player.region}/${player.battleTag}`)
  }

  // removePlayer(_id) {
  //   return this._httpClient.delete(`/players/${_id}`);
  // }

}
