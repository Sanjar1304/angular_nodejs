import { ApiServiceService } from '../api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  constructor(private apiService: ApiServiceService){}


  createData(data: any){
    this.apiService.createData(data).subscribe((response) => {
      
    })
  }


}
