import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  batches:any;
  constructor(private serviceObj:MarvellousService){

  }

  ngOnInit(){
   this.serviceObj.getBatches().subscribe(data=>{
    this.batches=data;
   });
  }

}
