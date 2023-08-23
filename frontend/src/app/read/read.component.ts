import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  allReadData:any;
  getByIdData: any;
  successMessage: any;


  constructor(private apiService: ApiServiceService){}


  ngOnInit(): void {
    this.getAllData();
  }



  // get all data
  getAllData(){
    this.apiService.getALLData().subscribe((response) => {
      this.allReadData = response.data
    })
  }


  // get data by ID
  getById(id: number){
    this.apiService.getDataByID(id).subscribe((response) => {
      console.log(response)
      this.getByIdData = response;
    })
  }




  // delete data by ID
  deleteById(id:any){
    this.apiService.deleteData(id).subscribe((response) => {
      this.getAllData();
      this.successMessage = response.message
    })
  }



  
}
