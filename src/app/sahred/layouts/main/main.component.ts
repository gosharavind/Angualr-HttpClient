import { Component, OnInit } from '@angular/core';
  import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _api:ApiService) { 
  }
   userUrl  = "https://jsonplaceholder.typicode.com/users";

  userData = [];
  ngOnInit(): void {
    this._api.getData(this.userUrl).subscribe((dt:any)=>{
        this.userData = dt
    })
  }

}
