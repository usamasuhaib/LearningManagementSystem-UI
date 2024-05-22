import { Component } from '@angular/core';
import { Class } from '../../../../../core/Models/class.model';
import { Subject } from '../../../../../core/Models/subject.model';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../../../../../core/Services/class.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassDto } from '../../../../../core/DTOs/class-dto.model';
import { SubjectService } from '../../../../../core/Services/subject.service';
import { Teacher } from '../../../../../core/Models/teacher.model';
import { TeacherService } from '../../../../../core/Services/teacher.service';

@Component({
  selector: 'app-class-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.css'
})
export class ClassDetailsComponent {
  // classDetails?: Class;
  classDetails: any;

  classId: any;

  subjectsList: Subject[] = [];
  teachersList: Teacher[] = [];



  // subjects: Subject[] = []; // Array to hold subjects

  // id?:number;

  constructor(private activeRoute: ActivatedRoute, private classService: ClassService, private subjectService:SubjectService, private teacherService:TeacherService) { }

  ngOnInit(): void {

    // Retrieve the id parameter from the URL
    this.classId = this.activeRoute.snapshot.paramMap.get('id');
    this.getClassDetails();
    this.reloadSubjectsList();
    this.reloadTeachersList();

  }

  getClassDetails() {
    this.classService.getClassById(this.classId).subscribe(data => {
      this.classDetails = data;
    });
  }


  addStudentAndTeacher(){
    
  }
  // getSubjects() {
  //   this..getSubjects().subscribe(data => {
  //     this.subjects = data;
  //   });
  // }

  // assignSubject(subjectId: number) {
  //   this.classService.assignSubjectToClass(this.classId, subjectId).subscribe(() => {
  //     this.getClassDetails(); // Refresh class details
  //   });
  // }


  assignTeacher(id:any){

  }

  assignSubjectAndTeacher(){

  }


  private reloadSubjectsList(){

    this.subjectService.getSubjectsList().subscribe((result) => {
      console.log(result);
      this.subjectsList = result;
    },
      (err: Error) => {
        console.log(err.message);
      }
    )
}


private reloadTeachersList(){

  this.teacherService.getTeachersList().subscribe((result) => {
    console.log(result);
    this.teachersList = result;
  },
    (err: Error) => {
      console.log(err.message);
    }
  )
}


}
