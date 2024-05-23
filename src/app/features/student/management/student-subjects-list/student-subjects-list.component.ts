import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../../../core/Services/student.service';
import { StudentSubjectDto } from '../../../../core/DTOs/student-subject-dto.class';
import { SubjectDto } from '../../../../core/DTOs/subject-dto.model';

@Component({
  selector: 'app-student-subjects-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './student-subjects-list.component.html',
  styleUrl: './student-subjects-list.component.css'
})
export class StudentSubjectsListComponent {

  faView = faEye;
  // studnetSubjects: any[] = [];


  studentSubjects: SubjectDto[] = [];


  constructor(private stdService: StudentService) {

  }
  ngOnInit() {
    this.reloadSubjects();
    // console.log(this.studentSubjects);
  }


  viewDetails() {

  }

  private reloadSubjects(): void {

    console.log("Hello");

    this.stdService.getStudentSubjects().subscribe(

      res => {
        console.log(res);

        this.studentSubjects = res;
      },
      error => {
        console.error('Error fetching subjects:', error);
      });


  }



}


