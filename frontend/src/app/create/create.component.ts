import { ActivatedRoute, Router } from '@angular/router';
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
  getparamID: any;


  constructor(private apiService: ApiServiceService,
              private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router){}



  ngOnInit(){
    this.userCreateFormValidation();
    this.getparamID = this.activeRoute.snapshot.paramMap.get('id');
    this.patchValue()
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
      this.apiService.createData(this.createForm.value).subscribe((response) => {
        this.createForm.reset();
        this.successMessage = response.message
      });
    }else{
      this.errorMessage = 'all the fields are required';
    }
  }


  patchValue(){
    this.apiService.getDataByID(this.getparamID).subscribe((response) => {
      this.createForm.patchValue({
        fullname: response.data[0].fullname,
        email: response.data[0].email,
        mobile: response.data[0].mobile
      })
    })
  }


  userUpdate(){
    if(this.createForm.valid){
      this.apiService.updateData(this.getparamID, this.createForm.value).subscribe((res) => {
        this.createForm.reset();
        this.successMessage = res.message;
        this.router.navigate(['/read']);
      })
    }else{
      this.errorMessage = 'all the fields are required';
    }
  }



}
