import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentRegisterDto } from '../../../../../core/DTOs/student-register-dto.model';
import { StudentService } from '../../../../../core/Services/student.service';
@Component({
  selector: 'app-std-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './std-form.component.html',
  styleUrl: './std-form.component.css'
})
export class StdFormComponent {


  constructor(private route:Router, private formBuilder:FormBuilder, private title:Title, private toaster:ToastrService, private stdService:StudentService){

  }

  ngOnInit(){
    this.title.setTitle(`Register User | School Management System`)

  }
  registrationForm = this.formBuilder.group({
    fullName:['',Validators.required],
    gender:['',Validators.required],
    dateOfBirth:['',Validators.required],
    gradeLevel:['',Validators.required],

    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    address:['',Validators.required],

  });






  onRegister(){
    console.log(this.registrationForm.value);

    if(this.registrationForm.valid){
      const data:StudentRegisterDto={
        fullName:this.registrationForm.value.fullName!,
        gender:this.registrationForm.value.gender!,

        dateOfBirth:this.registrationForm.value.dateOfBirth!,
        gradeLevel:this.registrationForm.value.gradeLevel!,

        email:this.registrationForm.value.email!,
        mobileNumber:this.registrationForm.value.mobile!,
        address:this.registrationForm.value.address!,
      }
      this.stdService.studentRegister(data).subscribe((res)=>{
        console.log(res.result);
        var result=res.result;

        this.toaster.success(result);
        this.route.navigate(['admin/std-list'])
        
      }
    )
    }

    else{
      alert("invalid data, try again please")
    }
  }
}
