import { Component } from '@angular/core';
import { TeacherService } from '../../../../core/Services/teacher.service';
import { Subject } from 'rxjs';
import { TeacherSubjectDto } from '../../../../core/DTOs/teacher-subject-dto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assigned-class-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assigned-class-details.component.html',
  styleUrl: './assigned-class-details.component.css'
})
export class AssignedClassDetailsComponent {
 
  teacherSubjects: TeacherSubjectDto[]=[]


  constructor(private teacherService: TeacherService) {

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


}
