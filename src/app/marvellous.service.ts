import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  //DI of httpclient
  constructor(private http:HttpClient) 
  {
  }

  //connect to node server
  getBatches(){
    return this.http.get("http://localhost:5100/getbatches");
  }
}
