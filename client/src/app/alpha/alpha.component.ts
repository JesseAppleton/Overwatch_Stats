import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})

export class AlphaComponent implements OnInit {

  constructor(private _httpService : HttpService, private _active : ActivatedRoute, private _router : Router) { }

  player : any;
  playerExists : boolean = false;

  ngOnInit() {
    this.playerExists = false;
    this.getDetails();
  }
  
  getDetails() {
    let observable = this._httpService.getPlayer();
    observable.subscribe(data => {
      console.log("get player", data)
      this.player = data;
    })
    this.playerExists = !this.playerExists;
  }

  getLastPlayer() {
    let observable = this._httpService.getPlayer();
  }

  

}
