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

  player = {name: "", number: ""};
  tag: any;
  recentSearches : any;
  showForm : boolean = true;
  
  ngOnInit() {
    

    this.getSearches();
    
    this.showForm = true;
  }

  submit() {
    let split = this.tag.split('#');
    console.log(split);
    this.player.name = split[0];
    this.player.number = split[1];

    let observable = this._httpService.getPlayerStats(this.player);
    observable.subscribe(data => {
      this.player = data;
      console.log("player", this.player)
      // updates list
      this.getSearches();
  
      // hides form;
      this.showForm = !this.showForm;
      
      // routes to user info app
      this._router.navigate([`/details`]);
      
    })
  }

  reSearch(tag) {
    this.tag = tag;
    this.submit();
  }

  getSearches() {
    this.recentSearches = this._httpService.getRecentSearches();
    console.log("searches:", this.recentSearches)
  }
}
