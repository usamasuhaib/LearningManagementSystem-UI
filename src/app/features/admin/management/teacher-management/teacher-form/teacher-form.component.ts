import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherRegisterDto } from '../../../../../core/DTOs/teacher-register-dto.model';
import { TeacherService } from '../../../../../core/Services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {

  constructor(private router:Router, private formBuilder:FormBuilder, private title:Title, private toaster:ToastrService, private teacherService:TeacherService){

  }

  ngOnInit(){
    this.title.setTitle(`Register User | School Management System`)

  }
  registrationForm = this.formBuilder.group({
    fullName:['',Validators.required],
    gender:['',Validators.required],
    dateOfBirth:[Validators.required],
    qualification:['',Validators.required],

    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    address:['',Validators.required],

  });


  onRegister(){
    console.log(this.registrationForm.value);

    if(this.registrationForm.valid){
      const data:TeacherRegisterDto={
        fullName:this.registrationForm.value.fullName!,
        gender:this.registrationForm.value.gender!,
        email:this.registrationForm.value.email!,

        dateOfBirth:this.registrationForm.value.dateOfBirth!,
        qualification:this.registrationForm.value.qualification!,

        mobileNumber:this.registrationForm.value.mobile!,
        address:this.registrationForm.value.address!,
      }
      this.teacherService.teacherRegister(data).subscribe((res)=>{
        console.log(res.result);
        var result=res.result;

        this.toaster.success(result);
        this.router.navigate(['admin/teachers-list'])
        
      }
    )
    }

    else{
      alert("invalid data, try again please")
    }
  }





  teacherlist(){
    return this.router.navigate(['admin/teachers-list'])
  }
}
