import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from '../Models/class.model';
import { ClassDto } from '../DTOs/class-dto.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  baseUrl='https://localhost:7254';

  showAddClassDialog=false;
  showAsignSubjectDialog=false;

  showAsignTeacherDialog=false;


  showDeleteClassDialog=false;
  classId?:number;
  subjectId?:number;

  url="https://localhost:7254/api/Class/GetClassById/2";

  constructor(private http:HttpClient) { }




  addClass(classDto:ClassDto):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/api/Class/AddClass",classDto)
  }


  getClassList(): Observable<Class[]> {
    return this.http.get<Class[]>(this.baseUrl +"/api/Class/ClassList");
  }

  getClassById(id:any): Observable<ClassDto> {
    return this.http.get<ClassDto>(this.baseUrl +"/api/Class/GetClassById/"+id);
  }

  deleteClass(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl +"/api/Class/DeleteClass/"+id);
  }

}
