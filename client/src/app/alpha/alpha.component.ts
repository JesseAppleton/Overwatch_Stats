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
  player : any;
  playerExists : boolean;

  heroArr = ["dva", "orisa", "reinhardt", "roadhog", 
            "sigma", "winston", "wrecking-ball", "zarya", 
            "ashe", "bastion", "doomfist", "genji", 
            "hanzo", "junkrat", "mccree", "mei", 
            "pharah", "reaper", "solider-76", "sombra", 
            "symmetra", "torbjorn", "tracer", "widowmaker", 
            "ana", "baptiste", "brigitte", "lucio", 
            "mercy", "moira", "zenyatta"];
            
  hero : string = "";

  constructor(private _httpService : HttpService, private _active : ActivatedRoute, private _router : Router) { }



  ngOnInit() {
    // gets random hero for profile page
    this.hero = "";

    // shows forms
    this.getDetails();
    

  }
  
  getDetails() {
    let observable = this._httpService.getPlayer();
    console.log('observable', observable)
    observable.subscribe(data => {
      console.log("getting player", data)
      this.player = data;
    
      // hides form
      if (this.player) {
        console.log('player exists')
        this.playerExists = true;
      }
      else {
        console.log('player doesnt exist')
        this.playerExists = false;
      }
  
      // gets random hero for profile page
      this.getHero();
      this.savePlayerData(data);

      
    })
  }

  getLastPlayer() {
    let observable = this._httpService.getPlayer();
  }
  
  getHero() {
    // gets random hero for profile page
    this.hero = this.heroArr[Math.floor(Math.random()*this.heroArr.length)];
    console.log("hero", this.hero);
  }

  savePlayerData(data) {
    this._httpService.setPlayerData(data);
    console.log('saved')
  }

  
  

}
