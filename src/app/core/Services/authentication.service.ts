import { Injectable } from '@angular/core';
import { LoginDto } from '../DTOs/login-dto.class';
import { Observable } from 'rxjs';
import { JwtAuth } from '../jwt-auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminRegisterDto } from '../DTOs/admin-register-dto.model';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl='https://localhost:7254';



  decodedToken=null;

  constructor(private httpClient:HttpClient, private router:Router, private toaster:ToastrService) { }


  setToken(token:string){
    localStorage.setItem('token',token);
    }
  
    getToken(){
      localStorage.getItem('token')
    }
  
    decodeToken(token: string): any {
      try {
        const decodedToken = jwtDecode(token);
        return decodedToken;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

  
    logout(){
      localStorage.removeItem('token');

      this.toaster.success("Logged Out successfully")
      this.router.navigate(['login']);
    }

    removeToken(){
      localStorage.removeItem('token');

    }

    
    adminRegister(registerDto:AdminRegisterDto):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+"/api/Authentication/AdminRegister",registerDto)
    }
  
    login(loginDto:LoginDto):Observable<JwtAuth>{
      return this.httpClient.post<JwtAuth>(this.baseUrl+"/api/Authentication/Login",loginDto)
    }
}
