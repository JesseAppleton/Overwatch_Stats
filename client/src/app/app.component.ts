import { Component } from '@angular/core';

import { HttpService } from './http.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _httpService :  HttpService, private _router : Router) { }

  player : any;
  recentSearches : any;
  
  ngOnInit() {
    this.player = { name: "", number: "" } ;
    this.getSearches();
  }

  submit() {
    let observable = this._httpService.getPlayerStats(this.player);
    observable.subscribe(data => {
      this.player = data;
      console.log("player", this.player)
      
    })
    // updates list
    this.getSearches();
    
    // routes to user info app
    this._router.navigate([`/details`]);
  }

  getSearches() {
    this.recentSearches = this._httpService.getRecentSearches();
    console.log("searches:", this.recentSearches)
  }
}
