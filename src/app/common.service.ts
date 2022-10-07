import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  

  readonly newurl="https://localhost:7290/api";

  constructor(private http:HttpClient) { }

  // getuserlist():Observable<any[]>{
  //   return this.http.get<any>(this.url+'/UserDetails');
  // }

  // adduser(val:any){
  //   return this.http.post(this.url+'/UserDetails',val)
  // }

  // updateuser(val:any){
  //   return this.http.put(this.url+'/UserDetails',val)
  // }

  // deleteuser(val:any){
  //   return this.http.delete(this.url+'/UserDetails'+val)
  // }

  // geteventslist():Observable<any[]>{
  //   return this.http.get<any>(this.url+'/EventsDetails');
  // }

  // addevent(val:any){
  //   return this.http.post(this.url+'/BookingDetails',val)
  // }

  geteventlist():Observable<any[]>{
    return this.http.get<any>(this.newurl+'/EventsDetails');
  }

  addevent(val:any){
    return this.http.post(this.newurl+'/BookingDetails',val)
  }

  getbookinglist():Observable<any[]>{
    return this.http.get<any>(this.newurl+'/BookingDetails');
}
}
