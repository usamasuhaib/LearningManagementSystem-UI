import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AdminRegisterDto } from '../../DTOs/admin-register-dto.model';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastrModule, RouterLink],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  imagePath: string;

  constructor(private route:Router, private formBuilder:FormBuilder, private title:Title, private toaster:ToastrService, private authService:AuthenticationService){
    this.imagePath = 'assets/images/SRPSD.png';

  }

  ngOnInit(){
    this.title.setTitle(`Register User | School Management System`)

  }
  registrationForm = this.formBuilder.group({
    fullName:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });
  
  
  
  
  onRegister(){
    console.log(this.registrationForm.value);

    if(this.registrationForm.valid){
      const data:AdminRegisterDto={
        fullName:this.registrationForm.value.fullName!,
        email:this.registrationForm.value.email!,
        password:this.registrationForm.value.password!,
      }
      this.authService.adminRegister(data).subscribe((res)=>{
        console.log(res.result);
        var result=res.result;

        this.toaster.success(result);
        this.route.navigate(['login'])
        
      }
    )
    }

    else{
      alert("invalid data, try again please")
    }
  }

}
