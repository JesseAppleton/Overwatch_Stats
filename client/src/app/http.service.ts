import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _httpClient :  HttpClient) { }

  player: any;

  ngOnInit() {

  }
  
  getPlayers() {
    return this._httpClient.get("/players");
  }

  getOnePlayer(_id) {
    return this._httpClient.get(`/players/${_id}`);
  } 
  
  getPlayerStats(player) {
    return this._httpClient.get(`http://overwatchy.com/profile/${player.platform}/${player.region}/${player.battleTag}`);
  }

  onSubmit() {
    this.getPlayers();
    // this.getPlayerStats(this.player);
    
  }

  // updatePlayer(_id, player) {
  //   return this._httpClient.put(`/players/${_id}`, player);
  // }

  // removePlayer(_id) {
  //   return this._httpClient.delete(`/players/${_id}`);
  // }

}
