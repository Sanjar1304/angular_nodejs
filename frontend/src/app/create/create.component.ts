import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiServiceService } from '../api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  createForm!: FormGroup;
  errorMessage: any;
  successMessage: any;


  constructor(private apiService: ApiServiceService,
              private fb: FormBuilder){}



  ngOnInit(){
    this.userCreateFormValidation();
  }



  userCreateFormValidation(){
    this.createForm = this.fb.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
    })
  }



  userSubmit(){
    if(this.createForm.valid){
      console.log(this.createForm.value);
      this.apiService.createData(this.createForm.value).subscribe((response) => {
        this.createForm.reset();
        this.successMessage = response.message
      });
    }else{
      this.errorMessage = 'all the fields are required';
    }
  }


}
