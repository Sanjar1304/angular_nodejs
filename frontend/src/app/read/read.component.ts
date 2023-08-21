import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  allReadData!: any[];
  getByIdData: any;



  constructor(private apiService: ApiServiceService){}


  ngOnInit(): void {
    this.getAllData();
  }



  // get all data
  getAllData(){
    this.apiService.getALLData().subscribe((response) => {
      this.allReadData = response;
      console.log(this.allReadData)
    })
  }


  // get data by ID
  getById(id: number){
    this.apiService.getDataByID(id).subscribe((response) => {
      console.log(response)
      this.getByIdData = response;
    })
  }




}
