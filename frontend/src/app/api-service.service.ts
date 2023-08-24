import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}


  // connect frontend to backend
  apiURL = 'http://localhost:3000/'


  // get all  data
  getALLData(): Observable<any>{
    return this.http.get(`${this.apiURL}user`)
  }



  // get data by ID
  getDataByID(id: number): Observable<any>{
    return this.http.get(`${this.apiURL}user/${id}`);
  }



  // create data
  createData(data: any): Observable<any>{
    return this.http.post(`${this.apiURL}user`, data)
  }



  // update data
  updateData(id: any, data: any) : Observable<any>{
    return this.http.put(`${this.apiURL}user/${id}`, data);
  }



  // delete data
  deleteData(id:any): Observable<any>{
    return this.http.delete(`${this.apiURL}user/${id}`)
  }





}
