import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentRegisterDto } from '../../../../../core/DTOs/student-register-dto.model';
import { StudentService } from '../../../../../core/Services/student.service';
import { Class } from '../../../../../core/Models/class.model';
import { ClassService } from '../../../../../core/Services/class.service';
import { CommonModule } from '@angular/common';
import { ClassDto } from '../../../../../core/DTOs/class-dto.model';
@Component({
  selector: 'app-std-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './std-form.component.html',
  styleUrl: './std-form.component.css'
})
export class StdFormComponent {

  classList: ClassDto[] = [];
  classForm?: FormGroup;

  constructor(private classService:ClassService , private route:Router, private formBuilder:FormBuilder, private title:Title, private toaster:ToastrService, private stdService:StudentService){

    this.classForm = this.formBuilder.group({
      className: ['']
    });  
  
  }


  ngOnInit(): void {
    this.title.setTitle(`Register User | School Management System`)

    this.getClassList();
  }


  getClassList(): void {
    this.classService.getClassList().subscribe((classes: Class[]) => {
      this.classList = classes;
    });
  }



  registrationForm = this.formBuilder.group({
    fullName:['',Validators.required],
    gender:['',Validators.required],
    dateOfBirth:['',Validators.required],
    classId:[Validators.required],

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
        classId:this.registrationForm.value.classId!,

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
