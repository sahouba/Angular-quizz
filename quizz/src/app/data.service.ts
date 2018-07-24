import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api:string='http://localhost:8000/api';
 // injection de service Http afin de réaliser des requétes  Ajax
  constructor(private http:HttpClient) { }
   test()   {
    console.log('test depuis DataService');
    //get renvoie un objet de type Observable(Rxjs)
    this.http
    .get(this.api)
    .subscribe((res)=>{
      console.log(res);
    });
  }
  getCategories(){

  }
}
