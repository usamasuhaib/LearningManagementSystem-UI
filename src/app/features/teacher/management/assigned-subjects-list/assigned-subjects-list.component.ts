import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { TeacherService } from '../../../../core/Services/teacher.service';
import { Router } from '@angular/router';
import { TeacherSubjectDto } from '../../../../core/DTOs/teacher-subject-dto.model';

@Component({
  selector: 'app-assigned-subjects-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './assigned-subjects-list.component.html',
  styleUrl: './assigned-subjects-list.component.css'
})
export class AssignedSubjectsListComponent {

  faView = faEye;

  teacherSubjects: TeacherSubjectDto[]=[]


  constructor(private teacherService: TeacherService, private router:Router) {

  }

  ngOnInit() {


    this.reloadSubjects()
  }



  private reloadSubjects() {
    this.teacherService.getTeacherSubjects().subscribe((response) => {
      this.teacherSubjects = response.subjects;
    },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }


  viewDetails(){
// this.router.navigate(['teacher/subject-details'])
  }
}
