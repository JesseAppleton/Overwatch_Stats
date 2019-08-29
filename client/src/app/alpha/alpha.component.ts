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

  heroArr = ["dva", "orisa", "reinhardt", "roadhog", 
            "sigma", "winston", "wrecking-ball", "zarya", 
            "ashe", "bastion", "doomfist", "genji", 
            "hanzo", "junkrat", "mccree", "mei", 
            "pharah", "reaper", "solider-76", "sombra", 
            "symmetra", "torbjorn", "tracer", "widowmaker", 
            "ana", "baptiste", "brigitte", "lucio", 
            "mercy", "moira", "zenyatta"];
            
  hero : string = "";


  ngOnInit() {
    // gets random hero for profile page
    this.hero = "";

    // shows form
    this.playerExists = false;


    this.getDetails();

  }
  
  getDetails() {
    let observable = this._httpService.getPlayer();
    observable.subscribe(data => {
      console.log("get player", data)
      this.player = data;
    })
    // hides form
    this.playerExists = !this.playerExists;

    // gets random hero for profile page
    this.getHero();
  }

  getLastPlayer() {
    let observable = this._httpService.getPlayer();
  }
  
  getHero() {
    // gets random hero for profile page
    this.hero = this.heroArr[Math.floor(Math.random()*this.heroArr.length)];
    console.log("hero", this.hero);
  }
  

}
