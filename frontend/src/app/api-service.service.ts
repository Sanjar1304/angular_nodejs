import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}


  // connect frontend to backend
  apiURL = 'http://localhost:3000/'


  // get all  data
  getALLData(){
    return this.http.get(`${this.apiURL}user`);
  }



  // get data by ID
  getDataByID(id: number){
    return this.http.get(`${this.apiURL}/user/${id}`);
  }



}
