import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../Services/authentication.service';
import { LoginDto } from '../../DTOs/login-dto.class';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ ReactiveFormsModule,],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  imagePath: string;
  
  serverMessage: string | null = null;
  jwtToken: string | null = null;


  constructor(private router:Router, private title:Title, private formBuilder:FormBuilder,private authService:AuthenticationService, private activeRoute:ActivatedRoute){
    this.imagePath = 'assets/images/SRPSD.png';

  }


  ngOnInit(){

    this.title.setTitle(`User Login | School Management System`)

  }




  LoginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });


  onLogin() {
    console.log(this.LoginForm.value);
    if (this.LoginForm.valid) {
      const data: LoginDto = {
        email: this.LoginForm.value.email!,
        password: this.LoginForm.value.password!,
      };
  
      this.authService.login(data).subscribe(
        (result: any) => {
          if (result.success && result.token) {
            localStorage.setItem('token', result.token);
  
            const decodedToken = this.authService.decodeToken(result.token);
            const welcomeMessage = `Welcome Back ${decodedToken.name}`;
  
            if (decodedToken.role === 'Admin') {
  
              // this.toaster.success(welcomeMessage);
              this.router.navigate(['admin']);
            } 
            else if (decodedToken.role === 'Teacher') {
              // this.toaster.success(welcomeMessage);
              this.router.navigate(['teacher']);
            }
            else if (decodedToken.role === 'Student') {
              // this.toaster.success(welcomeMessage);
              this.router.navigate(['student']);
            } 
            else if (decodedToken.role === 'Parent') {
              // this.toaster.success(welcomeMessage);
              this.router.navigate(['parent']);
            } 
            else if (decodedToken.role === 'Accountant') {
              // this.toaster.success(welcomeMessage);
              this.router.navigate(['accountant']);
            } else{
              // this.toaster.error("faild to login")
              this.router.navigate(['login']);
            }
          }
          else {
            console.error('Login failed:', result.result);
            // this.toaster.error('Login failed: ' + result.result);
            this.authService.logout();
          }
        },
        (error) => {
          console.error('Error during login:', error);
          if (error.error && error.error.errors && error.error.errors.length > 0) {
            const errorMessage = error.error.errors[0]; // Get the first error message from the array
            
            // this.toaster.error(errorMessage);
          } else {
            // this.toaster.error('Error during login. Please try again.');
          }
          this.authService.removeToken();
        }
      );
    }
  
  }

  
  // onLogin() {
  //   console.log(this.LoginForm.value);
  //   if (this.LoginForm.valid) {
  //     const data: LoginDto = {
  //       email: this.LoginForm.value.email!,
  //       password: this.LoginForm.value.password!,
  //     };
  
  //     this.authService.login(data).subscribe(
  //       (result: any) => {
  //         if (result.success && result.token) {
  //           localStorage.setItem('token', result.token);
  
           
  //             this.toaster.success("welcome back");
  //             this.router.navigate(['admin']);
          
  //         }
  //       },
  //       (error) => {
  //         console.error('Error during login:', error);
  //         if (error.error && error.error.errors && error.error.errors.length > 0) {
  //           const errorMessage = error.error.errors[0]; // Get the first error message from the array
            
  //           // this.toaster.error(errorMessage);
  //         } else {
  //           this.toaster.error('Error during login. Please try again.');
  //         }
  //         this.authService.removeToken();
  //       }
  //     );
  //   }
  
  // }

  onForgotPassword(){
    return this.router.navigate(['forgot-password'])
  }
}
