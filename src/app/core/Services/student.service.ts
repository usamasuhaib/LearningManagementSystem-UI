import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentRegisterDto } from '../DTOs/student-register-dto.model';
import { Student } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  showDialog=false;
  stdId:string='';



  private isStudentDeleted = new BehaviorSubject<boolean>(false);
  isStudentDeleted$ = this.isStudentDeleted.asObservable();

  markStudentDeleted() {
    this.isStudentDeleted.next(true);
  }

  resetDeletionState() {
    this.isStudentDeleted.next(false);
  }




  baseUrl='https://localhost:7254';

  constructor(private httpClient:HttpClient, private router:Router, private toaster:ToastrService) { }



  studentRegister(studentRegisterDto:StudentRegisterDto):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/api/Authentication/StudentRegister",studentRegisterDto)
  }


  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl +"/api/Student/GetStudentsList");
  }





  // getStudentById(id:any):Observable<any>{
  //   return this.httpClient.get<any>(this.baseUrl+"/api/student/GetStudent/"+id)
  // }

  getStudentById(id:string):Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl+"/api/Student/GetStudentDetails/"+id);
  }

  // getStudentDetails(userId: string): Observable<StudentDetails> {
  //   return this.http.get<StudentDetails>(`${this.apiUrl}/${userId}`);
  // }
  

  deleteStudent(id:any):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+"/api/student/DeleteStudent/"+id)
  }
}
