import { Component, OnInit } from '@angular/core';
import { freeApiService } from './services/freeApi.service';
import { Stories } from './classes/Stories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lstStories : Stories | undefined;
  constructor(private _freeApiService : freeApiService) {
  }

  ngOnInit() {
    this._freeApiService .getStories().subscribe(data => {
      console.log(data);
      this.lstStories = data;
    })
  } 
  
}

