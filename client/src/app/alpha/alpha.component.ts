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


  ngOnInit() {
    let observable : Observable<any> = this._active.params;
    observable.subscribe(data => {
      this.player = data;
      console.log("init player", this.player)
    })

    this.getPlayer();
  }
  
  getPlayer() {
    let observable = this._httpService.getPlayerStats(this.player);
    observable.subscribe(data => {
      console.log("get player", data)
    })

  }

  

}
