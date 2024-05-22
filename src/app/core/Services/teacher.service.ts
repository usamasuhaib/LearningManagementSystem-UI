import { Injectable } from '@angular/core';
import { TeacherRegisterDto } from '../DTOs/teacher-register-dto.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Teacher } from '../Models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseUrl='https://localhost:7254';



  constructor(private httpClient:HttpClient, private router:Router, private toaster:ToastrService, private authService:AuthenticationService) { }



  isTeacherLoggedIn(): boolean {
    const token = localStorage.getItem('token'); // Replace with your token storage mechanism

    // Check for valid token and "Admin" role
    return !!token && this.authService.decodeToken(token)?.role === 'Teacher';
  }




  teacherRegister(teacherRegisterDto:TeacherRegisterDto):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/api/Authentication/TeacherRegister",teacherRegisterDto)
  }



  getTeachersList(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.baseUrl +"/api/Teacher/GetTeachersList");
  }
  
  getTeachersCount():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl +"/api/Teacher/TeachersCount");
  }


  getTeacherById(id:string):Observable<Teacher>{
    return this.httpClient.get<Teacher>(this.baseUrl+"/api/Teacher/GetTeacherDetails/"+id);
  }

  deleteTeacher(id:any):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+"/api/Teacher/DeleteTeacher/"+id)
  }
}
