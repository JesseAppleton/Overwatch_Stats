import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})

export class AlphaComponent implements OnInit {

  constructor(private _httpService : HttpService) { }

  ngOnInit() {

  }

  

}
