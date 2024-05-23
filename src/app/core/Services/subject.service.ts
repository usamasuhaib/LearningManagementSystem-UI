import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectDto } from '../DTOs/subject-dto.model';
import { Observable } from 'rxjs';
import { Class } from '../Models/class.model';
import { Subject } from '../Models/subject.model';
import { AssignClassToSubjectDto } from '../DTOs/assign-class-to-subject-dto.model';
import { AssignTeacherToSubjectDto } from '../DTOs/assign-teacher-to-subject-dto.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  baseUrl='https://localhost:7254';

  showAddSubjectDialog=false;
  showDeleteSubjectDialog=false;
  subjectId=0;

  constructor(private http:HttpClient) { }

   url="https://localhost:7254/api/Subject/SubjectsList";

  addSubject(subjectDto:SubjectDto):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/api/Subject/AddSubject",subjectDto)
  }




  getSubjectsList(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.baseUrl +"/api/Subject/SubjectsList");
  }

  assignClassToSubject(assignClassDto:AssignClassToSubjectDto): Observable<any> {
    return this.http.put<any>(this.baseUrl +"/api/Subject/AssignClassToSubject",assignClassDto);
  }


  assignTeacherToSubject(assignTeacherDto:AssignTeacherToSubjectDto): Observable<any> {
    return this.http.put<any>(this.baseUrl +"/api/Subject/AssignTeacherToSubject",assignTeacherDto);
  }



  deleteClass(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl +"/api/Class/DeleteClass/"+id);
  }

  

}
